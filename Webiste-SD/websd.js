var Scrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (Scrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  Scrollpos = currentScrollPos;
};

function changeImageAndText1(){
  
  document.getElementById("projDescript").innerHTML="Java-Mini Music Player : This simulation of a music player displays graphics simultaneously with the sound of music. Makes use of conepts in AWT, Swing, Sound, EventListener, MidiEvent, sequencer, etc.";
  img = document.getElementById("projPic").src="proj1.png";
  img.style.transform = scale(1);

}

function changeImageAndText2(){
  
  document.getElementById("projDescript").innerHTML="Python-Vartalap : Along with the basic concepts of a concurrent server, I built a Message Server that uses a Queue for accepting Client messages and also uses Daemon Threads. It makes use of SEDA Arcitechture.";
  document.getElementById("projPic").src="proj2.png";

}

function changeImageAndText3(){
  
  document.getElementById("projDescript").innerHTML="MachineLearning-FoodDeliveryTimePrediction : Using machine learning concepts I developed a time prediction system along with GoogleAPI for better accuracy. It also contains a pickle model.";
  document.getElementById("projPic").src="proj3.png";

}