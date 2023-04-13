let random = Math.floor(Math.random() * 101);
let cost = 50;
console.log(random);
function win(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Lottery() {
  return new Promise(function (resolve, reject) {
    if (random >= 50) {
      setTimeout(
        () => resolve("Вы выиграли приз в размере " + win(50, 150) + "$!"),
        3000
      );
    } else {
      setTimeout(() => reject("Вы проиграли свои " + cost + "$!"), 3000);
    }
  });
}
console.log("Рассчитываем...");
Lottery().then(
  (result) => console.log(result),
  (error) => console.log(error)
);
