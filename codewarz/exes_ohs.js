function XO(str) {
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "o") {
      sum++;
    } else if (str[i].toLowerCase() === "x") {
      sum--;
    }
  }
  return sum === 0;
}

//good way
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
};
//regexp
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
