var prompt = require('prompt');

var printFunction = function (err, result) {
  // 
  // Log the results. 
  // 
  if (!err){
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);

    getPrompt();
  } else {

  }
}

// 
// Start the prompt 
// 
prompt.start();

// 
// Get two properties from the user: username and email 
// 
var getPrompt = function (){
  prompt.get(['username', 'email'], printFunction); 
}



//getPrompt()


var myCb = function (){
  console.log('after');
}


var asyncFunc = function (name, cbfunction) {
  if (name){
    console.log(name);  
  } else {
    console.log('Just gonna call you JP');
  }
  
  if (cbfunction) {
    cbfunction();
  }
}



// 1. get the prompt/receive input
// 2. print the message
// 3. 1
// 4. 2


// prompt me 5 times and get 5 names, store the names in a list, at the end print out the 5 names 
// in alphabetical order

var Name = [];
var counter = 1;

var callagain = function(err, result){
  Name.push({age:result.age, name:result.name});
  if (counter < 5){
    promptUser();
  } else {
    order();
    Name.sort(compare);
    for (var t=0; t<5; t++){
      console.log(Name[t].name);
    }
  }
  counter++;
}

var promptUser = function (){
  prompt.get(['age', 'name'], callagain); 
}


function compare(a,b) {
  if (a.age < b.age)
    return -1;
  if (a.age > b.age)
    return 1;
  return 0;
}

function order(a,b) {
  parseInt(a, 10);
  parseInt(b, 10);
}

promptUser();

// prompt me 5 times and get 5 names, and ages, store the names and ages in a json object/dictionary
// {23: ['Hank', 'John'], 5: ['JP']}
// print the people in ascentding age order.
// JP
// John
// Hank












