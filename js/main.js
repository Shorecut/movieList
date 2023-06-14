const div = document.querySelector(".container");

const promise = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");

promise
  .then((response) => response.json())
  .then(({ Search }) => {
    for (let i = 0; i < Search.length; i++) {
      div.innerHTML += `
      <div class="movies"> 
      <div class="card">
      <img 
        src="${Search[i].Poster}" 
        alt="" 
        class="posters"
      /> </div>
      <div class='text'>
      <h4 class="title">${Search[i].Title}</h4> 
      <span class="year">${Search[i].Year} Year</span> 
      </div>
    </div>`;
    }
  });
