var assert = require("assert");
var myapi = require("./api");
var nock = require("nock");

var scope = nock("http://jservice.io/api/");

describe("JService", function () {
  it("should allow category requests", function (done) {
    var expectedCategory = "gold";

    // scope.get("/category?id=1044")
    //   .reply(200, {
    //     title: expectedCategory
    //   });

    myapi.getCategory(1044, function (category) {
      assert.equal(category, expectedCategory);
      done();
    });
  });

  it("should get random questions", function (done) {
    var expectedClue = "This is the clue.";

    scope.get("/random")
      .reply(200, [{
        question: expectedClue
      }])

      myapi.getRandomQuestion(function (question) {
      assert.equal(question, expectedClue);
      done();
    });
  });
})