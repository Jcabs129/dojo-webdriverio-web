const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


describe('forgot your password page', () => {

  beforeEach(() => {
    browser.url('https://account.dojo.tech/')
    expect(browser).toHaveTitle('Dojo')
    expect(browser).toHaveUrlContaining('/login')
  })
    it('naviagte to apple dojo page', () => {
      LoginPage.appleBtn()
      // LoginPage.loginBtn()

    });
    it('naviagte to google dojo page', () => {
      LoginPage.googleBtn()
      // LoginPage.loginBtn()

    });
});
