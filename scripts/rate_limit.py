"""
rate_limit.py
Rate limiting simple en memoria, por IP, reutilizable en cualquier router.

Mismo patrón que el usado en canal_denuncias.py para el login (bloqueo por
IP con ventana deslizante). No agrega dependencias externas — apto para
un solo proceso (Railway hobby/free), que es como está desplegado hoy.

Si en el futuro se escala a múltiples workers/instancias, este limitador
en memoria deja de ser efectivo (cada proceso tiene su propio estado) y
conviene migrar a algo respaldado por Redis (ej. slowapi + redis).
"""
from collections import defaultdict
from datetime import datetime, timedelta

from fastapi import HTTPException, Request

# {bucket_key: [timestamps de llamadas recientes]}
_llamadas: dict = defaultdict(list)


def limitar(request: Request, clave: str, max_llamadas: int, ventana_seg: int) -> None:
    """
    Lanza HTTP 429 si la IP del request superó `max_llamadas` en los
    últimos `ventana_seg` segundos, para el bucket identificado por `clave`
    (normalmente el nombre del endpoint, para no mezclar límites entre rutas).
    """
    ip = request.client.host if request.client else "desconocida"
    bucket_key = f"{clave}:{ip}"

    ahora = datetime.utcnow()
    corte = ahora - timedelta(seconds=ventana_seg)

    llamadas = [t for t in _llamadas[bucket_key] if t > corte]

    if len(llamadas) >= max_llamadas:
        restante = (llamadas[0] + timedelta(seconds=ventana_seg) - ahora).total_seconds()
        restante = max(int(restante), 1)
        raise HTTPException(
            status_code=429,
            detail=f"Demasiadas solicitudes. Probá de nuevo en {restante}s.",
            headers={"Retry-After": str(restante)},
        )

    llamadas.append(ahora)
    _llamadas[bucket_key] = llamadas