describe('Testando dispositivos móveis', () => {
    beforeEach(() => {
        /* roda os testes como se fossem em um dispositivo com a resolução de um iphone-5 */
        cy.viewport('iphone-5')
    })
    it('Deve existir um menu burguer', () => {
        cy.visit('/')
        
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        
        cy.location('pathname').should('eq','/home')

        cy.getByData('menu-burguer').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()			

        cy.location('pathname').should('eq','/home/investimentos')			
    })
})

