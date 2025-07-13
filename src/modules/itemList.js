import Item from "./item.js";

function createItemList() {

    let list = [];
    let itemCount = 0;

    return {
        printAll() {
            for (let item of list) {
                console.log(item.info());
            }
        },
        printByStatus(status) {
            let filteredList = list.filter(item => item.getStatus() === status);
            for (let item of filteredList) {
                console.log(item.info());
            }
        },
        addItem(addedItem) {
            addedItem.setID(itemCount);
            itemCount++;
            list.push(addedItem);
        },
        removeItemByIndex(index) {
            list.splice(index, 1);
        },
        getList() {
            return list;
        },
    }
}

// test items
const rematch = new Item("REMATCH", "complete", 5, 50);
const expedition33 = new Item("Expedition 33", "playing", 9, 40);

// create our global item list
export let globalList = createItemList();
globalList.addItem(rematch);
globalList.addItem(expedition33);




