import nyt from "../api/newYorkTimes";
let hamburger = document.querySelector("#hamburger");
let navbar = document.querySelector("#nav-bar");
let closeIcon = document.querySelector("#nav-bar .close");
let booksContainer = document.querySelector("#latest-books");
let loader = document.querySelector(".loader_container");

function createElem(elem, ...className) {
  let el = document.createElement(elem);
  if (className) {
    if (className.length == 2) {
      let [a, b] = className;
      el.classList.add(a, b);
    } else if (className.length == 1) {
      el.classList.add(className);
    } else {
      throw new error("classname Array can only have 2 items in it");
    }
  }
  return el;
}

function createBookGrid(allBookLists) {
  //allBooklist is an array with 15 items
  // each item is a booklist say fiction
  //which has 5 books each

  let allLists = createElem("div", "all-lists");

  //reducing lists to 4 , 16 is too large and
  // will occupy 3 pages
  for (let i = 0; i < 4; i++) {
    let bookList = allBookLists[i]; //booklist is an object

    let list = createElem("div", "list");

    let listName = createElem("h3", "list_name", "t-center");
    //get list name say fiction from the list
    listName.textContent = bookList.list_name;

    list.appendChild(listName);

    let listGridContainer = createElem("div", "list_gridContainer");
    list.appendChild(listGridContainer);

    for (let j = 0; j < bookList.books.length; j++) {
      let book = bookList.books[j];
      let listItem = createElem("div", "list_item");

      //book details
      listItem.insertAdjacentHTML(
        "afterbegin",
        `<div class="list_item-left">
        <img src=${book.book_image} class="list_image" alt="${
          book.title
        } image" ></div> 
        <div class="list_item-right">
          <p class="list_title">${book.title}</p>
          <p class="list_author">by ${book.author}</p>
        </div>
      
      `
      );

      listGridContainer.appendChild(listItem);
    }

    allLists.appendChild(list);
  }

  booksContainer.appendChild(allLists);
  loader.style.display = "none";
}

hamburger.addEventListener("click", function() {
  navbar.classList.add("open");
  //display close icon in navbar whose initial display was none
  closeIcon.classList.add("show");
  hamburger.classList.add("hide");
});

closeIcon.addEventListener("click", function() {
  navbar.classList.remove("open");
  closeIcon.classList.remove("show");
  hamburger.classList.remove("hide");
});

async function getResponseFromNYT() {
  let response = await nyt;
  let allBookLists = response.data.results.lists;
  createBookGrid(allBookLists);
}

getResponseFromNYT();
