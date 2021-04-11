let artTime = window.setTimeout("refreshArt()", 0);

let numTime = window.setTimeout("refreshNum()", 0);

let colTime = window.setTimeout("refreshCol()", 0);

let vidTime = window.setTimeout("refreshVid()", 0)

let imgTime = window.setTimeout("refreshImg()", 0)

window.setInterval("setTimers()", 20000)
function setTimers() {
    numTime = window.setTimeout("refreshNum()", 0);
    artTime = window.setTimeout("refreshArt()", 0);
    colTime = window.setTimeout("refreshCol()", 0);
    vidTime = window.setTimeout("refreshVid()", 0);
    imgTime = window.setTimeout("refreshImg()", 0);
}

const articles = ["https://en.wikipedia.org/wiki/Python_%28programming_language%29",
    "https://en.wikipedia.org/wiki/FOSS",
    "https://en.wikipedia.org/wiki/Discord_(software)",
    "https://en.wikipedia.org/wiki/Linux",
    "https://en.wikipedia.org/wiki/Arch_Linux",
    "https://en.wikipedia.org/wiki/Unix",
    "https://en.wikipedia.org/wiki/Kernel_(operating_system)",
    "https://en.wikipedia.org/wiki/The_Boat_Races_2015",
    "https://en.wikipedia.org/wiki/Concertgebouw",
    "https://en.wikipedia.org/wiki/Wheat_Fields",
    "https://en.wikipedia.org/wiki/Netherlands",
    "https://en.wikipedia.org/wiki/Sociology",
    "https://en.wikipedia.org/wiki/Aten_(city)",
];

const videos = ["https://youtu.be/dQw4w9WgXcQ", // Rick Roll
    "https://youtu.be/l3eww1dnd0k", // Computer Man
    "https://youtu.be/tCO4i2t-Aso", // Ninja Tuna
    "https://youtu.be/A1UhABiAfVk", // VSauce OOC
    "https://youtu.be/ISVtB08pnGk", // LTT Sponsors
    "https://youtu.be/jxeeKKfjb5o", // The Hated One
    "https://youtu.be/XI7Cxdj2pAQ", // Webdriver Torso
    "https://youtu.be/5gYV2reIP-M", // Webdriver Torso
    "https://youtu.be/klqi_h9FElc", // Webdriver Torso
    "https://youtu.be/oX_zyVxZxPE", // Webdriver Torso
    "https://youtu.be/lXMskKTw3Bc", // Never Gonna Hit Those Notes
    "https://youtu.be/O0QDEXZhow4", // Webdriver Torso
    "https://youtu.be/EvLaiHp8MHk", // Cityrider 56: Go North East 6092 (NL63 YHV)
    "https://youtu.be/foAToGxIass", // Cityrider 56: Go North East 6088 (NL63 YHR)
    "https://youtu.be/fPhynD2yuBE", // Forklift Safety
    "https://youtu.be/3GsSMfLYIQg", // Line Handling Accident Prevention
    "https://youtu.be/5IsSpAOD6K8", // Days Go By
    "https://youtu.be/pLJ85XExZtQ", // & by Tally Hall
    "https://youtu.be/NHEaYbDWyQE", // Michael Primes
    "https://youtu.be/RhbQzUol0_Y", // I dont even know
    "https://youtu.be/jNQXAC9IVRw", // Me at the zoo
];

const images = ["https://i.imgur.com/bDO7Wlv.mp4", // Weird horse thing
    "https://i.imgur.com/ra54rFN.gif", // Smart fridge
    "https://i.imgur.com/S1H9LMT.jpg", // Dots
    "https://i.imgur.com/VA4cRnR.png", // World map nuggets
    "https://i.imgur.com/uDRde7W.jpeg", // Table
    "https://i.imgur.com/GHwbJ7X.jpg", // FOSS Hotel
    "https://i.imgur.com/VIsVJBF.jpg", // USA
    "https://i.imgur.com/6vSzDIz.jpg", // Gas car
];

function randomVideo(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}

function randomArticle(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}

function randomNum() {
    let num = Math.floor((Math.random() * 1000) + 1).toString();
    return num
}

function randomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++){
        const random = Math.random();
        const bit = (random * 16) | 0;
        color += (bit).toString(16);
    };
    return color;
}

function randomImg(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}

function refreshNum(){
    document.getElementById("number").innerHTML = randomNum()
}

function refreshArt() {
    let ranArt = randomArticle(articles);
    document.getElementById("article").innerHTML = ranArt.slice(11);
    document.getElementById("article").href = ranArt;
}

function refreshCol() {
    document.getElementById("color").innerHTML = randomColor().toUpperCase()
}

function refreshVid() {
    let ranVid = randomVideo(videos);
    document.getElementById("video").innerHTML = ranVid.slice(8);
    document.getElementById("video").href = ranVid;
}

function refreshImg() {
    let ranImg = randomImg(images);
    document.getElementById("picture").innerHTML = ranImg.slice(10);
    document.getElementById("picture").href = ranImg;
}