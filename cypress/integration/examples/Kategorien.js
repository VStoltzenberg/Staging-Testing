describe('Kategorien functionality', function() {
	let rand = Math.floor(Math.random() * 10)
	let testtext = '+ automated test' + rand
	const admin = Cypress.env('admin')
    const admin_password = Cypress.env('admin_password')
    const user = Cypress.env('user')
    const user_password = Cypress.env('user_password')
	beforeEach(function() {
		cy.visit('https://staging.sparwelt.de/admin/login',{
            auth: {
                username: admin,
                password: admin_password
            }
        })
        cy.get('input#username.form-control').type(user)
        cy.get('input#password.form-control').type(user_password)
        cy.contains('Sign In').click()

	})

    it('edits a main category', function() {
			
		
		
        cy.visit('https://staging.sparwelt.de/admin/econa/taxonomy/maincategory/list',{
            auth: {
                username: admin,
                password: admin_password
            }
        })
		cy.get(':nth-child(1) > .sonata-ba-list-field-text > .sonata-link-identifier').click({force: true})
		cy.get('.form-control').first().type(testtext, {force: true})
		cy.get('[name="btn_update_and_edit"]').click()
		cy.get('.btn-info').invoke('removeAttr', 'target').click()
		cy.contains(testtext)
	})
	
    
	it('creates a subcategory', function() {
		
		
        cy.visit('https://staging.sparwelt.de/admin/econa/taxonomy/subcategory/list',{
            auth: {
                username: admin,
                password: admin_password
            }
        })
		cy.get('.sonata-action-element').click()
		cy.get('.form-control').first().type('neue subkategorie ' + rand, {force: true})
		cy.get('.form-control').eq(4).clear({force: true})
		cy.get('#select2-chosen-3').click({force: true})
		cy.get('#select2-result-label-7').click({force: true})

		cy.get('[name="btn_create_and_edit"]').click()
		cy.wait(3000)

		cy.get('.btn-info')
			.invoke('removeAttr', 'target').click()
			
		cy.contains('neue subkategorie ' + rand)

	})

	it('edits a subcategory', function() {
		
        cy.visit('https://staging.sparwelt.de/admin/econa/taxonomy/subcategory/list',{
            auth: {
                username: admin,
                password: admin_password
            }
        })
		cy.get(':nth-child(1) > .sonata-ba-list-field-text > .sonata-link-identifier').click({force: true})
		cy.get('.form-control').first().type(testtext, {force: true})
		cy.get('[name="btn_update_and_edit"]').click()
		cy.get('.btn-info').invoke('removeAttr', 'target').click()
		cy.contains(testtext)
	})

})
