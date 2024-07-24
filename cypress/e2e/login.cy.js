describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
          cy.visit('https://login.qa.studio/'); 

          cy.get('#mail').type('german@dolnikov.ru');
          cy.get('#pass').type('iLoveqastudio1');
          cy.get('#loginButton').click();

          cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

     it('Восстановление пароля', function () {
          cy.visit('https://login.qa.studio/'); 

          cy.get('#forgotEmailButton').click();

          cy.get('#forgotForm > .header').contains('Восстановите пароль');
          cy.get('#mailForgot').type('german@dolnikov.ru');
          cy.get('#restoreEmailButton').click();

          cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })    

    it('Верный логин и неверный пароль', function () {
          cy.visit('https://login.qa.studio/'); 

          cy.get('#mail').type('german@dolnikov.ru');
          cy.get('#pass').type('iLoveqastudi');
          cy.get('#loginButton').click();

          cy.get('#messageHeader').contains('Такого логина или пароля нет');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

     it('Неерный логин и верный пароль', function () {
          cy.visit('https://login.qa.studio/'); 

          cy.get('#mail').type('german@dolnik.ru');
          cy.get('#pass').type('iLoveqastuo1');
          cy.get('#loginButton').click();

          cy.get('#messageHeader').contains('Такого логина или пароля нет');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })   
         
     it('В логине нет @', function () {
        cy.visit('https://login.qa.studio/'); 

        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastuo1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })      
                
     it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); 

        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastuo1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       }) 
 })
 