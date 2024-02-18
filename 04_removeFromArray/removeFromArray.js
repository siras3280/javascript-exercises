const removeFromArray = function(array,...removedItems) {
    let remove = [].slice.call(removedItems);
    
    let newArray = [];
    for (i = 0; i < array.length; i++){
        
        for(j = 0; j < remove.length; j++){
            if (array[i] != remove[j]){
                if (newArray[i] != remove[j]){
                    newArray.push(array[i]);
                   
                }
                
            }
        }
       
    }
    for(j = 0; j < (newArray.length);j++){
        if(newArray.includes(remove[j])== true){
            newArray = newArray.filter(function(item){
                return item !== remove[j];
            })
        }
       
    }


      let newArray1 = [];
      if (new Set(newArray).size ==1 ){
        newArray1 = [];
      }
      else{
        newArray1 =  Array.from(new Set(newArray))
      }
    
   
    return newArray1;
};
console.log(removeFromArray([1,2,3,4,5,6],3,4,5,6))
// Do not edit below this line
module.exports = removeFromArray;
