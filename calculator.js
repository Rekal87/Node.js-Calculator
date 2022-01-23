const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "\\index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
  var userWeight = parseFloat(req.body.userWeight);
  var userHeight = parseFloat(req.body.userHeight);

  const bmiCalculator = Math.round(userWeight / (userHeight ** 2));

  res.send("Your BMI is " + bmiCalculator);

});

app.listen(3000, function() {
  console.log("Server as has been started on port:3000");
});