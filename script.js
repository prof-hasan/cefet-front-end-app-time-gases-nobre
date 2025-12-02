const boneco = document.querySelector('.boneco');
const tubo = document.querySelector('.tubo');

const jump = () => {
    boneco.classList.add('jump');

    setTimeout(() => {
      boneco.classList.remove('jump');
    }, 500);

}
//minuto 23:10
const loop = setInterval(() => {
    const tuboPosition = tubo.offsetLeft;
    const bonecoPosition = +window.getComputedStyle(boneco).bottom.replace('')

    console.log(bonecoPosition);
   
    if (tuboPosition <= 120) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;
    }
}, 10);

document.addEventListener('keydown', jump);