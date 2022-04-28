
function playRandomSong() {
    let song = musicTracks[Math.floor(Math.random() * musicTracks.length)]
    playSFX(song.link, () => { playRandomSong() })
}
//playSFX(song, () => { playRandomSong() })


