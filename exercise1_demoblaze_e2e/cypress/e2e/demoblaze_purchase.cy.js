describe('Demoblaze - Purchase flow', () => {
  it('Adds two products, views cart, completes purchase', () => {
    // Visit homepage
    cy.visit('/')

    // Helper to add first product found in a category list by index
    function addProductByIndex(index){
      cy.get('.card-block .card-title a').eq(index).scrollIntoView().click()
      cy.contains('Add to cart').click()
      // accept browser alert
      cy.on('window:alert', (txt) => {
        expect(txt).to.match(/Product added|added to your cart|added/)
      })
      cy.visit('/') // go back to home to add another product
    }

    // Add two products (indexes 0 and 1)
    addProductByIndex(0)
    addProductByIndex(1)

    // Go to cart
    cy.contains('Cart').click()
    cy.url().should('include', 'cart.html')

    // Validate there are at least 2 items
    cy.get('#tbodyid > tr').should('have.length.at.least', 2)

    // Capture the product names for later assertion
    cy.get('#tbodyid > tr td:nth-child(2)').then($names => {
      const names = [...$names].map(n => n.innerText.trim())
      expect(names.length).to.be.gte(2)
    })

    // Click on Place Order
    cy.contains('Place Order').click()

    // Fill purchase form
    cy.get('#name').type('Daniel Esteban')
    cy.get('#country').type('Colombia')
    cy.get('#city').type('Bogotá')
    cy.get('#card').type('4111111111111111')
    cy.get('#month').type('12')
    cy.get('#year').type('2026')

    // Purchase
    cy.contains('Purchase').click()

    // Validate confirmation modal
    cy.get('.sweet-alert').should('be.visible')
    cy.get('.sweet-alert').invoke('text').then(txt => {
      expect(txt).to.match(/Thank you|Thank you for your purchase|Id:/)
    })

    // Close confirmation
    cy.contains('OK').click()
  })
})