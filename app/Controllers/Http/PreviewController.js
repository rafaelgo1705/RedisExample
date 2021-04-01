"use strict";

const { getVehicles } = require("../../Helpers/GetVehicles");

class PreviewController {
  async index() {
    return await getVehicles();
  }
}

module.exports = PreviewController;
