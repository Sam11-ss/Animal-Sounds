dog=0;
cat=0;
cow=0;
bird=0;
        function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wC1e7E0K7/model.json", modelReady);
}
function modelReady(){
    console.log("Model has loaded.");
    classifier.classify(gotResults);
    }
    function gotResults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            random_number_r = Math.floor(Math.random()*255)+1;
            random_number_b = Math.floor(Math.random()*255)+1;
            random_number_g = Math.floor(Math.random()*255)+1;
            document.getElementById("result_label").innerHTML="I can hear - " + results[0].label;
        document.getElementById("result_label").style.color=
        "rgb("+random_number_r+","+random_number_b+","+random_number_g+")"

        animal_image=document.getElementById("image");

if(results[0].label=="Barking"){
animal_image.src="dog.jpg";
dog=dog+1; 
}
else if(results[0].label=="Mooing"){
animal_image.src="cow.jpg";
cow=cow+1;
}
else if(results[0].label=="Meowing"){
animal_image.src="cat.jpg";
cat=cat+1;
}
else if(results[0].label=="Chirping"){
animal_image.src="bird.jpg";
bird= bird+1;
}
else{
animal_image.src="th-removebg-preview (3).png";
}
document.getElementById("dog").innerHTML="Dog - " +dog;
document.getElementById("cat").innerHTML="Cat - " +cat;
document.getElementById("bird").innerHTML="Bird - " +bird;
document.getElementById("cow").innerHTML="Cow - " +cow;                      
            
         } 
        }