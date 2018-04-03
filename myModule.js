var myFunction = function(){
  console.log(document);
  var t = document.getElementById('myButton')
  t.addEventListener('click', function(){
    console.log('hello');
  });
}

var putSomeText = function(){
  var para = document.createElement('p');
  para.innerHTML = "This paragraph is just created";
  document.body.appendChild(para); 
}


module.exports = {
  myFunction: myFunction, 
  putSomeText: putSomeText
}
