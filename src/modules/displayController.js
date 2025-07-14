import { addItem, removeItemByIndex, getList, filterList } from "./itemList.js";

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
                console.log(list);
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
    }
}



