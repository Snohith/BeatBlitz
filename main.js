
let songIndex=0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let progressBar=document.getElementById("progressBar");
let beats=document.getElementById("beats");
let songName = document.getElementsByClassName("songName")[0];
let button=document.getElementById("homePage");
let songs=[
    {songName:"chikitu",filePath:"songs/1.mp3" ,coverPath:"1.webp"},
    {songName:"Monica",filePath:"songs/2.mp3" ,coverPath:"2.jpg"},
    {songName:"Powerhouse",filePath:"songs/3.mp3" ,coverPath:"3.webp"},
    {songName:"I am the Danger",filePath:"songs/4.mp3" ,coverPath:"4.webp"},
    {songName:"Mobsta",filePath:"songs/5.mp3" ,coverPath:"5.webp"},
    {songName:"Upendra's Entry",filePath:"songs/6.mp3" ,coverPath:"6.webp"}



]
button.addEventListener('click',()=>{
    window.location.href="index.html";
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        beats.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        beats.style.opacity=0;
        

    }
})


audioElement.addEventListener("timeupdate",()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value * audioElement.duration/100 ;
})



const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songPlay")).forEach(element => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");


    })



}
Array.from(document.getElementsByClassName("songPlay")).forEach(element => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `songs/${songIndex}.mp3`; 
        audioElement.currentTime=0;
        audioElement.play();
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            beats.style.opacity=1;
            
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
            beats.style.opacity=0;
            
    
        }
    });
    
});
let about=document.getElementById("about");
about.addEventListener('click',()=>{
    window.location.href="aboutus.html";
});

