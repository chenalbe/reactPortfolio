const path = require("path");
const router = require("express").Router();

// API Routes

// If no API routes are hit, send the React app
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
module.exports = router;
