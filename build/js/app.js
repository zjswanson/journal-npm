(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal').submit( function() {
    event.preventDefault();
    var journal_title = $("#journal_title").val();
    var journal_body = $("#journal_body").val();
    var journal = new Journal(journal_title, journal_body);
    var output =
      "<li>" +
      journal.jTitle +
        "<ul>" +
          "<li>" +
            journal.getTeaser() +
          "</li>" +
          "<li>" +
            "Word count: " + journal.wordCount() + ", Vowel Count: " + journal.vowelCount() + ", Consanant Count: " + journal.consonantCount() +
          "</li>" +
        "</ul>" +
      "</li>";
      $('#journal_entries').append(output);
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/journal.js":1}]},{},[2]);
