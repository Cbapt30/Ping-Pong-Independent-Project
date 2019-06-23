// Business Logic
// handles core functionality and computations of the application


var pingpong = function(number) {
  if ((number % 3 === 0)) {
    return true;
  } else if ((number % 5 === 0))  {
    return true;
  } else if ((number % 15 === 0)) {
    return true;
  } else {
    return false;
  }
};


//alert("Please enter a number greater than 0";)


//User Interface Logic
// handles interacting with the user, including gathering user input, updating and displaying information on the page
$(function()  {
  $("form#ping-pong").submit(function(event)  {
    alert ("hello");
    var number = parseInt($("#numberinput").val());
      var startingnumber = 0;
      for (count = number; count > 1; count--)  {
        startingnumber += count
      }
    //need to increment by 1 so need to create an array

    // var numberlist = ["number-1",]

    // number.forEach

    // $(".")

    event.preventDefault();
  });
});
