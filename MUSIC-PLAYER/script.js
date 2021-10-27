const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// song titles 
const songs = ['hey', 'summer', 'ukulele'];

// keep track of the songs
let songIndex = 2;

// load the song details into DOM 
loadSong(songs[songIndex]);

// update the song details
function loadSong(song) {
    title.innerText = song;

    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpeg`;

}

//play and pause song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause()
}

//prev and next songs 

function prevSong() {
    songIndex--; // decreasing by one

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();

}

function nextSong() {
    songIndex++; // incrementing by one

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();

}

function updateProgress(event) {
    const { duration, currentTime } = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

functtion setProgress(event) {
    const width = this.clientWidth // this gives us the total width of the progress bar 
    const clickX = event.offSetX; // shows where we click
    const duration = audio.duration // taking from the audio API
    audioCurrentTime = (clickX / width) * duration;
}

//Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

// change songs 
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//Time song update on the audio 
audio.addEventListener('timeupdate', updateProgress);

// click on the progress bar
progressContainer.addEventListener('click', setProgress);

//event on the audio API - ended
audio.addEventListener('ended', nextSong)