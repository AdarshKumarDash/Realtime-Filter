nosex = "";
nosey = "";
clown_img = "";

function preload() {
    clown_img = loadImage("https://i.postimg.cc/VsS6L9Nk/clown-nose.png");
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    pose_net = ml5.poseNet(video, modelloaded);
    pose_net.on("pose", gotposes);
}

function modelloaded() {
    console.log("posenet is initialized");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX = " + nosex, "noseY = " + nosey);
    }
}

function draw() {
    image(video, 0, 0, 640, 480);
    /*fill("#f34");
    stroke("#333");
    circle(nosex, nosey, 50);*/
    image(clown_img, nosex - 20, nosey - 15, 40, 40);
}

function takesnapshot() {
    save("clownuser.png");
}