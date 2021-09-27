function difference(x) {
  var reversedX = parseInt(x.toString().split('').reverse().join());
  return Math.abs(x-reversedX);

}
function beautifulDays(i, j, k) {
  var count = 0;
  for (var x = i; x <= j; x++) {
  if (difference(x) % k === 0) {
  count++;
  }
  }
  return count;
  } 