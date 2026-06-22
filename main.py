"""
Monitor de Compliance Empresarial — main.py
Punto de entrada de la API FastAPI.
Ph.D. Vicente H. Monteverde · Ecosistema Transparencia
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
import os

from scripts.api_compliance import router as compliance_router
from scripts.canal_denuncias import router as denuncias_router
# Línea 1 — en los imports, después del import de compliance_router:
from scripts.canal_denuncias import router as denuncias_router

# Línea 2 — después de app.include_router(compliance_router, ...):
app.include_router(denuncias_router, prefix="/api/v1", tags=["Canal de Denuncias"])
app = FastAPI(
    title="Monitor de Compliance Empresarial",
    description="API REST — Ley 27.401 · Ley 2/2023 · Estándares Internacionales",
    version="1.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Rutas API ───────────────────────────────────────────────────────────────
app.include_router(compliance_router, prefix="/api/v1")
app.include_router(denuncias_router,  prefix="/api/v1", tags=["Canal de Denuncias"])

# ── Archivos estáticos (frontend) ───────────────────────────────────────────
STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
if os.path.exists(STATIC_DIR):
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

@app.get("/", include_in_schema=False)
async def root():
    index = os.path.join(STATIC_DIR, "index.html")
    if os.path.exists(index):
        return FileResponse(index)
    return {"status": "ok", "docs": "/docs"}

@app.get("/health")
async def health():
    return {"status": "ok", "version": "1.1.0"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)