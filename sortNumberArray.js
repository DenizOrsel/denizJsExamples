var arr1=[1,21,334];
var arr2=[7,32,23];

var newArray = [...arr1 , ...arr2];
console.log (newArray.sort(function(a, b){
  return a-b;
}
));
