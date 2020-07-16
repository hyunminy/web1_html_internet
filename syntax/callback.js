var a = function () {
  console.log("A강아지를 찾습니다.");
};

var b = function () {
  console.log("B강아지를 찾습니다");
};

// 쉬운 방법
function slowfunc(callback) {
  callback();
}
// 어려운 방법
function hardShowfunc(text) {
  if (text == "a") {
    a();
  } else if (text == "b") {
    B();
  } else {
    console.log("에러");
  }
}
hardShowfunc("a");

slowfunc(a);
// 직접작성
slowfunc(() => {
  console.log("강아지");
});
