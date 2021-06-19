let i = 1
var myVar1 = setInterval(playMusic(), 1000000000);
var myVar2 = setInterval(pageChange(), 4000);

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