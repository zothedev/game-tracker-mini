import { getList, filterList } from "./itemList.js";
import { display } from "../index.js";
import { allTabsButton, upcomingButton, playingButton, completeButton, viewingText, mainContainer, } from "../modules/domElements.js";

export default class displayController {

    section = document.querySelector('section');
    isAddGameShowing = false;

    // create, add classes, append, 
    // and return the itemContainer
    createItemContainer() {
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');
        itemContainer.classList.add('closed');
        this.section.appendChild(itemContainer);
        return itemContainer;
    }

    populateItemContainer(item, itemContainer) {
        // create a paragraph element for each property within the item and set the textContent of that paragraph to the value of the property
        for (let property in item) {
            let propertyContainer = document.createElement('p');
            propertyContainer.textContent = item[property];
            itemContainer.append(propertyContainer);
        }
    }

    createExpandButton(item, itemContainer) {
        const expandButton = document.createElement('button');
        expandButton.classList.add('expand');
        expandButton.classList.add(item.getID());
        itemContainer.append(expandButton);
    }

    // create the entire display for an item
    createItemDisplay(item) {
        const itemContainer = this.createItemContainer();
        this.populateItemContainer(item, itemContainer);
        this.createExpandButton(item, itemContainer);
    }

    displayList(gameList, filter) {
        if (filter) {
            gameList = filterList(filter);
            gameList.forEach(item => {
                this.createItemDisplay(item);
            });
        } else {
            gameList.forEach(item => {
                this.createItemDisplay(item);
            });
        }
    }

    clearDisplay() {
        this.section.innerHTML = "";
    }

    updateViewText(btn, elem) {
        elem.textContent = `Viewing ${btn.textContent}`;
    }

    clearViewText(viewingText) {
        viewingText.textContent = "";
    }

    updateBodyBorderColor(tab) {
        const body = document.querySelector('body');

        let color;

        const rootStyles = getComputedStyle(document.documentElement);

        switch (tab) {
            case 'allTabs':
                color = rootStyles.getPropertyValue('--all-games-color').trim();
                break;
            case 'upcoming':
                color = rootStyles.getPropertyValue('--upcoming-games-color').trim();
                break;
            case 'playing':
                color = rootStyles.getPropertyValue('--playing-games-color').trim();
                break;
            case 'complete':
                color = rootStyles.getPropertyValue('--complete-games-color').trim();
                break;
        }

        body.style.setProperty('--border-color', color);
    }

    prepareView(btn, filter) {
        this.removeActiveClassForAll();
        btn.classList.add('active');
        display.clearDisplay();
        display.updateViewText(btn, viewingText);
        display.updateBodyBorderColor(btn.classList[0]);
        if (filter) {
            display.displayList(getList(), filter);
            return;
        }
        display.displayList(getList());
    }

    removeActiveClassForAll() {
        allTabsButton.classList.remove('active');
        upcomingButton.classList.remove('active');
        playingButton.classList.remove('active');
        completeButton.classList.remove('active');
    }

    toggleGameShowing() {
        if (this.isAddGameShowing) {
            this.isAddGameShowing = false;
        } else {
            this.isAddGameShowing = true;
        }
    }

    createStatusRadioBox(status ,statusContainer) {
        let radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = status;
        radioInput.id = status;
        radioInput.value = status;
        let radioLabel = document.createElement('label');
        radioLabel.textContent = status;
        radioLabel.htmlFor = status;
        const radioContainer = document.createElement('p');
        radioContainer.appendChild(radioInput);
        radioContainer.appendChild(radioLabel);
        statusContainer.appendChild(radioContainer);
    }

    showNewGameBox() {

        // as long as the add game box is not
        // current showing,
        if (!this.isAddGameShowing) {
            this.toggleGameShowing();
            this.clearViewText(viewingText);

            // new game form container
            let newGameContainer = this.createNewGameBox();
            mainContainer.appendChild(newGameContainer);

            // name input
            let nameInput = document.createElement('input')
            nameInput.placeholder = 'Name of Game';
            nameInput.name = 'Name of Game';
            newGameContainer.appendChild(nameInput);

            // hours input
            let hoursInput = document.createElement('input')
            hoursInput.placeholder = 'Hours Played';
            hoursInput.name = 'Hours Played';
            hoursInput.type = 'number';
            newGameContainer.appendChild(hoursInput);

            // status picker
            let statusContainer = document.createElement('fieldset');
            this.createStatusRadioBox('upcoming', statusContainer);
            this.createStatusRadioBox('playing', statusContainer);
            this.createStatusRadioBox('complete', statusContainer);
            newGameContainer.appendChild(statusContainer);

            // discard and save buttons
            const changesButtons = document.createElement('div');
            changesButtons.classList.add('changesButtons');
            const discardChangesButton = document.createElement('button');
            const saveChangesButton = document.createElement('button');
            discardChangesButton.textContent = "X";
            saveChangesButton.textContent = "Y";
            newGameContainer.appendChild(changesButtons);
            changesButtons.appendChild(discardChangesButton);
            changesButtons.appendChild(saveChangesButton);

            // game rating (number)
            const ratingBox = document.createElement('div');
            ratingBox.classList.add('ratingBox');
            const ratingInput = document.createElement('input');
            ratingInput.type = 'number';
            ratingInput.min = 1;
            ratingInput.max = 10;
            ratingInput.id = 'rating-input';

            let ratingLabel = document.createElement('label');
            ratingLabel.textContent = 'Game Rating';
            ratingLabel.htmlFor = 'rating-input';
            ratingBox.appendChild(ratingLabel);
            ratingBox.appendChild(ratingInput);
            newGameContainer.appendChild(ratingBox);

        }

    }



    createNewGameBox() {
        let newGameContainer = document.createElement('form');
        newGameContainer.id = 'addGame';
        newGameContainer.name = 'addGame';
        newGameContainer.classList.add('newGameContainer');
        newGameContainer.classList.add('showing');
        return newGameContainer;
    }
}
