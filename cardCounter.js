// BlackJack Card Counter

var count = 0;

function cc(card) {
var rtnText = ""
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count = count + 1;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count = count - 1;
      break;
    default:
      break;
  }

  if (count > 0) {
    rtnText = " Bet"
  } else {
    rtnText = " Hold"
  }
  
  return (count + rtnText);
}

cc(2); cc(3); cc(7); cc('K'); cc('A'); cc('A');
//cc(2); cc(3); cc(4); cc(5); cc(6);

console.log(cc());
