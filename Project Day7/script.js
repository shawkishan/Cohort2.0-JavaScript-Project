let sound = {
  a: "./Song/1.mp3",
  b: "./Song/2.mp3",
  c: "./Song/3.mp3",
  d: "./Song/4.mp3",
  e: "./Song/5.mp3",
  f: "./Song/6.mp3",
  g: "./Song/7.mp3",
  h: "./Song/8.mp3",
  i: "./Song/9.mp3",
  j: "./Song/10.mp3",
  k: "./Song/11.mp3",
  l: "./Song/12.mp3",
  m: "./Song/13.mp3",
  n: "./Song/14.mp3",
  o: "./Song/15.mp3",
  p: "./Song/16.mp3",
  q: "./Song/17.mp3",
  r: "./Song/18.mp3",
  s: "./Song/19.mp3",
  t: "./Song/20.mp3",
  u: "./Song/21.mp3",
  v: "./Song/22.mp3",
  w: "./Song/24.mp3",
  x: "./Song/25.mp3",
};

var key = document.querySelectorAll(".btn-w");
var kky = document.querySelectorAll(".btn-b");

key.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var text = elem.innerHTML.toLowerCase();
    var audio = new Audio(sound[text]);
    audio.play();
  });
});

kky.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var text = elem.innerHTML.toLowerCase();
    var audio = new Audio(sound[text]);
    audio.play();
  });
});

document.addEventListener("keydown", function (eve) {
  var value = eve.key.toLowerCase();
  if (sound[value]) {
    let audio = new Audio(sound[value]);
    audio.play();
  }
});