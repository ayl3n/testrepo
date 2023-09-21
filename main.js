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
}

console.log(items);










