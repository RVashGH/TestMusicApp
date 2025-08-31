const player = document.getElementById('player');
const playButton = document.querySelectorAll('.play');
const stateBtn = document.getElementById('state-btn');
const volumeSlider = document.getElementById('volume');
const prevTrackBtn = document.getElementById('prev-btn');
const nextTrackBtn = document.getElementById('next-btn');

let state = "pause";
let playingTrack = 1;

playButton.forEach(button => {
    button.addEventListener('click', function() {
        switch (this.id) {
            case "play-01":
                player.src = "audio/01.flac";
                playingTrack = 1;
                break;
            case "play-02":
                player.src = "audio/02.flac";
                playingTrack = 2;
                break;
            case "play-03":
                player.src = "audio/03.flac";
                playingTrack = 3;
                break;
            case "play-04":
                player.src = "audio/04.flac";
                playingTrack = 4;
                break;
            default:
                return;
        }

        player.currentTime = 0;
        player.play();
        state = "play";
        stateBtn.innerText = "⏸️";
        // console.log(playingTrack);
    });
});

stateBtn.addEventListener('click', function() {
    if (state == "play") {
        player.pause();
        state = "pause";
        stateBtn.innerText = "▶️";
    } else if (state == "pause") {
        player.play();
        state = "play";
        stateBtn.innerText = "⏸️";
        // if (playingTrack == "") {
        //     console.log("sdfs")
        //     player.src = "audio/01.flac";
        //     playingTrack = "1";
        //     player.currentTime = 0;
        //     player.play();
        //     state = "play";
        //     stateBtn.innerText = "⏸️";
        // }
    }

    
});

volumeSlider.addEventListener('input', () => {
    player.volume = volumeSlider.value;
});

prevTrackBtn.addEventListener('click', function() {
    if(player.currentTime <= 4) {
        if(playingTrack == "1") {
            player.currentTime = 0;
        } else {
            playingTrack = playingTrack - 1;
            player.src = `audio/0${playingTrack}.flac`;
            player.currentTime = 0;
            player.play();
            state = "play";
            stateBtn.innerText = "⏸️";
        }
        
    } else {
        player.currentTime = 0;
    }
})

nextTrackBtn.addEventListener('click', function() {
    if(playingTrack = 4) {
        playingTrack = 1;
        player.src = `audio/01.flac`;
        player.currentTime = 0;
        player.play();
        state = "play";
        stateBtn.innerText = "⏸️";
    } else {
        playingTrack = playingTrack + 1;
        player.src = `audio/0${playingTrack}.flac`;
        player.currentTime = 0;
        player.play();
        state = "play";
        stateBtn.innerText = "⏸️";
    }
    
})