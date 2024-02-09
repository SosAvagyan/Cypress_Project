const loginButton = '//div[text()="Login"]/..';
const loginPagePopup = '//div[@class="popup withImage"]';
const usernameInputField = '[name="username"]';
const passwordInputField = '[name="password"]';
const loginButtonOnPopup = '//form//button//div[text()="Login"]';
const usernameErrorMessage = '//p[text()="Usuário ou senha incorreta"]';
const userProfileIcon = '#user_icon';
const userIdInProfilePopup = '//div[@class="user_info"]/p[1]';

class LoginPage {

    clickLoginButton() {
        cy.xpath(loginButton).click();
    }

    checkLoginPopupVisibility() {
        cy.xpath(loginPagePopup).should('be.visible');
    }

    typeInLoginField(username) {
        cy.get(usernameInputField).type(username);
    }

    typeInPasswordField(password) {
        cy.get(passwordInputField).type(password);
    }

    clickOnLoginButtonOnPopup() {
        cy.xpath(loginButtonOnPopup).click();
    }

    checkErrorMessageForUsername() {
        cy.xpath(usernameErrorMessage).should('be.visible');
    }

    clickOnUserProfileIcon() {
        cy.get(userProfileIcon).click();
    }

    checkUserIdInUserProfilePopup(username) {
        cy.xpath(userIdInProfilePopup).should('contain',username);
    }
}

export const loginPage = new LoginPage();