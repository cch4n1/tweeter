

$(document).ready(function() {
  // --- our code goes here ---
  console.log('test')
  $('#tweet-text').on('input', function(event) {
    console.log('Key pressed: ' + event.key);
  });
});