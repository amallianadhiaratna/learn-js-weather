const request = require("request");
const express = require("express");
const app = express();
app.use(express.json());

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

    tgl.push(
      new Promise(function(resolve, reject) {
        request(options, function(error, response, body) {
          if (error) reject(error);
          console.log(typeof body);
          console.log(JSON.parse(body));
          var obj = JSON.parse(JSON.stringify.body).result.uv_max;
          //   console.log(tgl);
          resolve(obj);
        });
      })
    );
  }
  Promise.all(tgl).then(function(results) {
    console.log(results);
    console.log(Object.keys(tgl));
    console.log(tgl[0]);
    console.log(typeof result_);
    res.send(result_);
  });
  console.log(tgl);
  //   res.send(tgl);
});
app.listen(3000, function() {
  console.log("Running di port 3000!");
});
