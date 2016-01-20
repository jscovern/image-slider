$(document).ready(function() {

  var autoPlayInterval;

  function showNextImage() {
    var currentImageNode = $('img:visible').get(0);
    var allImages = $('img').get();
    var currentIndex = allImages.indexOf(currentImageNode);
    var nextIndex = (currentIndex + 1) % $('img').length;
    // var nextIndex = currentIndex + 1;
    //
    // if (nextIndex >= $('img').length) {
    //   nextIndex = 0;
    // }

    $(currentImageNode).hide();

    var nextImageNode = $('img').get(nextIndex);
    $(nextImageNode).show();
  }

  $('img').hide();
  // $('img:eq(0)').show();
  // $($('img').get(0)).show();
  // $('img:first').show();
  $('img').first().show();

  $('img').on('click', function() {
    showNextImage();
  });

  $('.start').on('click', function() {

    autoPlayInterval = setInterval(function() {
      showNextImage();
    }, 1000);

  });

  $('.stop').on('click', function() {
    clearInterval(autoPlayInterval);
  });


});
