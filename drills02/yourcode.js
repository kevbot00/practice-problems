

function countOccurences( arr, word ){
  var count = 0;
  for ( var val of arr ){
    if ( val === word){
      count++;
    }
  }
  return count;
}

function wordLengths( arr ){
  var result = [];
  for ( var val of arr){
    result.push( val.length );
  }
  return result;
}

function getMinMaxMean( arr ){
  var min = arr[0]
  var max = arr[0]
  var mean = null;
  for ( var val of arr ){
    if ( val < min ){
      min = val;
    }
    if ( val > max ){
      max = val
    }
    mean += val
  }
  return { min, max, mean: mean/arr.length}
}

function findMode( arr ){
  var obj = {};
  var highest = {};
  var highestKey = null;
  for ( var val of arr ){
    if ( obj.hasOwnProperty( val ) ){
      obj[val]+= 1;
      if ( obj[val] >= highest[val] ){
        highest = {};
        highest[val] = obj[val]
        highestKey = val;
      } else {
        highest[val] = obj[val];
      }
    } else {
      obj[val] = 1;
    }
  }
  return highestKey
}

