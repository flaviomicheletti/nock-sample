const axios = require('axios');
const adapter = require('axios/lib/adapters/http');

// config
const myapi = axios.create({
  baseURL: "http://jservice.io/api/",
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  adapter: adapter
});

module.exports = {

  getCategory: function (id, cb) {

    myapi.get('/category?id=' + id)
      .then(function (response) {
        // console.log(response);
        var category = response.data;
        // console.log(category.clues_count);
        cb(category.title);
      })
      .catch(function (error) {
        console.log(error);
      })

  },

  getRandomQuestion: function (cb) {

    myapi.get('/random' )
      .then(function (response) {
        var question = response.data[0];
        cb(question.question);
      })
      .catch(function (error) {
        console.log(error);
      })

  }

};