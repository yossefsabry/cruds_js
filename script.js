// call elements
// inputs
const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const count = document.getElementById("count");
const category = document.getElementById("category");
const submit = document.getElementById("submit");

price.addEventListener("keyup", checkTotal);
taxes.addEventListener("keyup", checkTotal);
ads.addEventListener("keyup", checkTotal);
discount.addEventListener("keyup", checkTotal);

// start variable for updata function
let mood = "create";
let tmp;

// !total function --------------------------
function checkTotal() {
  if (price.value != "") {
    let results = +price.value + +taxes.value + +ads.value - +discount.value;
    total.style.background = "#040";
    total.innerHTML = ` ${results} $`;
  } else {
    total.style.background = "brown";
    total.innerHTML = "";
  }
}

//! create product and save localstorage

let dataPro;
/*
 * make a check for tha localstorage if empty or not
? if empty set to empty list
? if not take the data from localstrage and save into the array
**/
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

submit.addEventListener("click", collectData);

//?  when click enter
document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to input fields
  title.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      collectData();
    }
  });
  price.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      collectData();
    }
  });
  taxes.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      collectData();
    }
  });
  ads.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      collectData();
    }
  });
  discount.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      collectData();
    }
  });
  total.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      collectData();
    }
  });
  category.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      collectData();
    }
  });
  count.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      collectData();
    }
  });
});

function collectData() {
  let newPro = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    category: category.value.toLowerCase(),
    count: count.value,
  };

  // ! count
  if (mood === "create" && title.value != "") {
    if (newPro.count > 1) {
      for (let i = 0; i < newPro.count; i++) {
        dataPro.push(newPro);
      }
    } else {
      dataPro.push(newPro);
    }
  }
  // ? update mode
  else {
    /**
     * *first make the function for updata newPro odject
     * * then save the the newpro object in the row of datapro
     * * return every thing to create mood
     */
    dataPro[tmp] = newPro;
    mood = "create";
    submit.innerHTML = "Create";
    count.style.display = "block";
  }

  // ? save the data into localstrage and change the data to string ***  JSON.stringify(dataPro)  ***
  localStorage.setItem("product", JSON.stringify(dataPro));
  // console.log(dataPro);  for check for the localstorage
  // clear inputs
  clearInputs();
  showData();
}

//! clear inputs
function clearInputs() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}

//! show data in table
function showData() {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    if (dataPro[i] && dataPro[i].title) {
      // Check if the object and the 'title' property exist
      table += `
      <tr>
        <td>${i}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})" id="updata">update</button> </td>
        <td><button onclick='deleteRow(${i})' id="delete">delete</button> </td>
      </tr>
      `;
    }
  }
  document.getElementById("tbody").innerHTML = table;

  // ? create button to delte all if three any data
  let btnDeletaAll = document.getElementById("delete_all");
  if (dataPro.length > 0) {
    btnDeletaAll.innerHTML = `
        <button onclick='deleteAll()'>Delete All (${dataPro.length})</button>
    `;
  } else {
    btnDeletaAll.innerHTML = ``;
  }
}
showData();

//! start delete row  function
function deleteRow(i) {
  // * delete the row from array first
  dataPro.splice(i, 1);
  // add the new array after delete to localstorage
  localStorage.product = JSON.stringify(dataPro);
  // refresh the html table
  showData();
}

//! start delete All
function deleteAll() {
  localStorage.clear();
  dataPro.splice(0);
  showData();
}

// !start update
function updateData(i) {
  title.value = dataPro[i].title;
  price.value = dataPro[i].price;
  taxes.value = dataPro[i].taxes;
  ads.value = dataPro[i].ads;
  discount.value = dataPro[i].discount;
  category.value = dataPro[i].category;
  count.style.display = "none";

  scroll({
    top: 0,
    behavior: "smooth",
  });

  submit.innerHTML = "Update";
  mood = "update";
  tmp = i;
  checkTotal();
}

//! start search
let searchMood = "Title";
TitleBtnSearch = document.getElementById("search_title");
CategoryBtnSearch = document.getElementById("search_category");
let searchInput = document.getElementById("Search");

TitleBtnSearch.addEventListener("click", function () {
  search(this.id);
});
CategoryBtnSearch.addEventListener("click", function () {
  search(this.id);
});

//* change search
function search(id) {
  if (id === "search_title") {
    searchMood = "Title";
  } else {
    searchMood = "Category";
  }
  searchInput.placeholder = ` Search by ${searchMood}  `;
  searchInput.focus();
  searchInput.value = "";
}

// * search for items in tables
searchInput.addEventListener("keyup", function () {
  searchData(this.value);
});

function searchData(value) {
  let table = "";
  if (searchMood == "Title") {
    for (let i = 0; i < dataPro.length; i++) {
      if (dataPro[i].title.includes(value.toLowerCase())) {
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="updata">update</button> </td>
            <td><button onclick='deleteRow(${i})' id="delete">delete</button> </td>
        </tr>
        `;
      }
    }
  } else {
    for (let i = 0; i < dataPro.length; i++) {
      if (dataPro[i].category.includes(value.toLowerCase())) {
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="updata">update</button> </td>
            <td><button onclick='deleteRow(${i})' id="delete">delete</button> </td>
        </tr>
        `;
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
}
