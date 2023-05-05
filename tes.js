const content = document.getElementById("content");
const buttons = document.querySelectorAll(".btn")
const kurang = document.getElementById("kurang");
const tambah = document.getElementById("tambah");
const kali = document.getElementById("kali");
const bagi = document.getElementById("bagi");
const hasilButton = document.getElementById("hasil");
const reset = document.getElementById("reset");

let angkaPertama = '';
let angkaKedua = '';
let operator = '';
let hasil = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function(){
    const nilai = button.textContent;
    if (operator === '') {
        angkaPertama += parseInt(nilai);
        content.textContent = angkaPertama;
    } else {
        angkaKedua += parseInt(nilai);
        content.textContent = angkaKedua;
    }
  });
});

tambah.addEventListener('click', function(){
    operator = '+';
    content.textContent = operator;
});
kurang.addEventListener('click', function(){
    operator = '-';
    content.textContent = operator;
});
kali.addEventListener('click', function(){
    operator = '*';
    content.textContent = operator;
});
bagi.addEventListener('click', function(){
    operator = '/';
    content.textContent = operator;
});

hasilButton.addEventListener('click', function(){
    if (operator === '+') {
        hasil = parseInt(angkaPertama) + parseInt(angkaKedua)
        content.textContent = hasil;
    } else if (operator === '-') {
        hasil = parseInt(angkaPertama) - parseInt(angkaKedua)
        content.textContent = hasil;
    } else if (operator === '*') {
        hasil = parseInt(angkaPertama) * parseInt(angkaKedua)
        content.textContent = hasil; 
    } else if (operator === '/') {
        hasil = parseInt(angkaPertama) / parseInt(angkaKedua)
        content.textContent = hasil; 
    } else {
        content.textContent = "error";
    }
})

reset.addEventListener('click', function (){
    angkaPertama = '';
    angkaKedua = '';
    operator = '';
    hasil = '';
    content.textContent = 0;
})