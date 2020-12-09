const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('forgot your password page', () => {

  beforeEach(() => {
    LoginPage.open();
    expect(browser).toHaveTitle('Dojo')
    expect(browser).toHaveUrlContaining('/login')
  })

    it('naviagte to forgot page and input email. must be validations', () => {
       LoginPage.forgotPassLink()
       LoginPage.forgotEmail('jc@test.com')
       expect(LoginPage.resetEmailBtn()) // Validation
    });
});
