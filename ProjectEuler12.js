n = 1, ans = n;

for (;;) {
  t = ans;
  u = 1;
  k = 0;
  while (t % 2 == 0) {
    t = t / 2;
    k = k + 1;
  }
  u = u * (k + 1);
  k = 0;
  while (t % 3 == 0) {
    t = t / 3;
    k = k + 1;
  }
  u = u * (k + 1);
  i = 5;
  for (;;) {
    if (t == 1) break;
    if (t < i * i) {
      u = u * 2;
      break;
    }
    k = 0;
    while (t % i == 0) {
      t = t / i;
      k = k + 1;
    }
    u = u * (k + 1);
    i += 2;
    if (t == 1) break;
    if (t < i * i) {
      u = u * 2;
      break;
    }
    k = 0;
    while (t % i == 0) {
      t = t / i;
      k = k + 1;
    }
    u = u * (k + 1);
    i += 4;
  }
  if (u > 500) break;
  n += 1, ans += n; 
}

document.write('Cevap: ', ans);