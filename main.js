function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classiefier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NbzhOiVe2/model.json',modelReady)
}
function modelReady() {
  classiefier.classify (gotresult) 
}
function gotresult(error,results){
    if (error) {
        console.log(error)
    } else {
      console.log(results)
      r=Math.floor(Math.random()*255)+1 
      g=Math.floor(Math.random()*255)+1 
      b=Math.floor(Math.random()*255)+1
      document.getElementById("soundname").innerHTML= results[0].label 
      document.getElementById("accuracy").innerHTML= results[0].confidence.toFixed(3)
      if (results[0].label=="Background Noise") {
        document.getElementById("alien1").src="aliens-01.gif" 
        document.getElementById("alien2").src="aliens-02.png"
        document.getElementById("alien3").src="aliens-03.png"
        document.getElementById("alien4").src="aliens-04.png"
      }
      if (results[0].label=="bell") {
        document.getElementById("alien1").src="aliens-01.png" 
        document.getElementById("alien2").src="aliens-02.gif"
        document.getElementById("alien3").src="aliens-03.png"
        document.getElementById("alien4").src="aliens-04.png"
      }
      if (results[0].label=="whistle") {
        document.getElementById("alien1").src="aliens-01.png" 
        document.getElementById("alien2").src="aliens-02.png"
        document.getElementById("alien3").src="aliens-03.gif"
        document.getElementById("alien4").src="aliens-04.png"
      }
      if (results[0].label=="clap") {
        document.getElementById("alien1").src="aliens-01.png" 
        document.getElementById("alien2").src="aliens-02.png"
        document.getElementById("alien3").src="aliens-03.png"
        document.getElementById("alien4").src="aliens-04.gif"
      }
    }

}