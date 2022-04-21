var galleryData = [{
    desc: "",
    local: "assets/img/2022-04-20_22.07.05.png",
    highres: "https://v.foxes4life.net/img/hsmp-s3/END/2022-04-20_22.07.05.png"
},{
    desc: "",
    local: "assets/img/2022-04-20_22.04.44.png",
    highres: "https://v.foxes4life.net/img/hsmp-s3/END/2022-04-20_22.04.44.png"
},{
    desc: "",
    local: "assets/img/2022-04-20_21.59.27.png",
    highres: "https://v.foxes4life.net/img/hsmp-s3/END/2022-04-20_21.59.27.png"
}];

var curImg = -1;
var imgLink = "";

var descItem;
var imgItem;
var bgItem;

function init() {
    descItem = document.getElementById("desc");
    bgItem = document.getElementById("bg-box");
    imgItem = document.getElementById("image");

    switchImage(1);
}

function switchImage(by = 0) { 
    curImg += by;

    if (curImg > galleryData.length - 1)
        curImg = 0;
    
    if (curImg < 0)
        curImg = galleryData.length - 1;

    imgLink = galleryData[curImg].local;

    updateImages();
    updateDesc();
}

function updateImages() { 
    bgItem.style.backgroundImage = "url(" + imgLink + ")";
    imgItem.src = imgLink;
}

function updateDesc() {
    var desc = galleryData[curImg].desc;

    if (desc == "") {
        desc = "No description available.";
    }

    descItem.innerText = desc;
} 

function downloadImage() {
    window.open(galleryData[curImg].highres, '_blank').focus();;
}