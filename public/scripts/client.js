/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() { // document ready function

  // Fake data taken from initial-tweets.json
  const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function(tweet) {
  //create tweet article

const $tweet = $('<article>').addClass('tweet');/* Your code for creating the tweet element */
//combine it with html
// ...

const html = `
<header>
  <div class="name"><img src=${tweet.user.avatars}> ${tweet.user.name}</div>
  <div class="username">${tweet.user.handle}</div>
</header>
<p class="message">${tweet.content.text}</p>

<footer>
  <div class="post-date">${tweet.created_at}</div>
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

const renderTweets = function(tweets) {
// loops through tweets (json data)
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container

  const $tweetContainer = $('#tweet-container');

  // Clear the tweet container first before rendering
  $tweetContainer.empty();

  // loop through tweets and attach them to container
  for (const tweet of tweets ) {
    const $tweetElement = createTweetElement(tweet);
    $tweetContainer.append($tweetElement) 
  }
};

// call the renderTweets function with the json data
renderTweets(data);

})