// selectors
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("items-list");
const itemTable = document.getElementById("item-table");
const clearBtn = document.getElementById("clear-btn");
const listContainer = document.getElementById("list-container");
const filter = document.getElementById("filter");

// Display Item from local Storage
function displayItemfromLocalStorage() {
  let itemsfromLocalStorage = getItemsFromLocalStorage();
  itemsfromLocalStorage.forEach((item) => createItemDOM(item));
}

// Add item from input
function addItem(e) {
  window.location.reload();
  // to stop browser reload
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === "") {
    alert("Please add an item!");
    return;
  }

  if (checkifItemsExists(newItem)) {
    alert("Item already exists");
    return;
  }

  // creating item data
  createItemDOM(newItem);
  // adding item to local storage
  addItemtoLocalStorage(newItem);

  itemInput.value = "";

  // setting up the row numbers
  addRowNumbers();

  // check if there is any item present or not
  checkInterface();
}

// Create a new table item
function createItemDOM(newItem) {
  itemTable.innerHTML += `
    <tr class="item">
        <td scope="row" class="number"></td>
        <td class="item-name">${newItem}</td>
        <td><button class="btn btn-danger remove-item"><i class="bi bi-trash3"></i></button></td>
    </tr>
  `;
}

// add item to localstorge in browser
function addItemtoLocalStorage(item) {
  let items = getItemsFromLocalStorage();

  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

// check if any item is present or not in local storage
function getItemsFromLocalStorage() {
  let items = [];

  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }

  return items;
}

function onClickRemove(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement.parentElement);
    // console.log(
    //   e.target.parentElement.parentElement.parentElement.
    // );
    addRowNumbers();
  }
  // checkInterface();
}

function removeItem(item) {
  // remove from DOM
  item.remove();

  // remove from localStorage
  removeItemFromLocalStorage(item.children[1].textContent);
}

// Remove Item from Local Storage
function removeItemFromLocalStorage(item) {
  let items = getItemsFromLocalStorage();

  // Filter Out item from local Storage
  items = items.filter((i) => i !== item);
  localStorage.setItem("items", JSON.stringify(items));
}

// removeItemFromLocalStorage(["test", "chal", "chini"]);

function filterItem(e) {
  const items = document.querySelectorAll(".item");
  const searchText = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.children[1].textContent.toLowerCase();

    if (itemName.indexOf(searchText) !== -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

function clearList() {
  itemTable.innerHTML = "";
}

function checkInterface() {
  displayItemfromLocalStorage();
  const items = document.querySelectorAll(".item");

  if (items.length === 0) {
    listContainer.style.display = "none";
  } else {
    // console.log(items);
    listContainer.style.display = "block";
  }
}

function checkifItemsExists(item) {
  let items = getItemsFromLocalStorage();
  return items.includes(item);
}

function addRowNumbers() {
  // Adding Row Numbers
  const items = document.querySelectorAll(".item-name");
  items.forEach((item, index) => {
    item.parentElement.children[0].innerText = index + 1;
  });
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemTable.addEventListener("click", onClickRemove);
clearBtn.addEventListener("click", clearList);
filter.addEventListener("input", filterItem);

checkInterface();
addRowNumbers();
