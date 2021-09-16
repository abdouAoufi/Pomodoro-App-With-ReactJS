function fabionace(start) {
  var x = 0;
  var y = 1;
  var z = 0;
  for (let i = 0; i < start; i++) {
    z = x + y;
    let oldx = x;
    x = z;
    y = oldx;
  }
  return z;
}

console.log(fabionace(7));
