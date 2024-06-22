let isRunning = false;
let elapseTime = 0;
let startTime = 0;
let timer;

const startButton = document.getElementById('startButton');
startButton.addEventListener('click',() =>{
  start();
});
function start(){
  if(!isRunning){
    startTime = Date.now() - elapseTime;
    console.log(startTime);

    isRunning = true;

    timer = setInterval(update, 10);

  }
}

function update(){
  const clockParagraph = document.getElementById('clockParagraph');

  let currentTime = Date.now();
  elapseTime = currentTime - startTime;

  let hours = Math.floor(elapseTime / (1000 * 60 * 60)).toString().padStart(2, 0);
  let minutes = Math.floor(elapseTime / (1000 * 60) % 60).toString().padStart(2, 0);
  let seconds = Math.floor(elapseTime / 1000 % 60).toString().padStart(2, 0);
  let milliseconds = Math.floor(elapseTime % 1000).toString().padStart(2, 0);

  clockParagraph.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;


}

const stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click',() =>{
  stop();
});
function stop(){
  if(isRunning){
    clearInterval(timer);
    elapseTime = Date.now() - startTime;

    isRunning = false;
  }
 
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click',() =>{
  reset();
});
function reset(){
  clearInterval(timer);
  elapseTime = 0;
  startTime = 0;
  clockParagraph.textContent = `00:00:00:00`;
}