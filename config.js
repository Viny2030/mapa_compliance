/**
 * config.js — Monitor de Compliance Empresarial
 * ================================================
 * ÚNICO ARCHIVO A EDITAR PARA PERSONALIZAR CADA CLIENTE.
 */

const CONFIG = {

  empresa: {
    nombre:       "Empresa Demo S.A.",
    cuit:         "30-00000000-0",
    sector:       "Construcción y obra pública",
    tamanio:      "grande",
    pais:         "Argentina",
    provincias:   ["CABA", "Buenos Aires", "Córdoba"],
    internacional: true,
    logo:         "",
    color_primario: "#1a3a5c",
    responsable_compliance: "Dra. María González",
    contacto:     "compliance@empresademo.com.ar",
  },

  programa_integridad: {
    nivel_madurez:   "medio",
    fecha_inicio:    "2024-03-01",
    ultima_revision: "2025-06-01",
    registrado_rite: true,
    url_rite:        "https://www.rite.gob.ar/empresas",

    elementos_obligatorios: [
      { id: "codigo_etica",      label: "Código de ética / conducta",                         estado: "completo",    evidencia: "Aprobado por Directorio 03/2024" },
      { id: "reglas_licitacion", label: "Reglas para contrataciones públicas y licitaciones",  estado: "completo",    evidencia: "Procedimiento LP-001 vigente" },
      { id: "capacitacion",      label: "Capacitaciones periódicas a directores y empleados",  estado: "en_progreso", evidencia: "2 de 4 módulos completados" },
    ],

    elementos_opcionales: [
      { id: "analisis_riesgos",  label: "Análisis periódico de riesgos",               estado: "completo",    evidencia: "Matriz actualizada 06/2025" },
      { id: "canal_denuncias",   label: "Canal de denuncias confidencial",              estado: "completo",    evidencia: "Canal activo en compliance@empresademo.com.ar" },
      { id: "due_diligence",     label: "Due diligence de terceros",                    estado: "en_progreso", evidencia: "Protocolo DD-003 en implementación" },
      { id: "politica_regalos",  label: "Política de regalos e invitaciones",           estado: "completo",    evidencia: "Política GR-002 distribuida" },
      { id: "responsable",       label: "Responsable interno de Compliance designado",  estado: "completo",    evidencia: "Dra. M. González — Res. Directorio 01/2024" },
      { id: "politica_ddjj",     label: "Política de declaraciones juradas de conflictos", estado: "pendiente", evidencia: "" },
      { id: "investigaciones",   label: "Procedimiento de investigaciones internas",    estado: "en_progreso", evidencia: "Borrador aprobado, pendiente implementación" },
      { id: "plan_comunicacion", label: "Plan de comunicación interna del Programa",    estado: "pendiente",   evidencia: "" },
    ],
  },

  mapa_riesgo: [
    { area: "Comercial / Ventas",         riesgo: "alto",  descripcion: "Interacción frecuente con sector público. Riesgo de cohecho en licitaciones." },
    { area: "Compras y Abastecimiento",   riesgo: "alto",  descripcion: "Terceros no evaluados. Riesgo de lavado por cadena de proveedores." },
    { area: "Finanzas y Contabilidad",    riesgo: "medio", descripcion: "Registros contables. Riesgo de balances falsos (art. 300 bis CP)." },
    { area: "Recursos Humanos",           riesgo: "medio", descripcion: "Contratación de funcionarios públicos. Conflictos de interés." },
    { area: "Gobierno Corporativo",       riesgo: "medio", descripcion: "Toma de decisiones. Riesgo de negociaciones incompatibles." },
    { area: "Operaciones / Producción",   riesgo: "bajo",  descripcion: "Bajo nivel de interacción con funcionarios públicos." },
    { area: "Tecnología e Información",   riesgo: "bajo",  descripcion: "Acceso a datos sensibles. Riesgo de uso indebido de información." },
    { area: "Relaciones Institucionales", riesgo: "alto",  descripcion: "Lobby, donaciones, patrocinios. Tráfico de influencias." },
  ],

  capacitaciones: [
    { modulo: "Introducción a la Ley 27.401",              obligatorio: true,  completado: 95, fecha_limite: "2026-03-31", destinatarios: "Todos" },
    { modulo: "Código de Ética y Conducta",                obligatorio: true,  completado: 88, fecha_limite: "2026-03-31", destinatarios: "Todos" },
    { modulo: "Procedimientos en Contrataciones Públicas", obligatorio: true,  completado: 72, fecha_limite: "2026-06-30", destinatarios: "Comercial, Compras" },
    { modulo: "Due Diligence de Terceros",                 obligatorio: false, completado: 45, fecha_limite: "2026-09-30", destinatarios: "Compras, Finanzas" },
    { modulo: "Prevención de Lavado de Activos (UIF)",     obligatorio: true,  completado: 60, fecha_limite: "2026-06-30", destinatarios: "Finanzas, Directores" },
    { modulo: "FCPA y Normativa Internacional",            obligatorio: false, completado: 30, fecha_limite: "2026-12-31", destinatarios: "Directores, Comercial" },
  ],

  cuits_verificados: [
    { razon_social: "Proveedor Ejemplo 1 S.R.L.", cuit: "30-11111111-1", fecha: "2025-05-10", resultado: "sin_antecedentes" },
    { razon_social: "Proveedor Ejemplo 2 S.A.",   cuit: "30-22222222-2", fecha: "2025-04-20", resultado: "sin_antecedentes" },
    { razon_social: "Siemens S.A.",               cuit: "30-54667581-3", fecha: "2025-03-15", resultado: "alerta_ocde" },
  ],

  historial_score: [
    { mes: "Ene 2026", score: 42 },
    { mes: "Feb 2026", score: 48 },
    { mes: "Mar 2026", score: 53 },
    { mes: "Abr 2026", score: 58 },
    { mes: "May 2026", score: 63 },
    { mes: "Jun 2026", score: 67 },
  ],

  plan_mejora: [
    { accion: "Completar módulo UIF/Lavado de Activos",          prioridad: "alta",  responsable: "RRHH",       vence: "2026-06-30", estado: "en_progreso" },
    { accion: "Implementar política de DDJJ conflictos interés", prioridad: "alta",  responsable: "Compliance", vence: "2026-07-31", estado: "pendiente" },
    { accion: "Finalizar procedimiento investigaciones internas", prioridad: "media", responsable: "Legal",      vence: "2026-08-31", estado: "en_progreso" },
    { accion: "Desarrollar plan de comunicación interna",        prioridad: "media", responsable: "Compliance", vence: "2026-09-30", estado: "pendiente" },
    { accion: "Ampliar due diligence a 10 proveedores clave",    prioridad: "baja",  responsable: "Compras",    vence: "2026-12-31", estado: "en_progreso" },
  ],

  exposicion_internacional: {
    opera_en_usa:    false,
    opera_en_uk:     false,
    opera_en_brasil: true,
    opera_en_ue:     false,
    leyes_aplicables: ["Convención OCDE (Ley 25.319)", "UNCAC (Ley 26.097)", "Lei Anticorrupção Brasil 12.846/2013"],
  },

  meaci_url: "https://meaci-production.up.railway.app",
  meaci_api: "https://meaci-production.up.railway.app/api/cruce-compr",
};
