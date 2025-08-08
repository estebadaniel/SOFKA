# Proyecto SOFKA - QA Automation & Performance

Este repositorio contiene los entregables y artefactos creados durante las actividades de automatización y pruebas realizadas desde el día anterior hasta hoy. El trabajo incluye pruebas **E2E (End-to-End)**, **pruebas de carga** y la resolución de una **prueba teórica**.

---

##  Contenido del repositorio

### 1. **Pruebas E2E - Cypress**
- **Carpeta:** `exercise1_demoblaze_e2e`
- **Carpeta:** `exercise2_petstore_api`
- Framework utilizado: **Cypress**
- Cobertura:
  - Validación de flujos críticos de negocio.
  - Pruebas funcionales sobre frontend y API integradas.
  - Escenarios diseñados para ser mantenibles y escalables.
- **Justificación del uso de Cypress:**
  - Sintaxis simple y rápida curva de aprendizaje.
  - Ejecución directa en navegador con visualización en tiempo real.
  - Soporte nativo para **JavaScript/TypeScript** y gran comunidad.
  - Integración sencilla con pipelines CI/CD.
  - Manejo robusto de asincronía y espera implícita para elementos.

---

### 2. **Pruebas de Carga - Apache JMeter**

- Incluye:
  - Script `.jmx` diseñado para **20 TPS (Transactions Per Second)**.
  - Configuración de usuarios concurrentes, periodo de ramp-up y loops optimizados.
  - Uso de CSV Data Set Config para parametrización de datos.
- **Objetivo:**
  - Evaluar el desempeño y la capacidad de respuesta del sistema bajo carga controlada.
  - Detectar posibles cuellos de botella antes de ir a producción.

---

### 3. **Prueba Teórica**
- **Carpeta:** `theoretical_test`
- Contiene:
  - Documento con las respuestas a preguntas conceptuales sobre QA, automatización y buenas prácticas.
  - Justificación técnica de herramientas y enfoques elegidos.

---

## Herramientas y Tecnologías Utilizadas

| Área                   | Herramienta / Tecnología | Motivo de Uso |
|------------------------|--------------------------|--------------|
| Automatización E2E     | Cypress                  | Rapidez en el desarrollo, fácil depuración, ecosistema sólido. |
| Pruebas de Carga       | Apache JMeter            | Flexibilidad, soporte para múltiples protocolos, fácil integración con CSV. |
| Lenguaje               | JavaScript / Node.js     | Ecosistema compatible con Cypress y soporte amplio. |
| Control de versiones   | Git / GitHub             | Trazabilidad y trabajo colaborativo. |

---

##  Resultados Esperados
- **E2E:** Asegurar la estabilidad de los flujos principales antes de despliegues.
- **Carga:** Identificar límites de rendimiento y establecer métricas base.
- **Teórico:** Validar conocimientos de QA, fundamentos técnicos y capacidad de toma de decisiones.


##  Ejecución Rápida

### E2E con Cypress
```bash
cd exercise1_demoblaze_e2e
npm install
npx cypress open
