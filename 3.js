const lat = 60.936;
const lng = 5.114;
const start = "2018-05-15";
const end = "2018-05-16";

fetch(
  `https://api.stormglass.io/v1/tide/extremes/point?lat=${lat}&lng=${lng}&start=${start}&end=${end}`,
  {
    headers: {
      Authorization:
        "914cad30-4ef0-11ea-aef0-0242ac130007-914cadee-4ef0-11ea-aef0-0242ac130007"
    }
  }
)
  .then(response => response.json())
  .then(jsonData => {
    // Do something with response data.
  });
// const request = require("request");
// const express = require("express");
// const app = express();
// app.use(express.json());

// app.get("/weather", function(req, res) {
//   var options = {
//     method: "GET",
//     url: `https://api.stormglass.io/v1/tide/extremes/point?`,
//     qs: {
//       lat: "-33.34",
//       lng: "115.342",
//       start: "2018-05-15",
//       end: "2018-05-16"
//     },
//     headers: {
//       "content-type": "application/json",
//       "x-access-token":
//         "914cad30-4ef0-11ea-aef0-0242ac130007-914cadee-4ef0-11ea-aef0-0242ac130007"
//     }
//   };
//   request(options, function(error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body.result);
//     res.send(body.sun_info);
//   });
// });

// app.listen(3000, function() {
//   console.log("Running di port 3000!");
// });
