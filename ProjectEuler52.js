function f(x) {
    var s = 0
    while (x) {
      s += Math.pow(11, x % 10);
      x = Math.floor(x / 10);
    }
    return s;
  }
  
  function memo(f) {
    var m = [];
    return function (x) {
      return m[x] ? m[x] : (m[x] = f(x));
    }
  }
  
  f = memo(f);
  
  ans = 0;
  var p = 1;
  finish: for (;;) {
    for (var x = p; x < p * 10 / 6; x++) {
      var v = f(x);
      if (v != f(x * 2)) continue;
      if (v != f(x * 3)) continue;
      if (v != f(x * 4)) continue;
      if (v != f(x * 5)) continue;
      if (v != f(x * 6)) continue;
      ans = x;
      break finish;
    }
    p *= 10;
  }
  
  document.write('Cevap: ', ans);