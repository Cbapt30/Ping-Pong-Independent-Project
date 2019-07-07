// Business Logic
// handles core functionality and computations of the application


  // var number = parseInt($("#inputNumber").val());
 
  // var results = [];

 
  // var pingPongCalculator = [];


console.log('hello');
var pingPongCalculator =function(number) {
  if (i % 3 === 0)  {
    results.push('ping');
  } else if (i % 5 === 0) {
    results.push('pong');
  } else if (i % 15 === 0) {
    results.push('pingPong');
  } else if (i !== 'ping' || i !== 'pong' && i !== 'pingPong') {
    results.push('i');
  } else  {
    alert('Please enter a valid number');
  }  
};

var number = parseInt($("#inputNumber").val());





//User Interface Logic

$(document).ready(function()  {
  $("form#ping-pong").submit(function(event)  {
    event.preventDefault();
    var results = [];
    // var result= pingPongCalculator(number);
    // pingPongCalculator(number);

    for (var i=0; i<= number; i+=1)  {
      results.push('i');
    }
      
    $("#output").show(results);
    
      });
    });     