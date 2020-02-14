// const request = require("request");
const request = require("request");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/weather/lat=:lat&lng=:lng", function(req, res) {
  let lat = req.params.lat;
  let lng = req.params.lng;
  let options = {
    method: "GET",
    url: "https://api.openuv.io/api/v1/uv",
    qs: { lat: lat, lng: lng, dt: "2020-02-14T10:50:52.283Z" },
    headers: {
      "content-type": "application/json",
      "x-access-token": "6cef063431e7865194bea83dc4bb5b77"
    }
  };
  request(options, function(error, response, body) {
    let uv_max = JSON.parse(body).result.uv_max;
    if (error) throw new Error(error);
    console.log(uv_max);
    res.send(body);
  });
});

app.listen(3000, function() {
  console.log("Running di port 3000!");
});
