module.exports = function toReadable (number) {
    
        let start = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let others = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    
        let numString = number.toString();
    
    if (number < 0) throw new Error('Negative numbers are not supported.');
    
    if (number === 0) return 'zero';
    
    
    if (number < 20) {
      return start[number];
    }
    
    if (numString.length === 2) {
      return others[numString[0]] + ' ' + start[numString[1]];
    }
    
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return start[numString[0]] + ' hundred';
      else
        return start[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
    }
    
    if (numString.length === 4) {
      let end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return start[numString[0]] + ' thousand';
      if (end < 100) return start[numString[0]] + ' thousand and ' + convert(end);
      return start[numString[0]] + ' thousand ' + convert(end);
    }
    } 
