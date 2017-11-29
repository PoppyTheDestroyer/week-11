var geocoder = require("geocoder");
var inquirer = require("inquirer")

//var city = process.argv[2];
//var state = process.argv[3];

//var address = city + state;

inquirer
    .prompt([
        {
            type: "input",
            message: "What city are you looking for?",
            name: "city"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inqResponse) {
        if (inqResponse.confirm) {
            geocoder.geocode(inqResponse.city, function (err, data) {
                console.log(JSON.stringify(data, null, 2));
            }
            )
        }
    });
