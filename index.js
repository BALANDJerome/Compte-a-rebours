let totalSeconds = 0;
let minutes = "";
let seconds = "";
let timeoutId;
const ring = () => {
  const audio = new Audio();
  audio.src = "./Assets/ring.mp3";
  audio.play();
};
const display = () => {
  countdownDisplay.innerHTML = `<p>${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }</p>`;
};
const countdown = () =>
  (timeoutId = setTimeout(() => {
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
    display();
    if (totalSeconds > 0) {
      totalSeconds--;
      countdown();
    } else {
      countdownDisplay.innerHTML = `<p>Finish</p>`;
      ring();
      setTimeout(() => (countdownDisplay.innerHTML = ``), 2000);
    }
  }, 1000));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (totalSeconds === 0) {
    totalSeconds = choice.value * 60;
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
    countdown();
    totalSeconds--;
    display();
    reset.innerHTML = `<button type="submit">RESET</button>`;
  }
});
reset.addEventListener("click", () => {
  clearTimeout(timeoutId);
  totalSeconds = 0;
  countdownDisplay.innerHTML = ``;
  reset.innerHTML = ``;
});
