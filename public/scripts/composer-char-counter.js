

$(document).ready(function() {
  // --- our code goes here ---
  const counter = $('#counter-placeholder');

  $('#tweet-text').on('input', function() {
    const text = $(this).val();
    const remainingChars = 140 - text.length;
    $('#counter').text(remainingChars);
    counter.text(remainingChars);

    if (remainingChars < 0) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }
  });

    // Trigger the input event initially to update the counter on page load
    $('#tweet-text').trigger('input');
});