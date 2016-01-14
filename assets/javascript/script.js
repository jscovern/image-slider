function showNextImage() {
  var visibleIndex = $('img').get().indexOf($('img:visible')[0]);
  var nextIndex = (visibleIndex + 1) % $('img').length;
  $($('img').get(visibleIndex)).hide();
  $($('img').get(nextIndex)).show();
}

var interval;

$(document).ready(function() {

  $('img').hide();
  $('img').first().show();

  $('img').on('click', function() {
    showNextImage();
  });

  $('.play').on('click', function() {
    interval = setInterval(function() {
      showNextImage();
    }, 1000);
  });

  $('.stop').on('click', function() {
    clearInterval(interval);
  });
});
