// Backend Logic
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(input) {
  var output = [];
  for (index = 1; index <= input; index++) {
    if (index % 15 === 0) {
      output.push("ping-pong");
    } else if (index % 3 === 0) {
      output.push("ping");
    } else if (index % 5 === 0) {
      output.push("pong");
    } else {
      output.push(index);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;
