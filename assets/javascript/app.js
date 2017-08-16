// SETUP VARIABLES
// ==========================================================
$( document ).ready(function() {
    console.log( "ready!" );

var authKey = "87d55e09e35349b9bdca3c203f7a6108";


var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;


var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
authKey + "&q=";


var articleCounter = 0;

// FUNCTIONS
// ==========================================================


function runQuery(numArticles, queryURL) {



  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(NYTData) {


    console.log("------------------------------------");
    console.log("URL: " + queryURL);
    console.log("------------------------------------");


    console.log(NYTData);
    console.log("------------------------------------");


    for (var i = 0; i < numArticles; i++) {


      articleCounter++;


      var wellSection = $("<div>");
      wellSection.addClass("well");
      wellSection.attr("id", "article-well-" + articleCounter);
      $("#well-section").append(wellSection);


      if (NYTData.response.docs[i].headline.main !== "null") {
        $("#article-well-" + articleCounter)
        .append(
          "<h3 class='articleHeadline'><span class='label label-primary'>" +
          articleCounter + "</span><strong> " +
          NYTData.response.docs[i].headline.main + "</strong></h3>" + '<a href="' + NYTData.response.docs[i].web_url + '">' +
          NYTData.response.docs[i].web_url + '</a>'
        );


        console.log(NYTData.response.docs[i].headline.main);
      }


      if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.original) {
        $("#article-well-" + articleCounter)
        .append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>");


        console.log(NYTData.response.docs[i].byline.original);
      }


      $("#articleWell-" + articleCounter)
      .append("<h5>Section: " + NYTData.response.docs[i].section_name + "</h5>");
      $("#articleWell-" + articleCounter)
      .append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>");
      $("#articleWell-" + articleCounter)
      .append(
        '<a href="' + NYTData.response.docs[i].web_url + '">' +
        NYTData.response.docs[i].web_url + '</a>'
      );


      console.log(NYTData.response.docs[i].pub_date);
      console.log(NYTData.response.docs[i].section_name);
      console.log(NYTData.response.docs[i].web_url);
    }
  });

}

// METHODS
// ==========================================================


$("#run-search").on("click", function(event) {

  event.preventDefault();


  articleCounter = 0;


  $("#well-section").empty();

  searchTerm = $("#search-term").val().trim();
  var queryURL = queryURLBase + searchTerm;


  numResults = $("#num-records-select").val();

  runQuery(numResults, queryURL);
});


$("#clear-all").on("click", function() {
  articleCounter = 0;
  $("#well-section").empty();
});
//Dictionarary ////
//SETUP VARIABLES
//==========================================================

var authKey2 = "&bRoHTDNUWKHf4MdAWrXFMvgV3Ggz8INw=";

var consumerKey = "313rKOSovQnxco3l";



// FUNCTIONS
// ==========================================================

function dictionaryQuery(searchWord) {
console.log("runQuery2");
console.log(searchWord)


  var queryURLBase2 = "https://api.pearson.com/v2/dictionaries/ldoce5/entries?headword="
  + searchWord + authKey2 + consumerKey;

  $.ajax({
    url: queryURLBase2,
    method: "GET"
  }).done(function(results) {

    console.log("------------------------------------");
    console.log("URL: " + queryURLBase2);
    console.log("------------------------------------");


    console.log("------------------------------------");

    var wellSection2 = $("<div>");
    wellSection2.attr("id", "definition-well-");
    $("#definition-well").append(wellSection2);


    if (results.results[0]){
      console.log('real word!')
      $("#definition-well")
      .html(
        "<h3 class='articleHeadline'><span class='label label-primary'>" + "</span><strong> " +
        results.results[0].senses[0].definition[0] + "</strong></h3>"
      );



      console.log(results.results[0].senses[0].definition[0]);
    } else{
      $("#definition-well")
      .html("<h3>This is not a real world...you've been covfefed!</h3>")
    }


  });
  // // ==========================================================

  $("#clear-covfefe-results").on("click", function() {

    $("#definition-well").empty();
  })

};
$("#covfefe-search").on("click", function(event) {

  event.preventDefault();

  searchWord = $("#covfefe-checker").val().trim();

  console.log(searchWord);
  dictionaryQuery(searchWord);
  console.log(searchWord);



});

var tweets = ["For every CEO that drops out of the Manufacturing Council, I have many to take their place. Grandstanders should not have gone on. JOBS! Donald J. Trump (@realDonaldTrump)",
"Big day in Alabama. Vote for Luther Strange, he will be great! Donald J. Trump (@realDonaldTrump)","MAKE AMERICA GREAT AGAIN! Donald J. Trump (@realDonaldTrump)","Amazon is doing great damage to tax paying retailers. Towns, cities and states throughout the U.S. are being hurt - many jobs being lost! Donald J. Trump (@realDonaldTrump)", "Senator Luther Strange, who is doing a great job for the people of Alabama, will be on @foxandfriends at 7:15. Tough on crime, borders etc.Donald J. Trump (@realDonaldTrump)","Feels good to be home after seven months, but the White House is very special, there is no place like it... and the U.S. is really my home! Donald J. Trump (@realDonaldTrump)", "Made additional remarks on Charlottesville and realize once again that the #Fake News Media will never be satisfied...truly bad people! Donald J. Trump (@realDonaldTrump)"]
var tweetChoice = tweets[Math.floor(Math.random() * tweets.length)];
console.log(tweetChoice);
$("#tweet-div").append(tweetChoice);
});
