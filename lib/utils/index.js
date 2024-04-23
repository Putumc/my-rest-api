const uploadImage = require('./uploadImage')
const axios = require("axios");
const fs = require("fs");

async function imageAnime(url) {
  return new Promise(async(resolve, reject) => {
    let { data } = await axios({
      url: "https://tools.revesery.com/image-anime/convert.php",
      method: "POST",
      data: new URLSearchParams(Object.entries({
        "image-url": url
      })),
      headeres: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    console.log(data)
    resolve(data)

  })

}
module.exports = {
  imageAnime,
};