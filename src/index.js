// src/index.js
import "./style.css";
import Item from "./modules/item.js";
import { createItemList } from "./modules/itemList.js";

// test items
const rematch = new Item("REMATCH", "complete", 5, 50);
const expedition33 = new Item("Expedition 33", "playing", 9, 40);

// create our item list
let list = createItemList();

list.addItem(rematch);
list.addItem(expedition33);
list.printAll();

list.removeItemByIndex(1);
list.printAll();


// console.log(rematch.info());

