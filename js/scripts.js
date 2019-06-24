// Business Logic
// handles core functionality and computations of the application

//
// var pingpong = function(number) {
//   if ((number % 3 === 0)) {
//     return true;
//   } else if ((number % 5 === 0))  {
//     return true;
//   } else if ((number % 15 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
//
//
// };


//alert("Please enter a number greater than 0";)


//User Interface Logic
// handles interacting with the user, including gathering user input, updating and displaying information on the page
$(function()  {
  $("form#ping-pong").submit(function(event)  {
    event.preventDefault();
    var number = parseInt($("#numberInput").val());

    // var result = pingpong(number);
    for (var startingnumber = 0; startingnumber <= number; startingnumber +=1)  {
      console.log(startingnumber);
    }
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

    // for (var ping = startingnumber % 3 === 0; ) {
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
      $("#result").text(result);
    //need to increment by 1 so need to create an array

    });
  });
