

let id = localStorage.getItem('id');
id = parseInt(id);


const myHeader = document.getElementById('myHeader');
const nqImg = document.getElementById('nqImg');
const nomi = document.getElementById('nomi');
const muallif = document.getElementById('muallif');
const tili = document.getElementById('tili');
const hajmi = document.getElementById('hajmi');
const xattot = document.getElementById('xattot');
const qulyozma = document.getElementById('qulyozma');
const yozuvi = document.getElementById('yozuvi');
const muqovasi = document.getElementById('muqovasi');
const text = document.getElementById('text');


function renderNq(id) {

    myHeader.innerHTML = nq[id].Nomi;
    nqImg.src = nq[id].img;
    nomi.innerHTML = nq[id].Nomi;
    muallif.innerHTML = nq[id].Muallif;
    tili.innerHTML = nq[id].Tili;
    hajmi.innerHTML = nq[id].Hajmi;
    xattot.innerHTML = nq[id].Xattot;
    qulyozma.innerHTML = nq[id].Qulyozma;
    yozuvi.innerHTML = nq[id].Yozuvi;
    muqovasi.innerHTML = nq[id].Muqovasi;
    text.innerHTML = nq[id].text;

};
renderNq(id);
console.log(id)