const { connect } = require("./Connection");

async function getVehicles() {
  const configAxios = await connect();
  
  return configAxios
    .get("vehicles")
    .then((response) => {
      return { result: true, data: response.data };
    })
    .catch((error) => {
      return {
        result: false,
        status: error.response.status,
        message: error.response.data.error.message,
      };
    });
}

module.exports = { getVehicles };
