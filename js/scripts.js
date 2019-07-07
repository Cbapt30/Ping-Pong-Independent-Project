// Business Logic
// handles core functionality and computations of the application

var result = [];
var pingPongCaculator =function()  {
// var number = parseInt(#blanks("#inputNumber").val());
 
  if (inputNumber % 3 === 0)  {
    result.push('ping');
  } else if (inputNumber % 5 === 0) {
    result.push('pong');
  } else if (inputNumber % 15 === 0) {
    result.push('pingPong');
  } else if (result !== 'ping' || result !== 'pong' && result !== 'pingPong') {
    result.push(i);
  } else  {
    alert('Please enter a valid number');
  }  
};

//         console.log("help");
// var pingpongArraycalc = [];
// var pingPong = function(number) {
  
// };
//User Interface Logic

$(document).ready(function()  {
  $("form#ping-pong").submit(function(event)  {
    event.preventDefault();

    var number = parseInt($("#inputNumber").val());
 

    for (var i=0; i<= number; i+=1)  {
      console.log('i');
    }
      
    

  });
 
