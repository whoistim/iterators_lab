var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },
  
    min: function (numList) {
    var min = Infinity;
    for (var i = 0; i < numList.length; i++) {
      if (numList[i] < min) {
        min = numList[i];
      }
    }  
      return min;
    }, 

    each: function (numList, fn) {
    var numReturn = [];

    for (var i = 0; i < numList.length; i++) {
      numReturn.push(fn(numList[i]));
    }
    return numReturn;
  },
    map: function (numList, fn) {
      var newList = [];
  for (var i = 0; i < numList.length; i++) {
    newList.push(fn(numList[i]));
  }
  return newList;
  },
    filterMe: function (numList, fn) {
      var newList = [];
  for (var i = 0; i < numList.length; i++) {
    if(fn(numList[i])){
          newList.push(numList[i]);
    }
  }
  return newList;
  },


  // reduce: function(numList,fn){
    
  // },
};

module.exports = iterators;
