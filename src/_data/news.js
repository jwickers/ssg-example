/* eslint-env es6 */
const axios = require("axios");
const de = require('dotenv').config();

module.exports = async function() {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_KEY}&category=technology&pageSize=10`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}