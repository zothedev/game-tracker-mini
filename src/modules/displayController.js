import { globalList } from "./itemList.js";

// console.log(globalList.getList());

export default function displayController() {
    const section = document.querySelector('section');

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
        displayAllItems() {
            globalList.getList().forEach(item => {
                createItemDisplay(item);
            });
        },
        displayFilteredItems
}
}




