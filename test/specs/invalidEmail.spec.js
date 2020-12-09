const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
  beforeEach(() => {
    LoginPage.open();
    expect(browser).toHaveTitle('Dojo')   // Valdiation
    expect(browser).toHaveUrlContaining('/login')   // Valdiation
  })

    it('should not be able to login with invalid email credentials', () => {
        LoginPage.login('jc@test.com', 'SuperSecretPassword!');
        LoginPage.emailErrorValidation()
    });
    // it('email required when inputting random charaters', () => {
      
    //   LoginPage.emailElem('aaaa')
    //   LoginPage.passwordElem()
    //   LoginPage.emailReqText()
      // LoginPage.logoElem()
      
//   });
});

