const express = require('express');
const app = express();
const resumeData = require('./data/resume.json');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('resume', resumeData);
});

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
