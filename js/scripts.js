// Business Logic
// handles core functionality and computations of the application
var pingPongCalculator =function(userInputString) {
  var number = parseInt(userInputString);
  var pingOrPongArray = [];

  for (var i=0; i<= number; i++) {
    if (i % 3 === 0)  {
      pingOrPongArray.push('ping');
    } else if (i % 5 === 0) {
      pingOrPongArray.push('pong');
    } else if (i % 15 === 0) {
      pingOrPongArray.push('pingPong');
    } else {
      pingOrPongArray.push(i);
    }
  }

  return pingOrPongArray;
}

//User Interface Logic

$(document).ready(function()  {
  $("form#ping-pong").submit(function(event)  {
    event.preventDefault();

    var userInput= $("#inputNumber").val();
    var resultsArray = pingPongCalculator(userInput);

    resultsArray.forEach(function(values)  {
      $('#output').append('<p>' + values + '</p>');
    });

    $('#output').show();
  });
});
