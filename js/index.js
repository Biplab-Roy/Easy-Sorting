var container = document.getElementById("con");
var slider = document.getElementById("slider");
var speeder = document.getElementById("speed");
var gra = document.getElementById("gra");
var sortb = document.getElementById("sort");
var qsortb = document.getElementById("qsort");
var msortb = document.getElementById("msort");
var hsortb = document.getElementById("hsort");
var bsortb = document.getElementById("bsort");
var isortb = document.getElementById("isort");
var ssortb = document.getElementById("ssort");
var rsortb = document.getElementById("rsort");

var len = slider.value;
var width = 20;
var arr = Array.from({length: 100}, () => (Math.floor(Math.random() * 680)) + 20);
console.log(arr);
var sortAlgo = 0;
var speed = 500 - 5*speeder.value;
/*
Quick 0
Merge 1
Heap 2
Bubble 3
Insertion 4
Selection 5
*/

function addBar(id,height) {
    var bar = document.createElement("div");
    console.log(typeof(bar))
    bar.style.height = height + "px"
    bar.style.width = width + "px"
    bar.className = "bar";
    bar.id = id;
    container.appendChild(bar);
}

function createGraph(len){
    container.innerHTML = "";    
    for(var i=0;i<len;i++){
        addBar(i,arr[i]);
    }
}

function generateRandomArray(){
    arr = Array.from({length: 100}, () => (Math.floor(Math.random() * 750)) + 20);
}

gra.addEventListener('click', function(){
    generateRandomArray();
    console.log(arr);
    createGraph(len);
},false);


qsortb.addEventListener('click', function(){
    sortAlgo = 0;
    var act = document.getElementsByClassName("active")[0];
    act.className = "";
    qsortb.className = "active";
},false);

msortb.addEventListener('click', function(){
    sortAlgo = 1;
    var act = document.getElementsByClassName("active")[0];
    act.className = "";
    msortb.className = "active";
    
},false);

hsortb.addEventListener('click', function(){
    sortAlgo = 2;
    var act = document.getElementsByClassName("active")[0];
    act.className = "";
    hsortb.className = "active";
    
},false);

bsortb.addEventListener('click', function(){
    sortAlgo = 3;
    var act = document.getElementsByClassName("active")[0];
    act.className = "";
    bsortb.className = "active";
    
},false);

isortb.addEventListener('click', function(){
    sortAlgo = 4;
    var act = document.getElementsByClassName("active")[0];
    act.className = "";
    isortb.className = "active";
    
},false);

ssortb.addEventListener('click', function(){
    sortAlgo = 5;
    var act = document.getElementsByClassName("active")[0];
    act.className = "";
    ssortb.className = "active";
    
},false);

rsortb.addEventListener('click', function(){
    sortAlgo = 6;
    var act = document.getElementsByClassName("active")[0];
    act.className = "";
    rsortb.className = "active";
    
},false);

slider.addEventListener('input',function(){
    len = slider.value;
    console.log(len);
    createGraph(len);
}, false);


speeder.addEventListener('input',function(){
    speed = 500 - 5*speeder.value;
}, false);

sortb.addEventListener('click', function(){
    sorter(arr,len,sortAlgo);
}, false);


createGraph(len);