yesBtn.addEventListener('click',function (){
    alert('Cómo que no 😤😭, muy mal mi amor, ahora pon aceptar');
    alert('JAJAJA caíste, sé que no olvidaste este día, verdad?🥺, pon aceptar si no lo olvidaste');
    alert('Ahora cuando pongas aceptar en este último mensaje, te llevará directamente a un drive, te diriges a proyecto pt2, no abras el documento "Carta" sólo descargalo y luego lo abres desde el mismo python, si lo abres desde el visual studio code, ya no funcionará la temática 🥺, así que has caso sip');
    window.location.href = 'https://drive.google.com/drive/folders/1YblBaASV-rw5FnES2vrX436_2dNepwfZ';
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function (){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('right',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});