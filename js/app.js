import data from "../json/data.js";

const Film = ({ film }) => {
  return React.createElement("section", null, React.createElement("figure", null, React.createElement("img", { src: film.image, alt: film.title }), React.createElement("figcaption", null, React.createElement("h2", null, film.title), React.createElement("time", null, film.release_date), React.createElement("h3", null, `Director : ${film.director}`), React.createElement("h3", null, `Producer : ${film.producer}`), React.createElement("p", null, film.description), React.createElement("p", null, [
  // Ajout d'une prop key unique à l'élément span
  React.createElement("span", { className: "material-symbols-outlined", key: `${film.id}-star` }, "star"), `${film.rt_score}`]))));
};

const App = () => {
  return data.films.map(film => {
    return React.createElement(Film, { key: film.id, film: film });
  });
};

ReactDOM.render(React.createElement(App), document.querySelector(".film"));