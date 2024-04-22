const axios = require("axios");
const cheerio = require("cheerio");

async function ig(match) {
  const result = [];
  const form = {
    url: match,
    submit: '',
  };
  const { data } = await axios.post('https://downloadgram.org/', form);
  const $ = cheerio.load(data);
  $('#downloadhere > a').each(function (a, b) {
    const url = $(b).attr('href');
    if (url) result.push(url);
  });

  return result;

}

module.exports = {
  ig,
};