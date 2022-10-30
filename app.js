function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stops the function running all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function playSoundClick() {
    const audio = new Audio(`sounds/${this.id}.wav`);
    const key = document.getElementById(this.id)
    if (!audio) return; //stops the function running all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSoundClick));

addEventListener('keydown', playSound);






