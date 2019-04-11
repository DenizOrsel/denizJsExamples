/*
  Pattern maker
  Program asks for a number input in order to create a 2 dimension matrix (n by n)
  It then prints a space or # sign to create the grid.

  First version is my entry level approach. Second version is where I used an immutable function.
  Both versions do produce same result.
*/

/* VERSION 1
//Define two bindings to hold values.
let pattern = '';
let size = Number(prompt('Grid size (doesnt handle input check)'));

// Create 2 dimensions. 1st one to establish new line. 2nd one to create the pattern.
for (x=1; x <= size; x++){
  
  for (y=1; y <= size; y++){
    if (pattern.length % 2 === 0) {pattern = pattern + ' ';} //modulus % for switch between space and #
    else {
      pattern = pattern + '#';
    }        
  }
  pattern = pattern + '\n'; //handle new line
}
console.log('\n' + pattern); // used \n here as console pushes "" signs which prevents nice look.
 */

 /*VERSION 2*/ 
const pattern = (size) => { 
    let pattern = '';
  for (x=1; x <= size; x++){
    
    for (y=1; y <= size; y++){
      if (pattern.length % 2 === 0) {pattern = pattern + ' ';}
      else {
        pattern = pattern + '#';
      }        
    }
    pattern = pattern + '\n';
  }
    return pattern;
  };
  console.log('\n' + pattern(Number(prompt('Grid size (doesnt handle input check)'))));