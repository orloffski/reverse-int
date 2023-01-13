module.exports = function reverse (n) {
  let newNumber = 0;
  let tmp = Math.abs(n);

  while( tmp >= 10 ){
	newNumber += tmp % 10;

	tmp = (tmp - tmp % 10) / 10;

	newNumber *= 10;
  }

  newNumber += tmp;

  return newNumber;

}
