const log = console.log;

// imports
import "./styles/style.css";
import "./styles/list.css"
import { getList } from "./modules/itemList";
import displayController from "./modules/displayController";


// startup code
const display = displayController();
display.createHeader();
display.displayItems(getList());

// tab switching functionality
const allTabsButton = document.querySelector('.allTabs');
const upcomingButton = document.querySelector('.upcoming');
const playingButton = document.querySelector('.playing');
const completeButton = document.querySelector('.complete');

allTabsButton.addEventListener('click', () => {
    display.clearDisplay();
    display.createHeader();
    display.displayItems(getList());
});
upcomingButton.addEventListener('click', () => {
    display.clearDisplay();
    display.createHeader();
    display.displayItems(getList(), 'upcoming');
});
playingButton.addEventListener('click', () => {
    display.clearDisplay();
    display.createHeader();
    display.displayItems(getList(), 'playing');
});
completeButton.addEventListener('click', () => {
    display.clearDisplay();
    display.createHeader();
    display.displayItems(getList(), 'complete');
});


