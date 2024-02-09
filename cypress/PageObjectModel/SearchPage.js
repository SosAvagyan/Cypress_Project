const casinoButtonOnNavigationBar = '//span[text()="Cassino"]';
const todosOsJogosButtonInCategoriesSection= '//div[text()="home"]/following-sibling::div[text()="Todos os jogos"]';
const searchField = '[name="search_input"]';
const searchResultsContainerNumber = '.search_modal_container p';
const searchResultsContainer = '//div[@class="content"]//img[@alt="Taboo"]';
const inputtedValueLengthWarningMessage = '//h6[text()="A pesquisa requer pelo menos 3 caracteres"]';

class SearchPage {

    clickOnCasinoButtonOnNavigationBar() {
        cy.xpath(casinoButtonOnNavigationBar).click()
    }

    clickOnTodosOsJogosButton() {
        cy.xpath(todosOsJogosButtonInCategoriesSection).click();
    }

    typeInSearchField(input) {
        cy.get(searchField).type(input)
    }

    checkThatSearchResultsContainerShowsRightNumber(result) {
        cy.get(searchResultsContainerNumber).should('contain', result)
    }

    checkThatSearchResultsContainerContainsAppropriateVAlue() {
        cy.xpath(searchResultsContainer).should('be.visible');
    }

    checkThatWarningMessageVisible() {
        cy.xpath(inputtedValueLengthWarningMessage).should('be.visible');
    }
}

export const searchPage = new SearchPage();