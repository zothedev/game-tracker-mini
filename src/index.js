const log = console.log;

// imports
import "./styles/style.css";
import "./styles/list.css";
import "./styles/nav.css";

import displayController from "./modules/displayController";
import { navContainer, allTabsButton } from "./modules/domElements";
import "./modules/itemDrawer.js";

// create a displayController object
export const display = new displayController();

// startup code
display.prepareView(allTabsButton);

// tab switching functionality
navContainer.addEventListener('click', (e) => {
    let target = e.target;

    // if the target is a <button>
    if (target instanceof HTMLButtonElement) {
        if (target.classList[0] === 'allTabs') {
            display.prepareView(target);
        } else {
            display.prepareView(target, target.classList[0]);
        }
    }
});






