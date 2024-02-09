const popupCloseButton = 'div.popup_close';
const welcomePopup = 'div.final-tour-container';
class BasePage {

    openWebSite() {
        cy.visit('https://tst-papigames.draft10.com/');
    }

    closePopup() {
        cy.get(popupCloseButton).click();
    }

    checkThatWelcomePopupClosed() {
        cy.get(welcomePopup).should('not.exist')
    }
}

export const basePage = new BasePage();