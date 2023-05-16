const removeFromArray = function(arr, ...num) {
    newarr = []
    for (let i =0;i<arr.length;i++){
       if (!num.includes(arr.at(i))) newarr.push(arr.at(i))
    }
    return newarr
};

// Do not edit below this line
module.exports = removeFromArray;
