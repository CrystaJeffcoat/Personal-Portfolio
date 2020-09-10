const express = require("express");
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

app.get('/showcase', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/showcase.html'));
});

app.listen(PORT, function() {
  console.log("Now listening on localhost:" + PORT);
});

