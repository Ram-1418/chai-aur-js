const diceDisplay=document.getElementById("dice")
const rollbtn=document.getElementById('rollbtn')

  console.log(rollbtn);
rollbtn.addEventListener("click",function(){

  
    
    const diceNumber=Math.floor(Math.random()*6)+1;
    diceDisplay.textContent=`${diceNumber}`
})