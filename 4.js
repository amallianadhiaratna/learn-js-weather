// const request = require("request");
const request = require("request");
const express = require("express");
const app = express();
app.use(express.json());
function uv(uv_max) {
  this.uv_ = uv_max;
}
app.get("/weather/lat=:lat&lng=:lng", function(req, res) {
  let lat = req.params.lat;
  let lng = req.params.lng;
  let tgl = [];
  let result_ = { uv_max: tgl };
  let dt = [
    "2017-01-12T10:50:52.283Z",
    "2018-02-13T10:50:52.283Z",
    "2020-05-13T10:50:52.283Z"
  ];
  console.log(dt[0]);
  for (let i = 0; i < 3; i++) {
    let options = {
      method: "GET",
      url: "https://api.openuv.io/api/v1/uv",
      qs: { lat: lat, lng: lng, dt: dt[i] },
      headers: {
        "content-type": "application/json",
        "x-access-token": "7fe38d518128e7816c9474ae4d5489a6"
      }
    };
    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      let uv_ = JSON.parse(body);
      tgl.push(uv_);
      console.log(Object.keys(uv_));
      console.log(JSON.stringify(uv_));
      console.log(uv_.result.uv_max);
    });
  }
  res.send(tgl);
});

app.listen(3000, function() {
  console.log("Running di port 3000!");
});
