const fs = require('fs');

const readresume = function (callback) {
  fs.readFile(`./schema.json`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (error) {
      console.log("File read failed:", error)
      return
    }
    callback(data)
  });

};
module.exports = readresume;
