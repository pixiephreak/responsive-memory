
// Include the Axios library for HTTP requests
var axios = require("axios");

// NYT API Key (Replace with your own API Key)
var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

// Helper Functions
var helpers = {

  // This will run our query.
  runQuery: function(term) {
    // Adjust to get search terms in proper format
    var formattedTerm = term.trim();

    console.log("Query Run");
    // Run a query using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    http://api.giphy.com/v1/gifs/search?q=prince&api_key=d0acec0dd4dc4167bc0b8d5248f724af&limit=5

    return axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        "q": formattedTerm,
        "api_key": 'd0acec0dd4dc4167bc0b8d5248f724af',
        "limit": 6
      }
    })
    .then(function(results) {
      console.log("Axios Results", results.data.data);results.data.data
      var results = results.data.data;
      results= results.sort(function(a, b) {
        // Randomly return 1 or -1
        var random = Math.random();
        if (random > 0.5) {
          return 1;
        } else {
          return -1;
        }
      })
      return results;
    });

  },
  // This will return any saved articles from our database
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  // This will save new articles to our database
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
  // This will remove saved articles from our database
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};


// We export the helpers function
module.exports = helpers;
