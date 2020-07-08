var jservice = require("./jservice");

jservice.getCategory(1044, function(category) {
  console.log(category);
});

jservice.getRandomQuestion(function(question) {
  console.log(question);
});