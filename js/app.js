import data from "../json/data.js";

const Film = ({ film }) => {
  return React.createElement(
    "section",
    null,
    React.createElement(
      "figure",
      null,
      React.createElement("img", { src: film.image, alt: film.title }),
      React.createElement(
        "figcaption",
        null,
        React.createElement("h2", null, film.title),
        React.createElement("time", null, film.release_date),
        React.createElement("h3", null, `Director : ${film.director}`),
        React.createElement("h3", null, `Producer : ${film.producer}`),
        React.createElement("p", null, film.description),
        React.createElement(
          "p",
          null,
          React.createElement(
            "span",
            { className: "material-symbols-outlined", key: `${film.id}-star` },
            "star"
          ),
          `${film.rt_score}`
        )
      )
    )
  );
};

const App = () => {
  const [filteredFilms, setFilteredFilms] = React.useState(data.films);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    const filtered = data.films.filter((film) => {
      return film.title.toLowerCase().includes(searchValue);
    });
    setFilteredFilms(filtered);
  };

  return React.createElement(
    "div",
    null,
    React.createElement("input", {
      type: "text",
      onChange: handleSearch,
    }),
    filteredFilms.map((film) => {
      return React.createElement(Film, { key: film.id, film: film });
    })
  );
};

ReactDOM.render(
  React.createElement(App, null),
  document.querySelector(".film")
);
