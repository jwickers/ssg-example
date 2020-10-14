/* eslint-env es6 */
const axios = require("axios");

module.exports = async function() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=6f0bbe840cc14057a1b282e0e10678bf&category=technology&pageSize=10');
        return response.data;
    } catch (err) {
        console.log(err);
    }
}