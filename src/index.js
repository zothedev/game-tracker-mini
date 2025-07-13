// src/index.js
import "./style.css";
import Item from "./modules/item.js";

const rematch = new Item("REMATCH", "complete", 5, 50);
console.log(rematch.info());