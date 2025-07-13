export function createItemList() {

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
        }
    }
}



