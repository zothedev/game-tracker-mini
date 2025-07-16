import { sectionContainer } from "./domElements";

sectionContainer.addEventListener('click', (e) => {

    // if the target is an expand button
    if (e.target.classList[0] === 'expand') {
        let clickedItemContainer = e.target.parentElement;

        // shutAllDrawers();
        toggleDrawer(clickedItemContainer);
    }
});

function shutAllDrawers() {
    let itemContainerArray = Array.from(sectionContainer.children);
    itemContainerArray.forEach(item => {
        if (item.classList.contains('opened')) {
            item.classList.toggle('opened');
        }
    });

}

function toggleDrawer(itemContainer) {
    itemContainer.classList.toggle('closed');
    itemContainer.classList.toggle('opened');

}