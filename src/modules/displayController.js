import { getList, filterList } from "./itemList.js";
import { display } from "../index.js";
import { allTabsButton, upcomingButton, playingButton, completeButton, viewingText } from "../modules/domElements.js";

export default class displayController {

    section = document.querySelector('section');
    

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

    displayList(list, filter) {
        if (filter) {
            list = filterList(filter);
            list.forEach(item => {
                this.createItemDisplay(item);
            });
        } else {
            list.forEach(item => {
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
}