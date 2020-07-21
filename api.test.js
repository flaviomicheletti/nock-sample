var assert = require("assert");
var myapi = require("./api");
var nock = require("nock");

var scope = nock("http://jservice.io/api/");

describe("JService", function () {
  test("GET /category", function (done) {
    var expectedCategory = "gold";

    // intercept
    scope.get("/category?id=1044").reply(200, { title: expectedCategory });

    myapi.getCategory(1044, function (category) {
      assert.equal(category, expectedCategory);
      done();
    });
  });

  test("GET /category fail", function (done) {

    // intercept
    scope.get("/category?id=999").replyWithError("some error");

    myapi.getCategory(999, function (error) {
      assert.equal(error, "some error");
      done();
    });
  });

  test("GET /random", function (done) {
    var expectedClue = "This is the clue.";

    // intercept
    scope.get("/random").reply(200, [{ question: expectedClue }]);

    myapi.getRandomQuestion(function (question) {
      assert.equal(question, expectedClue);
      done();
    });
  });

  test("GET /random fail", function (done) {

    // intercept
    scope.get("/random").replyWithError("some error");

    myapi.getRandomQuestion(function (error) {
      assert.equal(error, "some error");
      done();
    });
  });
});
