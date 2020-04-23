// // // Restaurant Menu Exercise

const getCategories = function (menu) {
    return Object.keys(menu)
}
console.log(getCategories(menu));

const nameToListItem = function (categoryItem) {
    const menuItem = document.createElement("li");
    menuItem.textContent = categoryItem;
    return menuItem;
}
console.log(nameToListItem("Breakfast"));

const categoriesToListItem = function (arrayOfStrings) {
    let arrayItems = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const listItem = nameToListItem(arrayOfStrings[i]);
        arrayItems.push(listItem);
    }
    return arrayItems
}
console.log(categoriesToListItem(["Breakfast", "Lunch", "Dinner", "Dessert"]));

const appendElement = function (element) {
    const jsMenu = document.querySelector(".js-menu");
    jsMenu.appendChild(element);
};

const liArray = categoriesToListItem(getCategories(menu));  // getCategories(menu) == ["Breakfast", "Lunch", "Dinner", "Dessert"]
liArray.forEach(appendElement);

for (let i = 0; i < liArray.length; i++) {
    liArray[i].addEventListener("click", function(e) {
        clearContainer();
        menu[e.target.textContent].forEach(appendCardToMainContent);
        // console.log(e.target.textContent);
    });
};

function clearContainer() {
    mainContent.textContent = "";
};

const menuItems = function (menuItem) {
    return menu[menuItem];
};
console.log(menuItems("breakfast"));

console.log(menu["breakfast"][0]); // works
console.log(menu["breakfast"][0]["name"]); // works
console.log(menu["breakfast"]["Granola"]); //doesnt work



// console.log(menu["breakfast"]); //prints array of dictionaries of breakfast items/descriptions


// large exercises

const itemToCard = function (itemObj) {
    const div = document.createElement("div");
    // const styleTag = document.createElement("style");
    // style.type = "text/css";
    // style.innerHTML = ".cardClass";
    // const head = document.getElementsByTagName("head")[0];
    // head.appendChild(styleTag);
    // div.className = ".cardClass";
    const title = document.createElement("h2");
    title.textContent = itemObj["name"];
    const price = document.createElement("h3");
    price.textContent = itemObj["price"]
    console.log(title.textContent);
    console.log(price.textContent);
    div.appendChild(title);
    div.appendChild(price);
    return div
};

console.log(itemToCard(menu["breakfast"][0]));

const mainContent = document.querySelector(".js-main-content");
const appendCardToMainContent = function (itemObj) {
    return mainContent.appendChild(itemToCard(itemObj));
}

// menu["breakfast"].forEach(appendCardToMainContent);

