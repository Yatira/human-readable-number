module.exports = function toReadable (number) {
    
    let start = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let others = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    numString = number.toString();

if (number < 0) {
    throw new Error('Negative numbers are not supported.');
}

if (number === 0) {
    return 'zero';
}

if (0 < number <= 12) {
  return start[number];
}

if (13 <= number <= 19) {
    return tens[number];
  }

if (numString.length === 2 && number > 19) {
  return others[numString[0]] + ' ' + ones[numString[1]];
}

if (numString.length == 3) {
  if (numString[1] === '0' && numString[2] === '0') {
    return ones[numString[0]] + ' hundred';}
  else {
    return ones[numString[0]] + ' hundred and ' + others[numString[1]] + ones[numString[2]];}
}

if (numString.length === 4) {
  let end = +(numString[1] + numString[2] + numString[3]);
  if (end === 0) {
    return ones[numString[0]] + ' thousand';}
  if (end < 100) {
    return start[numString[0]] + ' thousand and ' + convert(end);}
  else {
    return start[numString[0]] + ' thousand ' + convert(end);}
}
} 