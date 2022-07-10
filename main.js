noseX= 0;
noseY= 0;
leftwristX= 0;
rightwristX= 0;
difference= 0;

function setup() {
    canvas = createCanvas(900, 400);
    video = createCapture(VIDEO);
    canvas.position(600, 200);
    video.size(500, 600);
    video.position(80, 100);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose" , gotPoses);
}

function modelLoaded() {
    console.log("MODEL IS COMPLETELY LOADED!!!!!!!!!!!!!");
}

function gotPoses(results) {
if(results.length > 0) {
    console.log(results);
    leftwristX= results[0].pose.leftWrist.x;
    rightwristX= results[0].pose.rightWrist.x;
    difference= leftwristX - rightwristX; 
}

}

function draw() {
background("white");
text("AYAAN" ,280 ,200);
textSize(difference);
fill("Red");
}