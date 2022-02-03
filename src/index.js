module.exports = function toReadable (number) {
    const firstTenNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondTenNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozenNumber = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    const hundredNumbers = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred', ]
    let result = [];

    const numberToWork = (Array.from((number.toString()))).map(Number)
    if (numberToWork.length === 1) {
        result = firstTenNumber[numberToWork];
    } else if (numberToWork.length === 2) {
        if (numberToWork[0] === 1) {
            result = secondTenNumber[numberToWork[1]]
        } else if (numberToWork[1] === 0) {
            result = dozenNumber[numberToWork[0] -2]
        } else {
            result = `${dozenNumber[numberToWork[0] - 2]} ${firstTenNumber[numberToWork[1]]}`;
        }
    } else {
        if (numberToWork.length === 3 && numberToWork[1] === 0 && numberToWork[2] === 0) {
            result = hundredNumbers[numberToWork[0] - 1]
        } else if (numberToWork[1] === 1) {
            result = `${hundredNumbers[numberToWork[0] - 1]} ${secondTenNumber[numberToWork[2]]}`
        } else if (numberToWork[1] === 0) {
            result = `${hundredNumbers[numberToWork[0] - 1]} ${firstTenNumber[numberToWork[2]]}`
        } else if (numberToWork[2] === 0) {
            result = `${hundredNumbers[numberToWork[0] - 1]} ${dozenNumber[numberToWork[1] - 2]}`
        } else {
            result = `${hundredNumbers[numberToWork[0] - 1]} ${dozenNumber[numberToWork[1] - 2]} ${firstTenNumber[numberToWork[2]]}`;
        }
    }
    return result

}
