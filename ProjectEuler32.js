function f(s) {
    var p = 0;
    while (s != '') {
      p = p | 1 << Number(s.slice(0, 1));
      s = s.slice(1);
    }
    return p == 0x3fe;
  }
  
  q = {};
  
  for (a = 2; a <= 9; a++) {
    for (b = 1234; b <= 9876; b++) {
      c = a * b;
      if (c > 9876) break;
      if (f(String(a) + String(b) + String(c))) {
        q[c]++;
      }
    }
  }
  
  for (a = 12; a <= 98; a++) {
    for (b = 123; b <= 987; b++) {
      c = a * b;
      if (c > 9876) break;
      if (f(String(a) + String(b) + String(c))) {
        q[c]++;
      }
    }
  }
  
  ans = 0;
  for (k in q) {
    ans = ans + Number(k);
  }
  
  document.write('Cevap: ', ans);