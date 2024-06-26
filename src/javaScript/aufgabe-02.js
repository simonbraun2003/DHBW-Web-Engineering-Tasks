const listener = function (pID){
    document.getElementById(pID).focus()
}
const submitListener = function (){
    document.getElementById('pName').innerHTML ='Name: ' + document.getElementById('name').value;
    document.getElementById('pVorname').innerHTML ='Vorname: ' + document.getElementById('preName').value
    document.getElementById('pStraße').innerHTML ='Straße: ' + document.getElementById('street').value
    document.getElementById('pHausnummer').innerHTML ='Hausnummer: ' + document.getElementById('housenumber').value
    document.getElementById('pPLZ').innerHTML ='PLZ: ' + document.getElementById('plz').value
    document.getElementById('pOrt').innerHTML ='Ort: ' + document.getElementById('ort').value
}

//document.querySelectorAll('p').addEventListener('click', listener)
// document.querySelector().addEventListener('click', submitListener)
