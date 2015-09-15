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

var guessedLetters = [];

var containsLetter = function(word) {
  guessedLetters.forEach(function(guess) {
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) !== guess) {
        word = word.replace(word.charAt(i), "_ ");
      }
    }
  });
  return word;
}

$(document).ready(function() {
  var mysteryWord;
  $("form#mystery-word").submit(function(event){
    mysteryWord = $("input#word").val();
    $(".blanks").text(wordToBlanks(mysteryWord));

    $("#start-word").hide();
    $("#game").show();
    event.preventDefault();
  });

  $("form#letter-guess").submit(function(event) {
    var letter = $("input#letter").val();
    guessedLetters.push(letter);

    $(".blanks").text(containsLetter(mysteryWord));
    $("#start-word").hide();
    $("#game").show();
    event.preventDefault();
  });
});
