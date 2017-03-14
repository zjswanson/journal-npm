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
