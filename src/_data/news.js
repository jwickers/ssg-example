/* eslint-env es2017 */
const axios = require("axios");
const countries = require("./countries.json");
const de = require('dotenv').config();

async function getNews(country) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWSAPI_KEY}&category=technology&pageSize=10`);
        return {
            "country": country,
            "articles": response.data.articles
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = async function() {
    
    var newsPromises = countries.map(getNews);
    return Promise.all(newsPromises).then( newsObjects => {
        return [].concat.apply([], newsObjects);
    });
}