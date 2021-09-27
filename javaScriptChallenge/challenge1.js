function difference(x) {
  var reversedX = parseInt(x.toString().split('').reverse().join());
  return Math.abs(x-reversedX);

}
