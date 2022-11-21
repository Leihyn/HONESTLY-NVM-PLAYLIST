let previous = document.querySelector('#previous')
let play = document.querySelector('#play')
let next = document.querySelector('#next')
let title = document.querySelector('#title')
let recent_volume = document.querySelector('#volume')
let volume_show = document.querySelector('#volume_show')
let slider = document.querySelector('#duration_slider')
let show_duration = document.querySelector('#show_duration')
let track_image = document.querySelector('#track_image')
let auto_play = document.querySelector('#auto')
let present = document.querySelector('#present')
let total = document.querySelector('#total')
let artist = document.querySelector('#artist')


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

//create a audio Element
let track = document.createElement('audio')


//All songs list
let All_song = [
    {
        name: 'INTRO',
        path: 'songs/01-Drake-Intro-Honestly-Nevermind-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'FALLING BACK',
        path: 'songs/02-Drake-Falling-Back-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'TEXTS GO GREEN',
        path: 'songs/03-Drake-Texts-Go-Green-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'CURRENTS',
        path: 'songs/04-Drake-Currents-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'A KEEPER',
        path: 'songs/05-Drake-A-Keeper-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'CALLING MY NAME',
        path: 'songs/06-Drake-Calling-My-Name-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'STICKY',
        path: 'songs/07-Drake-Sticky-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'MASSIVE',
        path: 'songs/08-Drake-Massive-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'FLIGHT BOOKED',
        path: 'songs/09-Drake-Flight-s-Booked-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'OVERDRIVE',
        path: 'songs/10-Drake-Overdrive-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'DOWN HILL',
        path: 'songs/11-Drake-Down-Hill-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'TIE THAT BINDS',
        path: 'songs/12-Drake-Tie-That-Binds-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'LIABILITY',
        path: 'songs/13-Drake-Liability-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    },
    {
        name: 'JIMMY COOKS',
        path: 'songs/14-Drake-Jimmy-Cooks-ft-21-Savage-(HipHopKit.com).mp3',
        img: 'img/drakee.jpg',
        singer: 'experimental DRAKE'
    }
];

//All function


//function load the track
function load_track(index_no) {
    clearInterval(timer)
    reset_slider()
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load()


    total.innerHTML = All_song.length
    present.innerHTML = index_no + 1
    timer = setInterval(range_slider, 1000)
}
load_track(index_no)


//mute sound
function mute_sound() {
    track.volume = 0
    volume.value = 0
    volume_show.innerHTML = 0
}


//reset song slider
function reset_slider() {
    slider.value = 0
}


//checking the song is playing or not
function justplay() {
    if (playing_song == false) {
        playsong()
    } else {
        pausesong()
    }
}


//play song
function playsong() {
    track.play()
    playing_song = true
    play.innerHTML = '<i class="fa fa-pause">=</i>'
}


//pause song
function pausesong() {
    track.pause()
    playing_song = false
    play.innerHTML = '<i class="fa fa-play">PLY</i>'
}


//next song
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1
        load_track(index_no)
        playsong()
    } else {
        index_no = 0
        load_track(index_no)
        playsong()
    }
}


//previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1
        load_track(index_no)
        playsong()
    } else {
        index_no = All_song.length
        load.track(index_no)
        playsong()
    }
}


//change volume
function volume_change() {
    volume_show.innerHTML = recent_volume.value
    track.volume = recent_volume.value / 100
}


//change slider position
function change_duration() {
    slider_position = track.duration * (slider.value / 100)
    track.currentTime = slider_position
}


//autoplay function
function autoplay_switch() {
    if (autoplay == 1) {
        autoplay = 0
        auto_play.style.background = "purple"
    } else {
        autoplay = 1
        auto_play.style.background = "black"
    }
}


function range_slider() {
    let position = 0;

    //update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration)
        slider.value = position
    }

    //function will run when the song is over
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play">PLY</i>'
        if (autoplay == 1) {
            index_no += 1
            load_track(index_no)
            playsong()
        }
    }

}