const inputField = document.querySelector("#search-bar");

const movieCardContainer = document.querySelector("#container-films");

const buttonSearch = document.querySelector("#search-button");
buttonSearch.addEventListener("click", async () => {
  console.log(`Searching for title "${inputField.value}"`);
  const data = await fetch(
    `http://www.omdbapi.com/?apikey=f6e256e1&s=${inputField.value}`
  )
    .then((result) => result.json())
    .then((data) => data.Search);
  console.log(data);
  filmDataLoop(data);
});

const filmDataLoop = (jsonData) => {
  //remove all current movieCardContainer movie card
  while (movieCardContainer.firstChild) {
    movieCardContainer.removeChild(movieCardContainer.lastChild);
  }

  for (let i in jsonData) {
    createFilmCard(jsonData[i]);
  }
};

const createFilmCard = (filmInfos) => {
  let divCard = document.createElement("div");
  divCard.className = "card col-12 col-md-3 m-3";

  //Check if info have a Poster
  if (
    filmInfos.Poster.match(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    )
  ) {
    let imgCard = document.createElement("img");
    divCard.appendChild(imgCard);
    imgCard.className = "card-img-top";
    imgCard.src = filmInfos.Poster;
  }

  let cardBody = document.createElement("div");
  divCard.appendChild(cardBody);
  cardBody.className = "card-body text-body";

  let filmTitle = document.createElement("h5");
  cardBody.appendChild(filmTitle);
  filmTitle.className = "card-title";
  filmTitle.textContent = `${filmInfos.Title} (${filmInfos.Year})`;

  movieCardContainer.appendChild(divCard);
};

const getFilmInfo = (filmName) => {};

const updatePage = (filmInfo) => {
  let image = document.querySelector("#film-poster");
  let title = document.querySelector("#film-title");
  let releaseDate = document.querySelector("#release-date");
};

const themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", () => {
  let body = document.querySelector("body");
  if (body.className == "text-white bg-dark") {
    body.className = "text-black bg-white";
  } else {
    body.className = "text-white bg-dark";
  }
});
