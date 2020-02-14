const request = require("request");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/weather/location=:city", function(req, res) {
  let apiKey = "58b280c78e765ee876a64e838ebcd5d8";
  let city = req.params.city;
  let url = `http://api.weatherstack.com/historical?access_key=${apiKey}&query=${city}&historical_date_start=2020-02-14&historical_date_end=2020-02-17`;
  request(url, function(err, response, body) {
    if (err) {
      console.log("error:", error);
      //   res.status(404).send({ err: "city not found" });
    } else {
      console.log("body:", body);
      res.send(body);
    }
  });
});

app.listen(3000, function() {
  console.log("Running di port 3000!");
});
