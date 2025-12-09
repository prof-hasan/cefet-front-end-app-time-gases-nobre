const boneco = document.querySelector('.boneco');
const tubo = document.querySelector('.tubo');

// Função de pulo
const jump = () => {
    boneco.classList.add('jump');

    setTimeout(() => {
        boneco.classList.remove('jump');
    }, 500);
};

// Loop do jogo (detecção de colisão)
const loop = setInterval(() => {
    const tuboPosition = tubo.offsetLeft;
    const bonecoPosition = parseFloat(
        window.getComputedStyle(boneco).bottom
    );

    const bateu = tuboPosition < 120 && tuboPosition > 0 && bonecoPosition < 80;

    if (bateu) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        boneco.src = 'batendo.png';
        boneco.style.width = '150px';
        boneco.style.marginLeft = '20px';
        boneco.style.bottom = '0';

        document.getElementById('game-over').style.display = 'block';

        clearInterval(loop);
    }
}, 10);

// Evento para pular
document.addEventListener('keydown', jump);
