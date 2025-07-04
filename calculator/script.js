let display=document.getElementById("display")


function appendValue(value){
    console.log(display);
    display.value += value;

       
}

function clearDisplay(){
    display.value=""
}
function calculate(){
 
    
    try {
        display.value=eval(display.value)
    } catch  {
        display.value="Error"
    }
}