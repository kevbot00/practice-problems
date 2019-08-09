function sumArray( arr ){
  var result = 0;
	for ( var value of arr ){
    result += value;
  }
  return result;
}

function fitWithinVal( arr, num ){
  var result = [];
  var count = 0;
  for ( var i = 0; i < arr.length; i++ ){
    if ( arr[i] + count <= num ){
      count += arr[i]
      result.push( arr[i] );
    }
  }
  return result;
}

function getAllNamesShorterThan( arr , num ){
  const result = [];
  for ( var value of arr ) {
    if ( value.length <= num ){
      result.push( value )
    }
  }
  return result;
}

function makeLabel( arr ){
  console.log( arr[0] );
  const arr1 = arr[0];
  const home = arr1['home address']
  return `${ arr1.greeting} ${arr1.givenName} ${arr1.familyName}\n${home.streetNumber} ${home.streetName} ${home.city}, ${home.state} ${home.zip}`

}

const arr = 		[
  {
    "familyName": "McGee",
    "givenName": "Chuckles",
    "greeting": "Miss.",
    "age": 28,
    "height": 165,
    "colors": {
      "eye": "green",
      "hair": "green"
    },
    "home address": {
      "streetNumber": "12345",
      "streetName": "Any St",
      "state": "Mo",
      "zip": 63102,
      "city": "Kansas City"
    }
  }
]
console.log( makeLabel( arr ))