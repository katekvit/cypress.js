describe('Покупка нового аватара', function () {

    it('Покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/'); //захожу на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //нахожу инпут и ввожу логин
         cy.get('#password').type('USER_PASSWORD'); //нахожу инпут и ввожу пароль
         cy.get('.auth__button').click(); //нахожу кнопку войти и кликаю

         cy.get('.header__btns > :nth-child(4)').click(); //перехожу в магазин
         cy.get('.available > button').first().click(); // нахожу первый доступный аватар и кликаю
         cy.get('.credit').type('4111111111111111'); //нахожу инпут и ввожу карту
         cy.get('.k_input_ccv').type('125'); // нахлжу инпут и ввожу cv
         cy.get('.k_input_date').type('1224'); // нахожу инпут и ввожу дату действия карты
         cy.get('.k_input_name').type('NAME');  //назожу инпут и ввожу имя
         cy.get('.pay-btn').click(); //нахожу кнопку Оплатить и кликаю
         cy.get('#cardnumber').type('56456'); //нохожу инпут и ввожу код подтверждения
         cy.get('.payment__submit-button').click() //нахожу кнопку Отправить и кликаю
         cy.contains('Покупка прошла успешно').should('be.visible'); //проверяю сообщение
     })
 }) 