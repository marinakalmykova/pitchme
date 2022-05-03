Cypress.Commands.add('pickItems', (inputId, type) => {
    cy.fixture('testData.json').then((testData) => {
        cy.get(`input[id=${inputId}]`).type(testData[type].searchWord);
        cy.contains(testData[type].items[0]).click();
        cy.get(`input[id=${inputId}]`).click();
        cy.contains(testData[type].items[1]).click();
    });
});

Cypress.Commands.add('setValue', (inputId, value) => {
    cy.get(`input[id=${inputId}]`).type(value);
    cy.contains(value).click();
});

