
describe('Petstore API tests - CRUD subset', () => {
  const pet = {
    id: Date.now(),
    name: 'Firulais',
    photoUrls: ['https://example.com/photo.jpg'],
    status: 'available'
  }

  function getPetWithRetry(id, retries = 5, delay = 1000) {
    return cy.request({ method: 'GET', url: `/pet/${id}`, failOnStatusCode: false }).then((resp) => {
      if (resp.status === 200) {
        return resp
      } else if (retries > 0) {
        cy.wait(delay)
        return getPetWithRetry(id, retries - 1, delay)
      } else {
        throw new Error(`Pet ${id} not found after retries`)
      }
    })
  }

  it('Add a pet to the store (POST /pet) - positive', () => {
    cy.request('POST', '/pet', pet).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body.id).to.eq(pet.id)
    })
  })

  it('Get the pet by id (GET /pet/{petId}) - positive', () => {
    getPetWithRetry(pet.id).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body.id).to.eq(pet.id)
      expect(resp.body.name).to.eq(pet.name)
    })
  })

  it('Update the pet name and status to sold (PUT /pet) - positive', () => {
    const updatedPet = { ...pet, name: 'FirulaisUpdated', status: 'sold' }
    cy.request('PUT', '/pet', updatedPet).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body.name).to.eq('FirulaisUpdated')
      expect(resp.body.status).to.eq('sold')
      pet.name = updatedPet.name
      pet.status = updatedPet.status
    })
  })
it('Find pets by status (GET /pet/findByStatus?status=sold) - positive', () => {
  let retries = 5
  function tryFindPet() {
    cy.request({ method: 'GET', url: '/pet/findByStatus?status=sold', failOnStatusCode: false }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body).to.be.an('array')
      const found = resp.body.find(p => p.id === pet.id)
      if (found) {
        expect(found.status).to.eq('sold')
      } else if (retries > 0) {
        retries--
        cy.wait(1000)
        tryFindPet()
      } else {
        throw new Error(`Pet ${pet.id} not found in sold list after retries`)
      }
    })
  }
  tryFindPet()
})


  it('Get non-existent pet by id returns 404 - negative', () => {
    cy.request({ method: 'GET', url: '/pet/999999999999', failOnStatusCode: false }).then((resp) => {
      expect(resp.status).to.eq(404)
    })
  })

  it('Find pets by invalid status returns array (but not our pet) - negative', () => {
    cy.request('GET', '/pet/findByStatus?status=invalidstatus').then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body).to.be.an('array')
      const found = resp.body.find(p => p.id === pet.id)
      expect(found, 'pet should not be in invalid status list').to.not.exist
    })
  })
})
