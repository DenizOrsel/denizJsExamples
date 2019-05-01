function multiplyAll(arr) {
  var product = 1;
for (var extCnt = 0; extCnt < arr.length; extCnt++)  {
  for (var intCnt = 0; intCnt < arr[extCnt].length; intCnt++) {
    product = product * arr[extCnt][intCnt];
  }
}
  return product;
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
