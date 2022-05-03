import { faker } from '@faker-js/faker';

describe('', () => {
   const firstName = faker.name.firstName();
   const lastName = faker.name.lastName();
   const email = faker.internet.exampleEmail(firstName, lastName);
   const password = faker.internet.password();
   const company = faker.company.bs();
   const fromMonth = faker.date.month();
   const fromYear = faker.datatype.number({ min: 2011, max: 2021 }).toString();
   const city = faker.address.cityName();
   const fromMonthEdu = faker.date.month();
   const fromYearEdu = faker.datatype.number({ min: 2003, max: 2005 }).toString();
   const toMonthEdu = faker.date.month();
   const toYearEdu = faker.datatype.number({ min: 2006, max: 2011 }).toString();
   const URL = faker.internet.url();

   it ('', () => {
      cy.visit('/signup/candidate');
      cy.fixture('testData.json').then((testData) => {
         cy.get('button').contains('Via email').click();
         cy.get('*[name="first_name"]').type(firstName);
         cy.get('*[name="last_name"]').type(lastName);
         cy.get('*[name="email"]').type(email);
         cy.get('*[name="password"]').type(password);
         cy.get('button').contains('Get started').click();
         cy.location('pathname').should('eq', '/candidate/onboarding');

         cy.contains(testData.role.header).should('be.visible');
         cy.pickItems('mui-6', 'role');
         cy.get('span').contains(testData.role.items[0]).should('be.visible');
         cy.get('span').contains(testData.role.items[1]).should('be.visible');
         cy.get('button').contains('Continue').click();

         cy.contains(testData.area.header).should('be.visible');
         cy.pickItems('mui-8', 'area');
         cy.get('span').contains(testData.area.items[0]).should('be.visible');
         cy.get('span').contains(testData.area.items[1]).should('be.visible');
         cy.get('button').contains('Next').click();

         cy.contains(testData.salary.header).should('be.visible');
         cy.get('input[id="mui-11"]').type(testData.salary.value);
         cy.get('input[value="month"]').click().should('be.checked');
         cy.get('button').contains('Next').click();

         cy.contains(testData.location.header).should('be.visible');
         cy.setValue("mui-13", testData.location.currentCountry);
         cy.pickItems("mui-15", 'location');
         cy.get('input[type=checkbox]').click().should('be.checked');
         cy.get('button').contains('Next').click();

         cy.contains(testData.about.header).should('be.visible');
         cy.get('button').contains(testData.about.answers[0]).click();
         cy.get('button').contains(testData.about.answers[1]).click();
         cy.get('button').contains(testData.about.answers[2]).click();
         cy.get('button').contains(testData.about.answers[3]).click();
         cy.get('button').contains('Next').click();

         cy.contains(testData.great.header).should('be.visible');
         cy.get('button').contains(testData.great.buttonText).click();

         cy.contains(testData.cv.header).should('be.visible');
         // cy.get('button').contains(testData.cv.buttonText).click();

         cy.contains(testData.experience.header).should('be.visible');
         cy.get('button').contains(testData.experience.buttonText).click();
         cy.get('input[id="mui-16"]').type(company);
         cy.setValue("mui-18", testData.role.items[0]);
         cy.setValue("mui-20", fromMonth);
         cy.setValue("mui-22", fromYear);
         cy.get('input[type=checkbox]').click();
         cy.get('button:visible').contains('Next').click();

         cy.contains(testData.experience.header).should('be.visible');
         cy.contains(company).should('be.visible');
         cy.contains(testData.role.items[0]).should('be.visible');
         cy.contains(fromMonth).should('be.visible');
         cy.contains(fromYear).should('be.visible');
         cy.get('button').contains('Next').click();

         cy.contains(testData.education.header).should('be.visible');
         cy.get('button').contains(testData.education.buttonText).click();
         cy.get('input[id="mui-27"]').type(`University of ${city}`);
         cy.setValue("mui-29", testData.education.degree)
         cy.get('input[id="mui-30"]').type(testData.education.fieldOfStudy);
         cy.setValue("mui-32", fromMonthEdu);
         cy.setValue("mui-34", fromYearEdu);
         cy.setValue("mui-36", toMonthEdu);
         cy.setValue("mui-38", toYearEdu);
         cy.get('button:visible').contains('Next').click();

         cy.contains(`University of ${city}`).should('be.visible');
         cy.contains(fromMonthEdu).should('be.visible');
         cy.contains(fromYearEdu).should('be.visible');
         cy.contains(toMonthEdu).should('be.visible');
         cy.contains(toYearEdu).should('be.visible');
         cy.get('button').contains('Next').click();

         cy.contains(testData.skills.header).should('be.visible');
         cy.setValue("mui-40", testData.skills.items[0]);
         cy.setValue("mui-40", testData.skills.items[1])
         cy.get('span').contains(testData.skills.items[0]).should('be.visible');
         cy.get('span').contains(testData.skills.items[1]).should('be.visible');
         cy.get('button').contains('Next').click();

         cy.contains(testData.links.header).should('be.visible');
         cy.get('input[id="mui-41"]').type(URL);
         cy.get('button').contains('Next').click();

         cy.location('pathname').should('eq', '/dashboard');
      });
   });
});