describe("Get users for specific provider", () =>{

    it("Verify the status code of response", () => {
        cy.request('GET', 'https://stagingapi.draft10.com/lobbyV2/getGamesList?categories[]=casino&providerNames[]=Endorphina&&limit=28&skinId=572221&status=ok&device=desktop')
            .its('status').should('equal', 200)
    })

    it('should contain essential details for each game', () => {
        cy.request('GET', 'https://stagingapi.draft10.com/lobbyV2/getGamesList?categories[]=casino&providerNames[]=Endorphina&&limit=28&skinId=572221&status=ok&device=desktop')
            .its('body.games')
            .each(game => {
                expect(game).to.have.property('id')
                expect(game).to.have.property('name')
                expect(game).to.have.property('status')
            })
    })

    it('should return body in array structure', () => {
        cy.request('GET', 'https://stagingapi.draft10.com/lobbyV2/getGamesList?categories[]=casino&providerNames[]=Endorphina&&limit=28&skinId=572221&status=ok&device=desktop')
            .its('body')
            .should('have.property', 'games')
            .and('be.an', 'array')
            .and('not.be.empty')
    })

    it('should contain games from a specific provider', () => {
        const provider = "Endorphina" // Update with the provider name you expect

        cy.request('GET', `https://stagingapi.draft10.com/lobbyV2/getGamesList?categories[]=casino&providerNames[]=${provider}&&limit=28&skinId=572221&status=ok&device=desktop`)
            .its('body.games')
            .each(game => {
                expect(game.providerName).to.equal(provider)
            })
    })

    it('should response empty array of games', () => {
        const provider = "INVALID_PROVIDER"

        cy.request('GET',`https://stagingapi.draft10.com/lobbyV2/getGamesList?categories[]=casino&providerNames[]=${provider}&&limit=28&skinId=572221&status=ok&device=desktop`)
            .its('body')
            .should('have.property', 'games')
            .and('be.an', 'array')
            .and('be.empty')
        })

})