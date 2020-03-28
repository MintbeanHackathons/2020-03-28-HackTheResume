const fs = require('fs');

fs.readFile(`./schema.json`, 'utf8', (error, data) => {
  console.log("In readFile's Callback: it has the data.");
  // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
  if (error) {
    console.log("File read failed:", error)
    return
  }
  console.log('File data:', data)
});
