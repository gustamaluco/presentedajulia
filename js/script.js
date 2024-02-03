const button_height = 60;
const button_width = 150;

const max_width =  window.innerWidth - button_width;
const max_height = window.innerHeight - button_height;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('botaoprincipal');

    //button.addEventListener('click', () => alert("Não ligo, eu sei que você aceita"));

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (max_width+1)) + 'px';
        button.style.top = Math.floor(Math.random() * (max_height+1)) + 'px';
    });

    const buttonyes = document.getElementById('sim');

    buttonyes.addEventListener('click', () => {
        document.getElementById('invi').style.visibility = "visible";
        document.getElementById('visible').style.visibility = "hidden";
    })
});

function fix_height(){

    var texto = document.getElementsByClassName('texto');
    var papel = document.getElementsByClassName('papel');

    var altura_texto = texto.offsetHeight;

    papel.style.height = altura_texto + 'px';
}

window.onload = fix_height();