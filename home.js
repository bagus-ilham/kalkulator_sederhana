const content = document.getElementById("content");
const buttons = document.querySelectorAll(".btn");
const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const kali = document.getElementById("kali");
const bagi = document.getElementById("bagi");
const buttonHasil = document.getElementById("hasil");
const reset = document.getElementById("reset");

let angkaPertama = "";
let angkaKedua = "";
let hasil = "";
let operasi = "";

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        const nilai = button.innerHTML;
        if(operasi === '') {
            angkaPertama += parseFloat(nilai)
            content.innerHTML = angkaPertama;
        } else {
            angkaKedua += parseFloat(nilai)
            content.innerHTML = angkaKedua;
        }
    });
});

tambah.addEventListener('click', function(){
    operasi = '+'
    content.innerHTML = operasi;
})
kurang.addEventListener('click', function(){
    operasi = '-'
    content.innerHTML = operasi;
})
kali.addEventListener('click', function(){
    operasi = '*'
    content.innerHTML = operasi;
})
bagi.addEventListener('click', function(){
    operasi = '/'
    content.innerHTML = operasi;
})

buttonHasil.addEventListener('click', function(){
    if(operasi === "+"){
        hasil = parseFloat(angkaPertama) + parseFloat(angkaKedua)
        content.innerHTML = hasil;
    } else if(operasi === "-"){
        hasil = parseFloat(angkaPertama) - parseFloat(angkaKedua)
        content.innerHTML = hasil;
    } else if(operasi === "*"){
        hasil = parseFloat(angkaPertama) * parseFloat(angkaKedua)
        content.innerHTML = hasil;
    }else if(operasi === "/"){
        hasil = parseFloat(angkaPertama) / parseFloat(angkaKedua)
        content.innerHTML = hasil;
    }else{
        content.innerHTML = "ga tau berapa"
    }
})

reset.addEventListener('click', function(){
    angkaPertama = "";
    angkaKedua = "";
    hasil = "";
    operasi = "";
    content.innerText = "0"
})



