Exercise 2 - Petstore API tests with Cypress
===========================================

Requisitos:
- Node.js (>=14)
- npm
- Cypress (instalado via npm)

Instalación y ejecución:
1. Descomprimir el proyecto.
2. Abrir una terminal en la carpeta del proyecto (exercise2_petstore_api).
3. Ejecutar:
   npm install
   npm run open    # para abrir Cypress UI y ejecutar los tests
   # o
   npm test        # para ejecutar tests en modo headless

Qué hace:
- Añade una mascota vía POST /pet con un id único.
- Consulta la mascota por ID.
- Actualiza el nombre y el status a 'sold'.
- Consulta mascotas por status 'sold' y valida que la mascota actualizada está presente.
- Incluye 2 casos negativos: GET de mascota inexistente y búsqueda por status inválido.

Variables:
- El test usa un id único basado en timestamp (Date.now()).

Fecha de creación: 2025-08-07 22:30:38 UTC