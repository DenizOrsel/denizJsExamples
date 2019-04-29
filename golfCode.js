// Given the parameter values strokes and par program prints various text corresponding to performance in a golf game.

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  var index = null;

  if (strokes == 1){
    index = 0;
  } else if (strokes<= par - 2) {
    index = 1;
  } else if (strokes == par - 1) {
    index = 2;
  } else if (par == strokes) {
    index = 3;
  } else if (strokes == par + 1) {
    index = 4;
  } else if (strokes == par + 2) {
    index = 5;
  } else if (strokes >= par + 3) {
    index = 6;
  }
  return names[index];
}
console.log(golfScore(5, 8));
