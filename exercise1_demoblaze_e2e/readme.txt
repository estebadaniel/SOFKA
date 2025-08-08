Exercise 1 - Demoblaze E2E with Cypress
======================================

Requisitos:
- Node.js (>=14)
- npm
- Cypress (instalado via npm)

Instalación y ejecución:
1. Descomprimir el proyecto.
2. Abrir una terminal en la carpeta del proyecto (exercise1_demoblaze_e2e).
3. Ejecutar:
   npm install
   npm run open    # para abrir Cypress UI
   # o
   npm test        # para ejecutar tests en modo headless

Estructura:
- cypress/e2e: contiene el test principal 'demoblaze_purchase.cy.js'
- cypress/config: configuración de Cypress en cypress.config.js
- README y conclusions en archivos de texto.

Notas:
- El test abre la página https://www.demoblaze.com, añade dos productos, valida el carrito,
  completa el formulario de compra y confirma la compra.
- Se agregó manejo de alertas y uncaught:exception para robustez.

Fecha de creación: 2025-08-07 22:30:38 UTC