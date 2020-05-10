const path = require("path");
const router = require("express").Router();

// API Routes

// If no API routes are hit, send the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});
module.exports = router;
