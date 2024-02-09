const { basePage} = require('../PageObjectModel/BasePage.js');
const { loginPage} = require('../PageObjectModel/LoginPage.js');
const { searchPage } = require('../PageObjectModel/SearchPage.js')

describe('template spec', () => {

    beforeEach('Open Papi Games website and close info popup and click Login button', () => {
        basePage.openWebSite();
        basePage.closePopup();
        basePage.checkThatWelcomePopupClosed();
        loginPage.clickLoginButton();
        loginPage.checkLoginPopupVisibility();
        loginPage.typeInLoginField('test8788');
        loginPage.typeInPasswordField('77Djs1');
        loginPage.clickOnLoginButtonOnPopup();
    })

    it('should find game from search bar when typed correct name of the game', () => {
        searchPage.clickOnCasinoButtonOnNavigationBar();
        searchPage.clickOnTodosOsJogosButton();
        searchPage.typeInSearchField('taboo');
        searchPage.checkThatSearchResultsContainerShowsRightNumber('1')
        searchPage.checkThatSearchResultsContainerContainsAppropriateVAlue();
    });

    it.only('should not find game not existing game name', () => {
        searchPage.clickOnCasinoButtonOnNavigationBar();
        searchPage.clickOnTodosOsJogosButton();
        searchPage.typeInSearchField('asdfg');
        searchPage.checkThatSearchResultsContainerShowsRightNumber('0')
    //Todo: there is bug in code. when we typing not existing game  which length is longer than 3 the error message still shows.
    });

    it('should show error message for the inputted chars length', () => {
        searchPage.clickOnCasinoButtonOnNavigationBar();
        searchPage.clickOnTodosOsJogosButton();
        searchPage.typeInSearchField('ta');
        searchPage.checkThatWarningMessageVisible()
    });

})