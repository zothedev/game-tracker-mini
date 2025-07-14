const log = console.log;

// imports
import "./styles/style.css";
import "./styles/list.css"
import { getList } from "./modules/itemList";
import displayController from "./modules/displayController";

// selecting buttons
const allTabsButton = document.querySelector('.allTabs');
const upcomingButton = document.querySelector('.upcoming');
const playingButton = document.querySelector('.playing');
const completeButton = document.querySelector('.complete');

// startup code
const display = displayController();
display.createHeader();
display.displayItems(getList());
allTabsButton.classList.add('active');

// tab switching functionality
allTabsButton.addEventListener('click', () => {
    prepareView(allTabsButton);
});
upcomingButton.addEventListener('click', () => {
    prepareView(upcomingButton, 'upcoming');
});
playingButton.addEventListener('click', () => {
    prepareView(playingButton, 'playing');
});
completeButton.addEventListener('click', () => {
    prepareView(completeButton, 'complete');
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
    if (filter) {
        display.displayItems(getList(), filter);
        return;
    }
    display.displayItems(getList());
}


