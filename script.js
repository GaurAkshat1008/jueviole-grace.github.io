let i = 1
var myVar1 = setInterval(playMusic(), 10000);
function playMusic(){
    mySound = new sound(song.mp3);
    mySound.play();
}
function pageChange(){
    const page = document.getElementById('page' + i);
    i++;
    document.getElementById('page' + i).style.display = "flex";
    page.style.display = "none";
}