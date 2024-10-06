let count=0;

const increaseVal = document.getElementById("increase");
const decreaseVal = document.getElementById("decrease");
const resetVal =document.getElementById("reset");
const counterVal=document.getElementById("value");

function increaseValue (){
    count++;
    counterVal.innerHTML = count;
}

function decreaseValue (){
    count--;
    counterVal.innerHTML = count;
}

function resetValue (){
    count=0;
    counterVal.innerHTML = count;
}

increaseVal.addEventListener("click",increaseValue);
decreaseVal.addEventListener("click",decreaseValue);
resetVal.addEventListener("click",resetValue);
