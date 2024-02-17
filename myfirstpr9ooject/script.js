let progress = document.getElementById("progress");
let song = document.getElementById("song");
let play = document.getElementById("play");

song.onloadedmetadata = function () {
  //         What it is:

  // It's an event that fires when the browser has finished loading the metadata (information about the file) of a media element like an audio or video.
  // It's essential for tasks that depend on this metadata, such as displaying song titles, setting up progress bars, or adjusting video dimensions.
  // Simple examples:

  // Audio Player:

  // When you load a song in an audio player, you need to know its duration to display a progress bar and set its maximum value correctly.
  // Using onloadmetadata, you can wait for the duration to be available before initializing the progress bar, ensuring it's accurate.
  progress.max = song.duration;
  progress.value = song.currentTime;

  //   progress.max = song.duration:
  // Accesses the progress element (the progress bar) and sets its maximum value to the duration of the audio file in seconds. This ensures the progress bar's length accurately represents the total length of the song.
  // progress.value = song.currentTime:
  // Sets the initial value of the progress bar to the current playback time of the audio. This usually starts at 0, indicating the beginning of the song.
};
// function for play pause
function playpause() {
  // if(play)check krenege ki jo  burtton hai wo pause hai ya play classlist me
  if (play.classList.contains("fa-pause")) {
    //if ye button clas list me pause contain krta hia mtlb pause hai ye ye fa-pause site pe hai functioawesome wali password hai Rajat109283
    // if yes then it should pause the song
    song.pause();
    play.classList.remove("fa-pause"); //sbse pehle ye fa-pause nam ki class nname ko remove krega mtln pause se play krega aur ad d krega play class name play krega
    // when song is paused we will add play icon
    play.classList.add("fa-play");
  } else {
    song.play();
    play.classList.remove("fa-play"); //if pkay hai to pause kr aksta hai if pause hai to play kr skta hhai
    play.classList.add("fa-pause");
  }
}
// now if we want to go same liek prograss bar if song pklay hora hai to progress baar har 500 milisecond me age bdhega 
if(song.play()){
    // mtlb song play hora hai to
    setInterval(()=>{
        progress.value = song.currentTime;

    },500)
}

// ab jab bhi progress bar me changeayega tbhi song play ho jyega 
progress.onchange=function(){
    song.play();
    // and it should also update the current time \
    song.currentTime=progress.value;
    // also update the icon
    play.classList.remove("fa-play"); //if pkay hai to pause kr aksta hai if pause hai to play kr skta hhai
    play.classList.add("fa-pause");
 }
   
// to remove this just remove controls 
