const btnSons = document.querySelectorAll('.tecla');

const tocarSom = som => {
    const playSom = document.querySelector(`#som_tecla_${som}`.toLowerCase());
    console.log(playSom.getAttribute('src'));
    playSom.play();
}

btnSons.forEach(teclaSom => {
    teclaSom.onclick = () => {
        tocarSom(teclaSom.innerText)
    }
    teclaSom.onkeydown = (key) => {
        let keyCode = key.keyCode;
        let keyName = key.code;
        if(keyCode === 13 || keyCode === 32){
            teclaSom.classList.add('ativa');
        }
    }

    teclaSom.onkeyup = (key) => {
        teclaSom.classList.remove('ativa');
    }
});