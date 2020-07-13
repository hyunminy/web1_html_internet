//숫자를 적어 놓기만해도 터미널에서는 숫자가 추가됨
var number = [1, 20, 100, 43, 7, 1];
var i = 0;
while (i < number.length) {
  console.log(number[i]);
  i = i + 1;
}

//배열에 있는 숫자들을 더함
var number = [1, 20, 100, 43, 7, 1];
var i = 0;
var total = 0;
while (i < number.length) {
  total = total + number[i];
  i = i + 1;
}
console.log(`total : ${total}`);
