const sumAll = function(valueA,valueB) {
    if (valueA < 0 || valueB < 0 || typeof valueA != 'number' || typeof valueB != "number"){
        return "ERROR";
    };

    let smallerNumber;
    let largerNumber;
    if (valueA > valueB){
        smallerNumber = valueB;
        largerNumber = valueA;
    }
    else{
        smallerNumber = valueA;
        largerNumber = valueB;
    }
    let numberOfTerms = (largerNumber - smallerNumber) + 1;
    let commonDifference = 1;
    let sum ;
    sum = (numberOfTerms / 2) * ((2 * smallerNumber) + ((numberOfTerms - 1) * commonDifference))
    return sum;

};
console.log(sumAll(5,[1,2]))
// Do not edit below this line
module.exports = sumAll;
