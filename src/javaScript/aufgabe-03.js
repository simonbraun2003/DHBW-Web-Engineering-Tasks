const button = document.getElementById('btn');
const label = document.querySelector('#lbl');
const bat_chkb  = document.querySelector('input[name=bat]');
const sup_chkb  = document.querySelector('input[name=sup]');
const aqu_chkb  = document.querySelector('input[name=aqu]');
let chkb_counter = 0;

const chkb_listener = function (pID){
    //alert();
    if(document.getElementById(pID).checked){
        chkb_counter += 1;
        //alert(`++`)
    }else{
        chkb_counter -=1;
        //alert('--')
    }
    label.innerText = 'Count: ' + chkb_counter;

    if(chkb_counter > 0){
        //alert('asds')
        button.disabled = false
    }else{
        button.disabled = true;
    }
}
const btn_listener = function (){
    alert('click')
}
button.addEventListener('click', btn_listener);

bat_chkb.addEventListener("change", chkb_listener );
sup_chkb.addEventListener("change", chkb_listener);
aqu_chkb.addEventListener("change", chkb_listener);