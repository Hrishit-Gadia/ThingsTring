function preload() { }
function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/X6UDj935P/model.json", FunctionZ);
}

function FunctionZ() {
    console.log("Working");
}
function draw() {
    image(Video, 0, 0, 300, 300);
    classifier.classify(Video, Xyz);
}

function Xyz(error, Result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(Result);
        document.getElementById("ObjAnswer").innerHTML = Result[0].label;
        document.getElementById("AccAnswer").innerHTML = Result[0].confidence.toFixed(3);
    }
}