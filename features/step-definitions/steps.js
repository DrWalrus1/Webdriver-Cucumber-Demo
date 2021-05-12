/*
Import classes from newly created page object files.
Import the required keywords from Cucumber.
Use Page Object classes and methods to interact with the UI elements.
Use WebDriverIO commands to perform action the UI elements.
Use expect() to perform the necessary validations.
*/
const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

Given('the user is on the login page', function () {
    LoginPage.open();
    expect(browser).toHaveTitle('The Internet');
});

When('the user enters username as {string} and password as {string}', async function (username, password) {
    const usernameEl = await LoginPage.userNameTextBox;
    const passwordEl = await LoginPage.passwordTextBox;
    await usernameEl.setValue(username);
    await passwordEl.setValue(password);
});

When('click on login button', async function () {
    const loginButton = await LoginPage.loginButton;
    loginButton.click();
});

Then('the user must navigate to secure area page displaying a message {string}', function (successMessage) {
    expect(SecurePage.secureAreaElement).toExist();
    expect(SecurePage.secureAreaElement).toHaveTextContaining('Secure Area');
    
    expect(SecurePage.messageElement).toExist();
    expect(SecurePage.messageElement).toHaveTextContaining(successMessage);
});

Then('the user must remain on login page displaying a message {string}', function (errorMessage) {        
    expect(LoginPage.loginPageElement).toExist();
    expect(LoginPage.loginPageElement).toHaveTextContaining('Login Page');

    expect(LoginPage.messageElement).toExist();
    expect(LoginPage.messageElement).toHaveTextContaining(errorMessage);
});