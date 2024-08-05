document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("background-music");
    var sources = music.getElementsByTagName("source");
    var currentIndex = 0;

    function playMusic() {
        music.src = sources[currentIndex].src;
        music.play();
    }

    music.addEventListener("ended", function() {
        currentIndex = (currentIndex + 1) % sources.length;
        playMusic();
    });

    playMusic();
});
