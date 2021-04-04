const open = require("open");

const express = require("express");
const app = express();
const todoRoutes = express.Router();
const PORT = 8000;
app.get("/start", function (req, res) {
  var browser = req.query.browser;
  var url = req.query.url;
  console.log(browser, url);

  if (browser == "google") {
    (async () => {
      await open(url, {
        app: [
          `C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe`,
        ],
      });
    })();
  } else if (browser == "opera") {
    (async () => {
      await open(url, {
        app: [
          `C:\\Users\\rajde\\AppData\\Local\\Programs\\Opera\\launcher.exe`,
        ],
      });
    })();
  }
});

app.get("/start", function (req, res) {
  var browser = req.query.browser;
  var url = req.query.url;
  console.log(browser, url);

  if (browser == "google") {
    (async () => {
      await open(url, {
        app: [
          `C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe`,
        ],
      });
    })();
  } else if (browser == "opera") {
    (async () => {
      await open(url, {
        app: [
          `C:\\Users\\rajde\\AppData\\Local\\Programs\\Opera\\launcher.exe`,
        ],
      });
    })();
  }
});

app.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
});
