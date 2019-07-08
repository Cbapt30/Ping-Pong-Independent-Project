// Business Logic
// handles core functionality and computations of the application

var pingPongCalculator =function(number) {
  var pingOrPongArray = [];
  if (i % 3 === 0)  {
    pingOrPongArray.push('ping');
  } else if (i % 5 === 0) {
    pingOrPongArray.push('pong');
  } else if (i % 15 === 0) {
    pingOrPongArray.push('pingPong');
  } else if (i !== 'ping' || i !== 'pong' && i !== 'pingPong') {
    pingOrPongArray.push('i');
  } else  {
    alert('Please enter a valid number');
  }  
};

var number = parseInt($("#inputNumber").val());


//User Interface Logic

$(document).ready(function()  {
  $("form#ping-pong").submit(function(event)  {
    event.preventDefault();
    // var number = parseInt($("#inputNumber").val());
    var resultsArray = [];


    for (var i=0; i<= number; i++) {
      resultsArray.push('i');
    }
      
    $("#output").show(results);
    
      });
    });     