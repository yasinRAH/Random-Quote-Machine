
var quote;
var author;


$(document).ready(function() {
  function newQuote() {
    $.ajax({    
      url: "https://random-quote-generator.herokuapp.com/api/quotes/random",
      success: function(data) {
        quote = data.quote;
        author = data.author;
        $("#message").text(quote);
        if (author) {
          $("#author").text("- " + author);
        } else {
          $("#author").text("- Unknown");
        }
      }
    });
  }

  newQuote();

  $("#quoteGen").on("click", function() {
    newQuote();
  });
  
  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + quote +  " - " + author);
  });    
});


//below is hard coded script

/*var quotes = [
  "Don't cry because it's over, smile because it happened.",
  "Be yourself; everyone else is already taken.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  "Be the change that you wish to see in the world.",
  "Always forgive your enemies; nothing annoys them so much.",
  "Insanity is doing the same thing, over and over again, but expecting different results."
]

var author = [
  "Dr. Seuss",
  "Oscar Wilde",
  "Albert Einstein",
  "Bernard M. Baruch",
  "Mahatma Gandhi",
  "Oscar Wilde",
  "Narcotics Anonymous"
]

var newQuote
$(document).ready(function() {
  function generateQuote() {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#message").text(newQuote);
    $("#author").text("- " + author[quotes.indexOf(newQuote)]);
  }

  generateQuote();

  $("#quoteGen").on("click", function() {
    generateQuote();       
  });

});*/