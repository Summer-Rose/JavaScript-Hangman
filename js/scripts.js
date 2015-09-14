var isOneWord = function(word) {
  if (word.includes(" ")) {
    return false;
  } else {
    return true;
  }
};

var wordToUpperCase = function(word) {
  return word.replace(/[^\w]|_/g, "").toUpperCase();
}

var wordToBlanks = function(word) {
  var blanks = "";
  for (var i = 0; i < word.length; i++) {
    blanks = blanks.concat("_ ");
  }
  return blanks;
}

$(document).ready(function() {
  $("form#mystery-word").submit(function(event){
    var mysteryWord = $("input#word").val();

    $(".blanks").text(wordToBlanks(mysteryWord));

    $("#start-word").hide();
    $("#game").show();
    event.preventDefault();
  });

});
