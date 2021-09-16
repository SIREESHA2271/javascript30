var drums = document.querySelectorAll('.drum');
const soundhandler = (event)=> {
var x = event.target.innerHTML;

makesound(x);

  
}

const playmusic = (path) =>{
const audio = new Audio(path);
audio.play();
}

document.addEventListener('keypress', (event) =>{
    const btn = event.key;
    makesound(btn);
})

const makesound = (key) =>{
    switch(key){
        case "w":
            playmusic('sounds_sound-1.mp3');
            break;
        case "a":
            playmusic('sounds_sound-2.mp3');
            break;
        case "s":
            playmusic('sounds_sound-3.mp3');
            break;
        case "d":
            playmusic('sounds_sound-4.mp3');
            break;
        case "j":
            playmusic('sounds_sound-5.mp3');
            break;
        case "k":
            playmusic('sounds_sound-6.mp3');
            break;
         case "l":
            playmusic('sounds_sound-7.mp3');
            break;
        default: console.log("please enter a valid key!");
    }
}

for( let i = 0; i<drums.length; i++){
    drums[i].addEventListener('click', soundhandler);
}



