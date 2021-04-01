const Env = use("Env");
const axios = require("axios");

async function getVehicles() {
  return axios
    .get(`${Env.get("URL_SERVICE")}/vehicles`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}

module.exports = { getVehicles };
