function preload(){
classifier =  ml5.imageClassifier('DoodleNet');
}

function setup(){
   canvas= createCanvas(500,400);
    canvas.center();
    background("white");

    canvas.mouseReleased(classifyCanvas)
    synth=window.speechSynthesis
}

function clearCanvas(){
    background("white");
}

function classifyCanvas(){
classifier.classify(canvas,gotResult);

}

function draw(){

    stroke('black');
    strokeWeight(10);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }

}

function gotResult(error,results){
if(error){
    console.error(error);
}


else{
    console.log(results);


    document.getElementById("obj_name").innerHTML="The object which you drew is "+results[0].label;
    document.getElementById("accuracy").innerHTML=Math.round(results[0].confidence*100)+"%";

   bruh=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(bruh);

}




}

