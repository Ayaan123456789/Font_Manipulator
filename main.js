right_hand = 0;
left_hand = 0;
difference = 0; 


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPose);
}

function draw(){
    background('#969A97');
    textSize(difference);
    fill(255,0,0);
text('Ayaan', 50,400);


}


function modelLoaded(){
    console.log("Model had been loaded");

}

function gotPose(results) {
    if(results.length > 0){
        console.log(results);
        right_hand = results[0].pose.leftWrist.x;
        left_hand= results[0].pose.rightWrist.x;
        difference = Math.floor(right_hand - left_hand);
    }
        
}