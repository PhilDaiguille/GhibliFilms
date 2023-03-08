import data from "../json/data.js"
document.addEventListener("DOMContentLoaded", () => {
  console.log("charged");
  console.log(data)
  let affiche = document.querySelector("html body main div.film");
  for(let i = 0; i <= data.films.length; i++){
    affiche.innerHTML += `
      <section>
	  	<figure>
        	<img src="${data.films[i].image}" alt="${data.films[i].title}">
			<figcaption>
        		<h2>${data.films[i].title}</h2>
        		<time>${data.films[i].release_date}</time>
        		<h3>Director : ${data.films[i].director}</h3>
        		<h3>Producer : ${data.films[i].producer}</h3>
        		<p>${data.films[i].description}</p>
        		<p><span class="material-symbols-outlined">
				star
				</span>${data.films[i].rt_score} </p>
			</figcaption>
		</figure>
      </section>
    `;
  }
//   <img src="${data.films[i].movie_banner}" alt="${data.films[i].title}"></img>
});