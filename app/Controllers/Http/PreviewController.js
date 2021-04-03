"use strict";

const { getVehicles } = require("../../Helpers/VehicleService");

class PreviewController {
  async index({ response }) {
    const result = await getVehicles();

    if (!result.result) {
      return response.status(result.status).send(result);
    }

    return result.data;
  }
}

module.exports = PreviewController;
