var inquirer = require("inquirer")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        {
            type: "list",
            message: "Which band would you rather listen to?",
            choices: ["The Clash", "The Decemberists", "Wu-Tang Clan"],
            name: "bands"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
    ])
    .then(function(inqResponse) {
        if (inqResponse.confirm) {
            console.log("\nWelcome " + inqResponse.username);
            console.log(inqResponse.bands + " is ready to play!\n");
        }
        else {
            console.log("\nThat's cool, " + inqResponse.username + ", come back when you've made up your mind/\n");
        }
    });