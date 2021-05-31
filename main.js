Webcam.set({
    width: 350,
    heigth: 300,
    image_format: 'png',
    png_quality: 90

});

var camera = document.getElementById("camara");
Webcam.attach(camera);

function takephoto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';

    });


}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_aw87mEjL/model.json', modelLoaded);

function modelLoaded() {

    console.log("modelLoaded");

}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresult);
}

function gotresult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(4);

    }

}