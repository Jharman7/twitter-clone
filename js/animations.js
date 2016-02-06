$('document').ready(function () {
  $("time.timeago").timeago();
  console.log(json.stringify(storArray));
  if (localStorage.getItem(storArray)) {
    storArray = localStorage.getItem(storArray);
    for (var i = 0; i < storArray.length; i++) {
      newTweet(storArray[i]);
    }
  } else {
    localStorage.setItem('storArray', storArray);
  }
  $('.tweet-compose').click(function () {
    $(this).animate({height: '5em'});
    $('#tweet-controls').css('display', 'block');
  })

  function Tweet (content, name, time) {
    this.content = content;
    this.name = name;
    this.time = time;
  }

  $('.tweet-compose').keyup(function () {
    var length = $('.tweet-compose').val().length
    $('#char-count').text(140 - length);
    if (length >= 130) {
      $('#char-count').css('color','red');
    } else {
      $('#char-count').css('color','#999');
    }
    if (length > 140) {
      $('#tweet-submit').prop('disabled', true);
    } else {
      $('#tweet-submit').prop('disabled', false);
    }
  })

  function newTweet (tweet) {
    var text = tweet.content;
    var myHandle = '@meeeeee';
    var myName = tweet.name;
    var avatar = 'img/alagoon.jpg';
    var timestamp = tweet.time;
    var tweetHTML = '<div id= "expand" class="tweet">'+
      '<div class="content">'+
        '<img class="avatar" src="'+avatar+'" />'+
        '<strong class="fullname">'+myName+'</strong>'+
        '<span class="username">'+myHandle+'</span>' +
        '<p class="tweet-text">' + text + '</p>' +
        '<div class="tweet-actions">'+
          '<ul>'+
            '<li><span class="icon action-reply"></span> Reply</li>'+
            '<li><span class="icon action-retweet"></span> Retweet</li>'+
            '<li><span class="icon action-favorite"></span> Favorite</li>'+
            '<li><span class="icon action-more"></span> More</li>'+
          '</ul>'+
        '</div>'+
        '<div class="stats">'+
          '<div class="retweets">'+
            '<p class="num-retweets">30</p>'+
            '<p>RETWEETS</p>'+
          '</div>'+
          '<div class="favorites">'+
            '<p class="num-favorites">6</p>' +
            '<p>FAVORITES</p>'+
          '</div>' +
          '<div class="users-interact">' +
            '<div>' +
              '<img src="img/alagoon.jpg" />' +
              '<img src="img/vklimenko.jpg" />' +
            '</div>' +
          '</div>' +
          '<time class="timeago" datetime="'+timestamp+'">' +
          '</time>' +
        '</div>' +
        '<div class="reply">' +
          '<img class="avatar" src="'+avatar+'" />' +
          '<textarea class="tweet-compose" placeholder="Reply to ' + myHandle + '"/></textarea>' +
        '</div>' +
      '</div>' +
    '</div>';
    $('#stream').prepend(tweetHTML);
    $('.tweet-compose').val('');
  }

  $('#tweet-submit').click(function () {
    var timestamp = new Date();
    timestamp = timestamp.toISOString();
    var tweet = new Tweet(($('.tweet-compose').val()), 'Jeff',timestamp);
    newTweet(tweet);
    $('.tweet-compose').val('');
  })

  // $('#tweet-submit').click(function () {
  //   var text = $('.tweet-compose').val();
  //   var myHandle = '@meeeeee';
  //   var myName = 'Jeff'
  //   var avatar = 'img/alagoon.jpg'
  //   var timestamp = new Date();
  //   timestamp = timestamp.toISOString();
  //   var tweetHTML = '<div id= "expand" class="tweet">'+
  //     '<div class="content">'+
  //       '<img class="avatar" src="'+avatar+'" />'+
  //       '<strong class="fullname">'+myName+'</strong>'+
  //       '<span class="username">'+myHandle+'</span>' +
  //       '<p class="tweet-text">' + text + '</p>' +
  //       '<div class="tweet-actions">'+
  //         '<ul>'+
  //           '<li><span class="icon action-reply"></span> Reply</li>'+
  //           '<li><span class="icon action-retweet"></span> Retweet</li>'+
  //           '<li><span class="icon action-favorite"></span> Favorite</li>'+
  //           '<li><span class="icon action-more"></span> More</li>'+
  //         '</ul>'+
  //       '</div>'+
  //       '<div class="stats">'+
  //         '<div class="retweets">'+
  //           '<p class="num-retweets">30</p>'+
  //           '<p>RETWEETS</p>'+
  //         '</div>'+
  //         '<div class="favorites">'+
  //           '<p class="num-favorites">6</p>' +
  //           '<p>FAVORITES</p>'+
  //         '</div>' +
  //         '<div class="users-interact">' +
  //           '<div>' +
  //             '<img src="img/alagoon.jpg" />' +
  //             '<img src="img/vklimenko.jpg" />' +
  //           '</div>' +
  //         '</div>' +
  //         '<time class="timeago" datetime="'+timestamp+'">' +
  //         '</time>' +
  //       '</div>' +
  //       '<div class="reply">' +
  //         '<img class="avatar" src="'+avatar+'" />' +
  //         '<textarea class="tweet-compose" placeholder="Reply to ' + myHandle + '"/></textarea>' +
  //       '</div>' +
  //     '</div>' +
  //   '</div>';
  //   storArray.push(tweetHTML + '');
  //   localStorage.setItem('storArray', storArray);
  //   $('#stream').prepend(tweetHTML);
  //   $('.tweet-compose').val('');
  // })

  $(document).on('click', '.tweet', function(){
    $(this).find('.stats, .reply').fadeToggle();
    $("time.timeago").timeago();
  })

})
