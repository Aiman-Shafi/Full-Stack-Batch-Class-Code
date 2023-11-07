// selectors
const list = document.getElementById("list");
const regionsArea = document.getElementById("region");
const search = document.getElementById("search");
const searchBtn = document.getElementById("submit");
let regions = [];
// preloader

let loader = document.getElementById("loader");
loader.style.display = "block";

function showLoader() {
  loader.style.display = "block";
}

function removeLoader() {
  loader.style.display = "none";
}

// fetch all country

// function fetchCountrty() {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => displayData(data));
// }

async function fetchCountry() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  //   console.log(response);
  const countries = await response.json();
  removeLoader();
  displayData(countries);
}

function displayData(countries) {
  //   console.log(countries);
  countries.forEach((country) => {
    console.log();
    list.innerHTML += `
      <li>${country.name.official}</li>
    `;

    // console.log(country.region);
    // filtering or removing the duplicates from array
    if (regions.indexOf(country.region) == -1) {
      regions.push(country.region);
    }
  });
  getRegions(regions);
}

// create region list
function getRegions(regions) {
  regions.forEach((region) => {
    regionsArea.innerHTML += ` <option value="${region}">${region}</option>`;
  });
}

// search api

async function searchApi(keyword) {
  if (keyword !== "") {
    showLoader();
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${keyword}`
    );
    const data = await response.json();
    removeLoader();
    displaySearchResults(data);
  } else {
    // list.innerHTML = "";
    console.log("no data found");
    fetchCountry();
  }
}

// searchApi("ban");

function searchResults() {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    list.innerHTML = "";
    // console.log(search.value);
    searchApi(search.value);
  });
}

function displaySearchResults(data) {
  list.innerHTML = "";
  data.forEach((country) => {
    list.innerHTML += `
        <li>${country.name.common}</li>
    `;
  });
}

function regionFilter() {
  regionsArea.addEventListener("change", (e) => {
    console.log(e.target.value);
    if (e.target.value !== "all") {
      list.innerHTML = "";
      showRegion(e.target.value);
    }
  });
}

async function showRegion(keyword) {
  if (keyword !== "") {
    showLoader();
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${keyword}`
    );
    const data = await response.json();
    removeLoader();
    displaySearchResults(data);
  } else {
    list.innerHTML = "";
    fetchCountry();
  }
}

fetchCountry();
searchResults();
regionFilter();
