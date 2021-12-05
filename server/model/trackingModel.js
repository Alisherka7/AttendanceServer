const mongoose = require('mongoose');

const axios = require('axios');

const studentData = {};

var schemaTracking = new mongoose.Schema({
  trackingData: {
    type: Object,
    required: true
  }
});

const Trackingdb = mongoose.model('trackingdb', schemaTracking);

module.exports = Trackingdb;
