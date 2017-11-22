var geocoder = require('geocoder');

var city = process.argv[2];
var state = process.argv[3];

var address = city + state;


geocoder.geocode(address, function (err, data) {
    console.log(JSON.stringify(data, null, 2));
});
