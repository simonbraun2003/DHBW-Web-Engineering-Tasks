const startButton = document.querySelector('#start');
const countText = document.querySelector("#superheldencount");
let superheldenCount = 0;


function toggleSuperheld(checkbox){
    if(checkbox.checked){
        superheldenCount += 1;
    }else{
        superheldenCount -= 1;
    }
    countText.innerText = superheldenCount;
    checkSuperheldencount();
}

function checkSuperheldencount(){
    if(superheldenCount === 0){
        startButton.disabled = true;
    }else{
        startButton.disabled = false;
    }
}

function startAbenteuer(){
    alert('Dein Abenteuer beginnt');
}