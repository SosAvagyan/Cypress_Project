const {basePage} = require('../PageObjectModel/BasePage.js');
const {loginPage} = require('../PageObjectModel/LoginPage.js');


describe('template spec', () => {

    beforeEach('Open Papi Games website and close info popup and click Login button', () => {
        basePage.openWebSite();
        basePage.closePopup();
        basePage.checkThatWelcomePopupClosed();
        loginPage.clickLoginButton();
        loginPage.checkLoginPopupVisibility();
    })

    it('should show warning massage when username is incorrect', () => {
        loginPage.typeInLoginField('test88');
        loginPage.typeInPasswordField('77Djs1');
        loginPage.clickOnLoginButtonOnPopup();
        loginPage.checkErrorMessageForUsername();
    });

    it('should show warning massage when password is incorrect', () => {
        loginPage.typeInLoginField('test8788');
        loginPage.typeInPasswordField('77Djs111');
        loginPage.clickOnLoginButtonOnPopup();
        loginPage.checkErrorMessageForUsername();
    });

    it('should show warning massage when both password and username are incorrect', () => {
        loginPage.typeInLoginField('test88');
        loginPage.typeInPasswordField('77Djs111');
        loginPage.clickOnLoginButtonOnPopup();
        loginPage.checkErrorMessageForUsername();
        });

    it('should log in if both username and password are correct', () => {
        loginPage.typeInLoginField('test8788');
        loginPage.typeInPasswordField('77Djs1');
        loginPage.clickOnLoginButtonOnPopup();
        loginPage.clickOnUserProfileIcon();
        loginPage.checkUserIdInUserProfilePopup('test8788');
        });

})