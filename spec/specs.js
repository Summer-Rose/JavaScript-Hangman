describe('isOneWord', function() {
  it("outputs an error message when multiple words are entered", function() {
    expect(isOneWord("Sequoia Tree")).to.equal(false);
  });

  it("outputs true when a single word is entered", function() {
    expect(isOneWord("Sequoia")).to.equal(true);
  });
});

describe('wordToUpperCase', function() {
  it("turns word into char array of captial letters", function() {
    expect(wordToUpperCase("sequoia")).to.equal("SEQUOIA");
  });

  it("removes punctuation", function() {
    expect(wordToUpperCase("sequoia!!")).to.equal("SEQUOIA");
  });
});

describe('wordToBlanks', function() {
  it("outputs number of blanks corresponding to word length", function() {
    expect(wordToBlanks("sequoia")).to.equal("_ _ _ _ _ _ _ ");
  });
});

describe('containsLetter', function() {
  it("outputs guessed letter in correct place in word", function() {
    expect(containsLetter("sequoia", "e")).to.equal("_ e _ _ _ _ _ ");
  });
});
