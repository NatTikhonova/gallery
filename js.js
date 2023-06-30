window.onscroll = () => {
    window.scroll(0, 0);
};

let time;
let audio = document.querySelector('#audio');

document.addEventListener('DOMContentLoaded', () => {
    audio.volume = 0.3;
}, false);

function newFon(name) {
    clear();
    playAudio(name);
    let i = 0;
    newImg(name, i);
    i++;

    time = setInterval(function () {
        newImg(name, i);
        i < 9 ? i++ : i = 0;
    }, 7000);
}

function fonGallery() {
    clear();
    let fonGallery = document.querySelector('#imgFon');
    fonGallery.src = `img/0.jpg`;
    fonGallery.style.animationName = '';
    fonGallery.style.animationDuration = '';
}

function clear() {
    if (time != null) {
        clearInterval(time);
    }
}

function newImg(name, i) {
    let img = document.createElement('img');
    img.src = `img/${name}/${name}_${i}.jpg`;
    img.id = 'imgFon';
    img.style.animationName = 'showFon';
    img.style.animationDuration = '7s';
    document.querySelector('#imgFon').remove();
    document.querySelector('#fon').append(img);
}

function playAudio(name) {
    if (name === 'forest'){
        audio.src = 'audio/forest.mp3';
    } else if (name === 'mountains'){
        audio.src = 'audio/mountains.mp3';
    } else if (name === 'sea'){
        audio.src = 'audio/sea.mp3';
    } else if (name === 'space'){
        audio.src = 'audio/space.mp3';
    }
}

