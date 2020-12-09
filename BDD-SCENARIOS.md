
GIVEN i Navigate to https://account.dojo.tech/
THEN should validate the logo 'dojo'
And Should validate url containg /login

GIVEN I land on Login page
WHEN I navigate to forgot password page
AND input my email address
THEN the Submit button must be active


GIVEN I land on Login page
WHEN I input invalid email
AND invalid password
THEN I should not be able to login
AND error validation msg display


GIVEN I land on login page
WHEN I click on App store link
Then i should get directed to apple dojo page 


GIVEN I land on Login page
WHEN I lick on google Play store link
Then I should get directed to google play store dojo page
