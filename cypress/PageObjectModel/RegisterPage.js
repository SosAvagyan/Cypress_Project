const registerButton = '//div[text()="Registre-se"]';
const CPFInputField = '#cpf_input';
const CPFVerificationButton = '//div[text()="Proximo passo"]';
const usernameMandatoryIcon = '//p[text()="Usuario:"]//span[text()="*"]';
const usernameInputField = '//input[@name="username"]';
const usernameHeader = '//p[text()="Usuario:"]';
const errorMessageForUsernameLength = '//p[text()="Por favor, entre com pelo menos 6 caracteres"]';
const passwordMandatoryIcon = '//p[text()="Senha:"]//span[text()="*"]';
const repeatPasswordMandatoryIcon = '//p[text()="Repita senha:"]//span[text()="*"]';
const passwordInputField = '//input[@name="password"]';
const repeatPasswordInputField = '//input[@name="password2"]';
const errorMessageThatPasswordsDoesNotMatch = '//p[text()="As senhas não correspondem"]';
const phoneNumberMandatoryIcon = '//p[text()="Numero de telefone:"]//span[text()="*"]';
const phoneNumberInputField = '//input[@name="phoneNumber"]';
const phoneNumberMandatoryErrorMessage = '//p[text()="Numero de telefone:"]/../following-sibling::div/div[@class="styles_error__WdWb5"]/p[text()="Campo é obrigatório"]';
const emailMandatoryIcon = '//p[text()="E-mail:"]//span[text()="*"]';
const emailInputField = '//input[@name="email"]';
const errorMessageForValidEmail = '//p[text()="E-mail:"]/following-sibling::div/p[text()="Por favor entre com um e-mail válido"]';
const termsAndConditionsCheckbox = '//label[@for="terms_and_conditions_checkbox"]';
const registrationSubmitButton = '#registration-submit-btn';
const successfulRegistrationPopup = '//h4[text()="Registro bem-sucedido"]';
const okButtonOnSuccessRegisteredPopup = '//button[@type="button"]/div[text()="okay"]';

class RegisterPage {
    clickOnRegisterButton() {
        cy.xpath(registerButton).click()
    }

    typeInCPFInputField(cpfCode) {
        cy.get(CPFInputField).type(cpfCode);
    }

    clickOnCPFVerificationButton() {
        cy.xpath(CPFVerificationButton).click();
    }

    checkThatUsernameMandatoryIconIsPresent() {
        cy.xpath(usernameMandatoryIcon).should('exist');
    }

    typeInUsernameInputField(username) {
        cy.xpath(usernameInputField).type(username);
    }

    clickOnUsernameHeader() {
        cy.xpath(usernameHeader).click();
    }

    checkThatErrorMessageForUsernameLengthIsVisible() {
        cy.xpath(errorMessageForUsernameLength).should('be.visible')
    }

    checkThatPasswordMandatoryIconIsPresent() {
        cy.xpath(passwordMandatoryIcon).should('be.visible');
    }

    checkThatRepeatPasswordMandatoryIconIsPresent() {
        cy.xpath(repeatPasswordMandatoryIcon).should('be.visible');
    }

    typeInPasswordInputField(password) {
        cy.xpath(passwordInputField).type(password);
    }
    typeInRepeatPasswordInputField(repeatPassword) {
        cy.xpath(repeatPasswordInputField).type(repeatPassword);
    }

    clickOnRepeatPasswordHeader() {
        cy.xpath(repeatPasswordMandatoryIcon).click();
    }

    checkErrorMessageThatPasswordsDoesNotMatch() {
        cy.xpath(errorMessageThatPasswordsDoesNotMatch).should('be.visible');
    }

    checkPhoneNumberMandatoryIcon() {
        cy.xpath(phoneNumberMandatoryIcon).should('be.visible');
    }

    typeInPhoneNumberField(phoneNumber) {
        cy.xpath(phoneNumberInputField).type(phoneNumber);
    }

    clickOnPhoneNumberHeader() {
        cy.xpath(phoneNumberMandatoryIcon).click();
    }

    checkPhoneNumberMandatoryErrorMessage() {
        cy.xpath(phoneNumberMandatoryErrorMessage).should('be.visible');
    }

    scrollToEmailMandatoryIcon() {
        cy.xpath(emailMandatoryIcon).scrollIntoView();
    }

    checkEmailMandatoryIcon() {
        cy.xpath(emailMandatoryIcon).should('be.visible');
    }

    typeInEmailInputField(email) {
        cy.xpath(emailInputField).type('asdfgher.com');
    }

    clickOnEmailMandatoryIcon() {
        cy.xpath(emailMandatoryIcon).click();
    }

    checkErrorMessageForValidEmail() {
        cy.xpath(errorMessageForValidEmail).should('be.visible');
    }

    clickOnTermsAndConditionsCheckbox() {
        cy.xpath(termsAndConditionsCheckbox).click();
    }
    clickOnRegistrationSubmitButton() {
        cy.get(registrationSubmitButton).click();
    }

    checkSuccessfulRegistrationPopup() {
        cy.xpath(successfulRegistrationPopup).should('be.visible');
    }

    clickOkButtonOnSuccessRegisteredPopup() {
        cy.xpath(okButtonOnSuccessRegisteredPopup).click();
    }
 }
export const registerPage = new RegisterPage()