

function populateRecords( arr ){
  let charge = 0;
  let cashAdv = 0;
  for ( let key in arr ){
    if ( arr[key]['type'] === 'charge'){
      charge += parseFloat(arr[key].amount);
    } else {
      cashAdv += parseFloat(arr[key].amount);
    }
  }
  // $('.testArea')
  let testOutput = $('<div>').addClass('testOutput');
  let header = $('<div>').addClass('transactionRecord');
  $('.testArea').append( testOutput );
}

// .transactionRecord:nth-of-type(1){
// 	background-color: black;
// 	color: white;
// 	font-weight: bold;
// }
// .transactionRecord{
// 	display: flex;
// 	border-bottom: 1px solid black;
// 	width: 100%;
// }
// .transactionRecord > * {
// 	border-right: 1px solid black;
// 	padding-left: .5%;
// }
// .transactionType{
// 	width: 15%;
// }
// .transactionLocation{
// 	width: 60%;
// }
// .transactionAmount{
// 	width: 25%;
// }


// - populateRecords: given an array of objects,
//   each contains a purchase record.  See example below for what it should look like
//   - [
//     -      { type: 'charge', source: 'Lowes', amount: '23.50'},
//     -      { type: 'charge', source: 'Applebees', amount: '17.30'},
//     -      { type: 'cash advance', source: 'BofA', amount: '40.00'},
//     -      { type: 'charge', source: 'AT&T', amount: '130.00'},
//     -      { type: 'cash advance', source: 'Chase', amount: '20.00'}
//   -  ]
//   -  <img src="outputscreen1.png">
//   - [
//     -     { type: 'charge', source: 'Fudruckers', amount: '23.50'},
//     -      { type: 'charge', source: 'Carls Junior', amount: '17.30'},
//     -      { type: 'charge', source: 'McDonalds', amount: '40.00'},
//     -      { type: 'charge', source: 'Olive Garden', amount: '31.20'},
//     -      { type: 'charge', source: 'Heart Doctor', amount: '1000.00'}
//     -    ]
//   -  <img src="outputscreen2.png">
//   - Return an object with the total amount of charges 
//   and the total amount charges and cash advances in an object, like this: 
//   	- { charge: 27.50, 'cash advance': 40.10 }
//   - Contain each section in an element with a class of "testOutput"
//   - Convenient classes exist in the test.css file for you to use

