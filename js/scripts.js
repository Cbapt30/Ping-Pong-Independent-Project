// Business Logic
// handles core functionality and computations of the application

var result = [];
var pingPongCaculator =function()  {
  if (inputNumber % 3 === 0)
  result.push('ping');
  else if (inputNumber % 5 === 0)
  result.push('pong');
  else if (inputNumber % 15 ===0)
  result.push('pingPong');
  else if (inputNumber % 3 !=== 0 && inputNumber % 5!===0 && inputNumber % !===15)
  result.push(i);
 }
};
//         console.log("help");
// var pingpongArraycalc = [];
// var pingPong = function(number) {
  
// };


$(document).ready(function()  {
  $("form#ping-pong").submit(function(event)  {
    event.preventDefault();
    
    var number = parseInt($("#inputNumber").val());
 

    for (var i=0; i<= number; i+=1)  {
      console.log('i is', i);
    }
      
    

  });
 
