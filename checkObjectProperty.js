// Checks the given value against object's properties.
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  var result = '';
  x = myObj.hasOwnProperty(checkProp);
  
  if (x) {
    result = myObj[checkProp];
  } else {
    result = 'Not found'
  }
  
  return result;
}
console.log(checkObj("house"));
