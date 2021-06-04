const eredmenyek = document.getElementById('eredmenyek');
function berak(elem) {
    const p = document.createElement('p');
    p.innerText = elem.nev + ': ' + elem.szavazatok;
    eredmenyek.appendChild(p);
}

function oldalGenerálás(eredmeny){
    console.log(eredmeny);

    eredmeny.forEach(berak);
}


fetch('/eredmenyek')
    .then(function(válasz){
        válasz.json().then(oldalGenerálás);
    });
