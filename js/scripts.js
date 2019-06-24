// Business Logic
// handles core functionality and computations of the application


var ping = function(number) {
  if ((number % 3 === 0)) {
    return true;
  } else {
  return false;
  }
};

var pong = function(number) {
 if ((number % 5 === 0))  {
    return true;
  } else {
    return false;
  }
};

var pingpong = function(number) {
  if ((number % 15 === 0)) {
    return true;
  } else {
    return false;
  }
};

//alert("Please enter a number greater than 0";)
alert("got to middle");
//User Interface Logic
// handles interacting with the user, including gathering user input, updating and displaying information on the page
$(document).ready(function()  {
  $("form #ping-pong").submit(function(event)  {
    event.preventDefault();
    var number = parseInt($("#inputnumber").val());
    //
alert("got to userinterface start")

    // var result = 1;
    // var result = pingpong(number);
    //want to push these numbers into an array..?
    for (var startingnumber = 0; startingnumber <= number; startingnumber +=1)  {
    console.log(startingnumber);
    event.preventDefault();
    }
  });
  alert("got past for loop");
    // var for = [];
    console.log("hello");

    // if (startingnumber % 3 === 0) {
    //    console.log("ping");
    // } else if (startingnumber % 5 ===0) {
    //    console.log("pong");
    // } else {
    //   startingnumber % 3 === 0 && startingnumber % 5 === 0 {
    //     console.log("ping-pong");
    //   }
    // }

    // for (var ping = startingnumber % 3 === 0; startingnumber % 3 !===0; startingnumber +=1) {
    //   console.log("ping");
    // }
    // for (var pong = ;){
    //   console.log("pong");
    // }
    //
    // for (var pingpong = ;)  {
    //   console.log("pingpong");
    // }
    //
    // });

//     if (startingnumber % 3 === 0) {
//     console.log("ping");
// }
      // $("#output").text(result);

    //need to increment by 1 so need to create an array

    });
