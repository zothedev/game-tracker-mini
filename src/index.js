const log = console.log;

// imports
import "./styles/style.css";
import "./styles/list.css"
import { getList } from "./modules/itemList";
import displayController, { prepareView } from "./modules/displayController";

// selecting elements
const navContainer = document.querySelector('nav');
const allTabsButton = document.querySelector('.allTabs');

// create a displayController object
export const display = displayController();

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






