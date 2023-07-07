

$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').on('input', function() {
    var text = $(this).val();
    var remainingChars = 140 - text.length;
    $('#counter').text(remainingChars);
    console.log("Charaters remaining:", remainingChars);
  });
});