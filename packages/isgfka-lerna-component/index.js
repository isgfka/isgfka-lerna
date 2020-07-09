const { API } = require('lerna-core');
const axios = require('axios');

const getFile = () => axios.get(API)

module.exports = getFile;