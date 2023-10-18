describe('Testing Google.com', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com')
    })

    it('Buscar por un query valido', () => {
        cy.get('textarea[name="q"]').type('Uniandes{enter}')
        cy.get('#search').should('contain', 'Uniandes')
    })

    it('Buscar por un query invalido', () => {
        cy.get('textarea[name="q"]').type('invalid_query{enter}')
        cy.get('#search').should('not.contain', 'Results for invalid_query')
    })

    it('Navegar a imagenes', () => {
        cy.get('a[data-pid="2"]').click()
        cy.url().should('include', 'img')
    })

    it('Navegar a Gmail', () => {
        cy.get('a[data-pid="23"]').click()
        cy.url().should('include', 'mail')
    })

    it('Click a Acceder', () => {
        cy.get('a[href*="accounts.google.com"]').click()
        cy.url().should('include', 'accounts.google.com')
    })    

    it('Busqueda vacia', () => {
        cy.get('textarea[name="q"]').type('{enter}')
        cy.get('#search').should('not.exist')
    })

    it('Busqueda muy larga', () => {
        const longQuery = 'a'.repeat(255)
        cy.get('textarea[name="q"]').type(longQuery + '{enter}')
        cy.get('#search').should('not.contain', 'Results for ' + longQuery)
    })

    it('Navegar a Noticias', () => {
        cy.get('a[href*="news.google.com"]').click()
        cy.url().should('include', 'news.google.com')
    })    
})
