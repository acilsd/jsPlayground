function divisors(integer) {
  var factors = [],
    quotient = 0;

  for(var i = 1; i <= integer; i++){
    quotient = integer / i;

    if(quotient === Math.floor(quotient) && quotient !== integer && quotient !== 1) {
      factors.push(i);
    }
  }
  return factors.length ? factors : integer + ' is prime';
}
