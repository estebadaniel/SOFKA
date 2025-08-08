Cypress.on('uncaught:exception', (err, runnable) => {
  // prevent tests from failing due to unexpected errors on the site
  return false
})