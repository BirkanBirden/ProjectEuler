function f(x) {
    var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    while (x) {
      n[(x % 10)]++;
      x = Math.floor(x / 10);
    }
    return String(n);
  }
  
  var v = {};
  var a = 1;
  for (;;) {
    var k = f(a * a * a);
    if (k in v) {
      v[k].push(a);
      if (v[k].length == 5) break;
    } else {
      v[k] = [a];
    }
    a++;
  }
  
  a = v[k][0];
  ans = a * a * a;
  document.write('Cevap: ', ans);