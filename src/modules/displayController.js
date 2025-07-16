import { getList, filterList } from "./itemList.js";
import { display } from "../index.js";
import { allTabsButton, upcomingButton, playingButton, completeButton, viewingText } from "../modules/domElements.js";

export default function displayController() {
    const section = document.querySelector('section');

    // item display creator
    function createItemDisplay(item) {
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');
        section.appendChild(itemContainer);

        // testing
        itemContainer.classList.add('closed');

        for (let property in item) {
            let propertyContainer = document.createElement('p');
            propertyContainer.textContent = item[property];
            itemContainer.appendChild(propertyContainer);
        }

        const expandButton = document.createElement('button');
        expandButton.classList.add('expand');
        expandButton.classList.add(item.getID());
        itemContainer.appendChild(expandButton);
    }

    return {
        displayItems(list, filter) {
            if (filter) {
                list = filterList(filter);
                list.forEach(item => {
                    createItemDisplay(item);
                });
            } else {
                list.forEach(item => {
                    createItemDisplay(item);
                });
            }
        },
        clearDisplay() {
            section.innerHTML = "";
        },
        updateViewText(btn, elem) {
            elem.textContent = `Viewing ${btn.textContent}`;
        },
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
        },
    }
}

export function prepareView(btn, filter) {
    removeActiveClassForAll();
    btn.classList.add('active');
    display.clearDisplay();
    display.updateViewText(btn, viewingText);
    display.updateBodyBorderColor(btn.classList[0]);
    if (filter) {
        display.displayItems(getList(), filter);
        return;
    }
    display.displayItems(getList());
}

export function removeActiveClassForAll() {
    allTabsButton.classList.remove('active');
    upcomingButton.classList.remove('active');
    playingButton.classList.remove('active');
    completeButton.classList.remove('active');
}



