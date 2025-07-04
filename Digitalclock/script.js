function updateClock(){
    const now=new Date();
        let hours=now.getHours();
        let mins=now.getMinutes()
        let secs=now.getSeconds()

    hours =hours<10 ?"0" +hours : hours
     mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;


  const currentTime=`${hours}:${mins}:${secs}`;
  document.getElementById("clock").textContent=currentTime;

}

const intervalId=setInterval(updateClock,1000)

const stop=document.getElementById("stop")
const start=document.getElementById("start")

stop.addEventListener("click",function(){
  clearInterval(intervalId)
  alert("hi")
})
start.addEventListener("click",()=>{
    setInterval(updateClock,1000)
})