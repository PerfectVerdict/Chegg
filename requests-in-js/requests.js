const axios = require("axios");

const url = "http://localhost:5001/constellations/DVaSPTf";
axios
  .delete(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
    id: "DVaSPTf",
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });
