const Env = use("Env");
const axios = require("axios");
const Redis = use("Redis");

async function connect() {
  const url = Env.get("URL_SERVICE");

  const getTokenCache = await Redis.get("token");

  const token = await auth(url);

  const configAxios = axios.create({
    baseURL: url,
  });

  configAxios.defaults.headers.common["Content-Type"] = "application/json";
  configAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return configAxios;
}

async function auth(url) {
  const email = "rafa2gmail.com";
  const password = "rafa";

  const response = await axios
    .post(
      `${url}/users/login `,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((result) => {
      return result.data.token;
    })
    .catch((error) => {
      return error.response.data;
    });

  return response;
}

module.exports = { connect };
