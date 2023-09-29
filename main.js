const itemsContainer = document.getElementById("items");// tomo elementos del div con id="items"
const itemTemplate = document.getElementById("template"); // lo mismo con id="template"
const addButton = document.getElementById("add")// lo mismo con id="add"

//now i should keep going on how to retrieve data from local storage to keep the list items

let items = getItems()

function getItems() {
    const value = localStorage.getItem("todo-test") || "[]"; // "todo" =  key word in local storage
    return JSON.parse(value);
}

//once the item is added, wrefresh what was saved

function setItems(items) {
    const itemsJson = JSON.stringify(items);
    localStorage.setItem("todo-test", itemsJson);
}
//add items

function addItem(){
    items.unshift({
        description:" ",
        completed: false
    });

    setItems(items); //adds to local storage
    refreshList();
    setItems(items);
    refreshList();
}

function updateItem(item, key, value) {
    item[key] = value;

    setItems(items);
    refreshList();
}

function refreshList() {
    ITEMS_CONTAINER.innerHTML = "";

    for (const item of items){
        //get TEMPLATE ELEMENT and go inside it, get the CONTENT (div) and clone it
        //and you get to treat the div as object
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description; //value comes from addItem()
        completedInput.checked = item.completed; //check box

        descriptionInput.addEventListener("change", () => {
            updateItem(item , "description", descriptionInput.value);
        })

        completedInput.addEventListener("change", () => {
            updateItem(item , "completed", completedInput.checked);
        })

        ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addItem();
})


console.log(items);










