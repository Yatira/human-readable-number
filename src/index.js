module.exports = function toReadable(number) {
    let reading = [
        {
            0: "",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
        },
        {
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
        },
        {
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety",
        },
    ];

    number = number.toString();

    if (number < 1) return "zero";
    if (number < 10) return reading[0][number];
    if (number < 20) return reading[1][number];
    if (number < 100 && number % 10 === 0) return reading[2][number[0]];
    if (number < 100) return reading[2][number[0]] + " " + reading[0][number[1]];
    if (number % 100 === 0) return reading[0][number[0]] + " hundred";
    if (number % 100 > 0 && number % 100 < 10)
        return reading[0][number[0]] + " hundred " + reading[0][number % 100];
    if (number % 100 > 0 && number % 100 < 20)
        return reading[0][number[0]] + " hundred " + reading[1][number % 100];
    if (number % 10 === 0)
        return reading[0][number[0]] + " hundred " + reading[2][number[1]];
    if (number < 1000)
        return (
            reading[0][number[0]] +
            " hundred " +
            reading[2][number[1]] +
            " " +
            reading[0][number[2]]
        );
};
