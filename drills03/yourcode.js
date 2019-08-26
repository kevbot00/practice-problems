

function getPath(string){
  return string.split('/');

}

function getPathParts( url ){
  // var index = url.indexOf('://');
  // var protocol = url.slice( index);
  // var host = url.slice( index + 3, url.indexOf(':', index + 1))
  // var port =
  // var path;
  // var file;
  
  // url.indexOf('://');
  
}

function getCapitalCount(arr){
  let count = 0;
  for ( var value of arr ){
    if ( value[0] !== value[0].toLowerCase() ){
      count++;
    }
  }
  return count;
}

function correctCalcChecker( obj ){
  let arrayResult = [];
  for ( var value of obj){
    let returnValue;
    const { num1, num2, op, result } = value;
    switch ( op ){
      case '/':
        returnValue = num1 / num2;
        break;
      case '*':
        returnValue = num1 * num2;
        break;
      case '+':
        returnValue = num1 + num2;
        break;
      case '-':
        returnValue = num1 - num2;
        break;
      default:
        break;
    }
    if ( returnValue === result ){
      arrayResult.push(value );
    }
  }
  return arrayResult;
}

function doMath(){

}
