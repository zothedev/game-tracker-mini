import { addItem, removeItemByIndex, getList, filterList } from "./itemList.js";
import { display } from "../index.js";

const allTabsButton = document.querySelector('.allTabs');
const upcomingButton = document.querySelector('.upcoming');
const playingButton = document.querySelector('.playing');
const completeButton = document.querySelector('.complete');
const viewingText = document.querySelector('.viewing');

export default function displayController() {
    const section = document.querySelector('section');

    // item display creator
    function createItemDisplay(item) {
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');
        section.appendChild(itemContainer);

        for (let property in item) {
            let propertyContainer = document.createElement('p');
            propertyContainer.textContent = item[property];
            itemContainer.appendChild(propertyContainer);
        }
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
        createHeader() {
            let headerContainer = document.createElement('div');
            headerContainer.classList.add('header');
            section.appendChild(headerContainer);
            let headers = ["Name", "Status", "Rating", "Hours"];

            for (let title of headers) {
                let propertyContainer = document.createElement('p');
                propertyContainer.textContent = title;
                headerContainer.appendChild(propertyContainer);
            }
        },
        updateViewText(btn, elem) {
            elem.textContent = `Viewing ${btn.textContent}`;
        },
        updateBodyBorderColor(tab) {
            const body = document.querySelector('body');
            const sidebar1 = document.querySelector('.sidebars1');
            const sidebar2 = document.querySelector('.sidebars2');

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
    display.createHeader();
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



