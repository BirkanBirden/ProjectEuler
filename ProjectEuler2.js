a = 1;
b = 2;
ans = 0;
while (b < 4000000) {
  ans += b;
  c = a + b;
  a = b, b = c;
  c = a + b;
  a = b, b = c;
  c = a + b;
  a = b, b = c;
}
document.write('Cevap: ', ans);