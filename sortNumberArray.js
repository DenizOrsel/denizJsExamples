var arr1=[1,21,334];
var arr2=[7,32,23];

var newArray = [...arr1 , ...arr2];
console.log (newArray.sort(function(a, b){
  return a-b;
}
));

/*
var array = [110, 20, 40];
var numberSortAsc = function(a,b){
  return a-b;
}
var numberSortDes = function(a,b){
  return b-a;
}



array.sort(numberSortDes);

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
*/
