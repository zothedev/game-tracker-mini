const log = console.log;

// imports
import "./styles/style.css";
import "./styles/list.css"
import { getList } from "./modules/itemList";
import displayController from "./modules/displayController";

// selecting buttons
const navContainer = document.querySelector('nav');
const allTabsButton = document.querySelector('.allTabs');
const upcomingButton = document.querySelector('.upcoming');
const playingButton = document.querySelector('.playing');
const completeButton = document.querySelector('.complete');
const viewingText = document.querySelector('.viewing');

// create a displayController object
const display = displayController();

// startup code
prepareView(allTabsButton);

// tab switching functionality
navContainer.addEventListener('click', (e) => {
    let target = e.target;

    // if the target is a <button>
    if (target instanceof HTMLButtonElement) {
        if (target.classList[0] === 'allTabs') {
            prepareView(target);
        } else {
            prepareView(target, target.classList[0]);
        }
    }
});

function removeActiveClassForAll() {
    allTabsButton.classList.remove('active');
    upcomingButton.classList.remove('active');
    playingButton.classList.remove('active');
    completeButton.classList.remove('active');
}

function prepareView(btn, filter) {
    removeActiveClassForAll();
    btn.classList.add('active');
    display.clearDisplay();
    display.createHeader();
    display.updateViewText(btn, viewingText);
    if (filter) {
        display.displayItems(getList(), filter);
        return;
    }
    display.displayItems(getList());
}


