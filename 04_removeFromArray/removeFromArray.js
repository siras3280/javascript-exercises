const removeFromArray = function(array,...removedItems) {
    let remove = [].slice.call(removedItems);
    
    let newArray = array.filter(values => !remove.includes(values));
    
   
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
