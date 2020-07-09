var myapi = require("./api");

myapi.getCategory(1044, function(category) {
  console.log(category);
});

myapi.getRandomQuestion(function(question) {
  console.log(question);
});