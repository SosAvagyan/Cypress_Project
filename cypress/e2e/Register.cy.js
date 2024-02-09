const {basePage} = require('../PageObjectModel/BasePage.js');
const {loginPage} = require('../PageObjectModel/LoginPage.js');
const { registerPage } = require('../PageObjectModel/RegisterPage.js')

describe('template spec', () => {

  beforeEach('Open Papi Games website and close info popup and click on Register button', () => {
      basePage.openWebSite();
      basePage.closePopup();
      basePage.checkThatWelcomePopupClosed();
      registerPage.clickOnRegisterButton()
      registerPage.typeInCPFInputField('12984565875')
      registerPage.clickOnCPFVerificationButton();
    })

    it('should check that username field is required and must have at least 6 chars', () => {
        registerPage.checkThatUsernameMandatoryIconIsPresent();
        registerPage.typeInUsernameInputField('test')
        registerPage.clickOnUsernameHeader();
        registerPage.checkThatErrorMessageForUsernameLengthIsVisible()
  })

    it('should check that password and repeat password fields are required and must match', () => {
        registerPage.checkThatPasswordMandatoryIconIsPresent();
        registerPage.checkThatRepeatPasswordMandatoryIconIsPresent();
        registerPage.typeInPasswordInputField('77Djs1')
        registerPage.typeInRepeatPasswordInputField('77Djs11')
        registerPage.clickOnRepeatPasswordHeader();
        registerPage.checkErrorMessageThatPasswordsDoesNotMatch()
    })

    it('should check that phone number field is mandatory', () => {
        registerPage.checkPhoneNumberMandatoryIcon();
        registerPage.typeInPhoneNumberField(' ');
        registerPage.clickOnPhoneNumberHeader();
        registerPage.checkPhoneNumberMandatoryErrorMessage();
    //todo open bug because tel number works with 1 number
    });

    it('should check that e-mail field is mandatory and needs correct structure', () => {
        registerPage.scrollToEmailMandatoryIcon();
        registerPage.checkEmailMandatoryIcon();
        registerPage.typeInEmailInputField('asdfgher.com');
        registerPage.clickOnEmailMandatoryIcon();
        registerPage.checkErrorMessageForValidEmail();
    });

    it('should register user when all mandatory fields are filled in with correct inputs ', () => {
        registerPage.typeInUsernameInputField('test8788');
        // todo in future userName generate with numbers
        registerPage.typeInPasswordInputField('77Djs1');
        registerPage.typeInRepeatPasswordInputField('77Djs1');
        registerPage.typeInPhoneNumberField('55887799')
        registerPage.typeInEmailInputField('test12@yopmail.com');
        registerPage.clickOnTermsAndConditionsCheckbox();
        registerPage.clickOnRegistrationSubmitButton()
        registerPage.checkSuccessfulRegistrationPopup();
        registerPage.clickOkButtonOnSuccessRegisteredPopup()
        loginPage.clickOnUserProfileIcon();
        loginPage.checkUserIdInUserProfilePopup('test8788');
    });
})