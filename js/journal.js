function Journal(jTitle, jBody) {
  this.jTitle = jTitle;
  this.jBody = jBody;
}

Journal.prototype.wordCount = function() {
  allWords = this.jTitle + " " + this.jBody;
  wordArray = allWords.match(/\S+/g);
  wordCount = 0;
  if (wordArray) {
    wordCount = wordArray.length;
  }
  return wordCount;
};

Journal.prototype.getTeaser = function() {
  var wordArray = this.jBody.split(" ");
  if (wordArray.length > 8) {
    wordArray = wordArray.slice(0,7);
    wordArray.push("...");
  }
  if (this.jBody === "") {
    return "no body text entered";
  }
  return wordArray.join(" ");
};

Journal.prototype.regCount = function(regexString) {
  var allWords = this.jTitle + " " + this.jBody;
  var regex = new RegExp (regexString, 'gi');
  var matchArray = allWords.match(regex);
  count = 0;
  if (matchArray) {
    count = matchArray.length;
  }
  return count;
};

Journal.prototype.vowelCount = function() {
  return this.regCount("[aeiou]");
};

Journal.prototype.consonantCount = function() {
  return this.regCount("[bcdfghjklmnpqrstvxzwy]");
};

exports.journalModule = Journal;
