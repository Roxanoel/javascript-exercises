const ftoc = function(f) {
  // Safeguard against invalid values
  if (!(typeof f === "number")) {return "ERROR"};

  // Apply formula and round
  return roundToOneDecimal((f - 32) * (5 / 9));
};

const ctof = function(c) {
  // Safeguard against invalid values
  if (!(typeof c === "number")) {return "ERROR"};

  // Apply formula and round
  return roundToOneDecimal(c * (9 / 5) + 32);
};

function roundToOneDecimal(num) {
    return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
