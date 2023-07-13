/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() { // document ready function


// Function to create tweet article
const createTweetElement = function(tweet) {

const $tweet = $('<article>').addClass('tweet');

const html = `
<header>
  <div class="name"><img src=${tweet.user.avatars}> ${tweet.user.name}</div>
  <div class="username">${tweet.user.handle}</div>
</header>
<p class="message">${$('<div>').text(tweet.content.text).html()}</p>

<footer>
  <div class="post-date">${timeago.format(tweet.created_at)}</div>
  <div class="icons">
    <a href=#><i class="fa-solid fa-flag fa-2xs"></i></a>
    <a href=#><i class="fa-solid fa-retweet fa-2xs"></i></a>
    <a href=#><i class="fa-solid fa-heart fa-2xs"></i></a>
  </div>
</footer>
`

$tweet.append(html);

return $tweet;
}


// Function to loop through json database and plugs each tweet data into createTweetElement function and then appends to #tweet-container
const renderTweets = function(tweets) {

  const $tweetContainer = $('#tweet-container');

  // Clear the tweet container first before rendering
  $tweetContainer.empty();

  // loop through tweets and attach them to container
  for (const tweet of tweets ) {
    const $tweetElement = createTweetElement(tweet);
    $tweetContainer.prepend($tweetElement) 
  }
};


// Function to load tweets
const loadTweets = function () {
  
  // AJAX GET request 
  $.ajax({
    url: '/tweets',
    method: 'GET',
    data: 'json',
    success: function(response) {
      console.log('Tweets loaded successfully');
      console.log('Server response:', response);
      renderTweets(response)
    },
    error: function(xhr, status, error) {
      console.error('Error loading Tweets:', error);
    }
  })
}


// Event listener for form submit
$('#tweet-form').submit(function(event) {
  
  // Prevent default form submission behaviour
  event.preventDefault();
  
  // Data validation checks if tweet is empty or exceeds limit 
  const tweetText = $('#tweet-text').val().trim();
  const $errorMessage = $('.error-message');
  const $errorText = $errorMessage.find('.error-text');

  // Hide error message at start
  $errorMessage.slideUp();

  if (tweetText === '') {
    $errorText.text('Cannot submit an empty tweet!')
    $errorMessage.slideDown();
    return;
  }
  
  if (tweetText.length > 140) {
    $errorText.text('This tweet exceeds the character limit!')
    $errorMessage.slideDown();
    return;
  }
  
  // serialize form data
  const formData = $(this).serialize();
  
  // AJAX POST request 
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: formData,
    success: function(response) {
      console.log('Form submitted successfully');
      console.log('Data sent: ', formData)
      console.log('Server response:', response);
      loadTweets();
    },
    error: function(xhr, status, error) {
      console.error('Error submitting form:', error);
    }
  })
  
  $('#tweet-text').val('');
})


// load tweets on page load
loadTweets()

// end of document.ready
})