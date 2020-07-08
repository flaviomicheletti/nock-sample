var request = require("request");

var myapi = request.defaults({
  baseUrl: "http://jservice.io/api/"
});

module.exports = {
  getCategory: function(id, cb) {


    myapi.get("/category?id=" + id, function (error, response, body) {
      var category = JSON.parse(body);
      console.log(category.clues_count);
      cb(category.title);
    });


  },
  getRandomQuestion: function(cb) {


    myapi.get("/random", function (error, response, body) {
      var question = JSON.parse(body)[0];
      cb(question.question);
    });


    
  }
};