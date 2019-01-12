import nyt from "../api/newYorkTimes";
let hamburger = document.querySelector("#hamburger");
let navbar = document.querySelector("#nav-bar");
let closeIcon = document.querySelector("#nav-bar .close");
let booksContainer = document.querySelector("#latest-books");
let loader = document.querySelector(".loader_container");

function createElem(elem, className) {
  let el = document.createElement(elem);
  if (className) {
    el.classList.add(className);
  }

  return el;
}

function createBookGrid(allBookLists) {
  //allBooklist is an array with 15 items
  // each item is a booklist say fiction
  //which has 5 books each

  let allLists = createElem("div", "all-lists");
  for (let i = 0; i < allBookLists.length; i++) {
    let bookList = allBookLists[i]; //booklist is an object

    let list = createElem("div", "list");

    let listName = createElem("h3", "list_name");
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
        `
        <img src=${book.book_image} class="list_image" alt="${
          book.title
        } image" >
      <p class="list_title">${book.title}</p>
      <p class="list_author">${book.author}</p>
      <p class="list_description">${book.description}</p>
      <p class="list_publisher">${book.publisher}</p>
      <p class="list_isbn"> ${book.primary_isbn10}</p>
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
