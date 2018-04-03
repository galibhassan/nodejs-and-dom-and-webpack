var myModule = require('./myModule');

myModule.myFunction();

var bt = document.getElementById('myButton');
bt.addEventListener('click', function(){
  myModule.putSomeText();
});
