$(document).ready(function() {
  $(".busy").on("click", function() {
    $("html").css('background-color','red');
    $("body").css('background-color','red');
    $("#status").html('<h1>Currently Busy</h1><h2>I should be free soon.  Please check back later. Thanks!</h2>');
  });
  $(".free").on("click", function() {
    $("html").css('background-color','lightblue');
    $("body").css('background-color','lightblue');
    $("#status").html('<h1>Currently Available</h1><h2>Feel free to chat me up!</h2>');
  });
});
