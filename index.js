let totalSeconds = ""
let minutes = ""
let seconds = ""
const ring = () => {
  const audio = new Audio
  audio.src = "./Assets/ring.mp3"
  audio.play()
}
const display = () => {
  countdownDisplay.innerHTML = `<p>${minutes}:${(seconds < 10 ? "0" + seconds : seconds)}</p>`
}
const countdown = () => setTimeout(() => {
  minutes = Math.floor(totalSeconds / 60);
  seconds = totalSeconds % 60
  display()
  if (totalSeconds > 0) {
    totalSeconds--
    console.log(seconds);
    countdown()
  } else {
    countdownDisplay.innerHTML = `<p>Finish</p>`
    ring()
    setTimeout(() => countdownDisplay.innerHTML = ``, 2000)
  }
}, 1000)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  totalSeconds = choice.value * 60
  minutes = Math.floor(totalSeconds / 60);
  seconds = totalSeconds % 60
  countdown()
  totalSeconds--
  display()
})

