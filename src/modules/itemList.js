import Item from "./item.js";

let list = [];
let itemCount = 0;

// methods

// export function printAll() {
//     for (let item of list) {
//         console.log(item.info());
//     }
// }
// export function printByStatus(status) {
//     let filteredList = list.filter(item => item.getStatus() === status);
//     for (let item of filteredList) {
//         console.log(item.info());
//     }
// }
export function addItem(addedItem) {
    addedItem.setID(itemCount);
    itemCount++;
    list.push(addedItem);
}
export function removeItemByIndex(index) {
    list.splice(index, 1);
}
export function getList() {
    return list;
}
export function filterList(filter) {
    let filteredList = list.filter(item => item.getStatus() === filter);
    return filteredList;
}

// test items
const rematch = new Item("REMATCH", "complete", 5, 50);
const expedition33 = new Item("Expedition 33", "playing", 9, 40);
const sts2 = new Item("Slay the Spire 2", "upcoming", 0, 0);



// add test items to list
addItem(rematch);
addItem(expedition33);
addItem(sts2);





