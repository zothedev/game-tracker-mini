import { globalList } from "./itemList.js";

console.log(globalList.getList());

const section = document.querySelector('section');

function displayItems() {
    // for each item in our list
    for (let item of globalList.getList()) {
        createItemDisplay(item);
    }
}

function createItemDisplay(item) {
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer');
    section.appendChild(itemContainer);

    for (let property in item) {
        // console.log(property);
        let propertyContainer = document.createElement('p');
        propertyContainer.textContent = item[property];
        itemContainer.appendChild(propertyContainer);
    }
}

export default {
    displayItems
};