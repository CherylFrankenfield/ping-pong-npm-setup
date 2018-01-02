//Interface Logic
// back-end file that is pulling into front-end file
var Calculator = require('./../js/scripts.js').calculatorModule;

$(document).ready(function() {
  $("form#ping-pong-form").submit(function(event) {
    event.preventDefault();
    var input = $("#goal").val();
    var simpleCalculator = new Calculator("hot pink");
    var answer = simpleCalculator.pingPong(input);
    answer.forEach(function(element) {
      $("#solution").append("<li>" + element + "</li>");
    });
  });
});
