// let img = document.getElementById("image");
// img.src = 'sqi.png'
let see = document.getElementById("image"); 
let imgs = ['sqi.png','java-article-image.jpeg','background.png'];
let index = 0
see.src = imgs[index] 




function next() {
    if (index==imgs.length-1) {
        index = 0
    } else {
        index ++
    }
    see.src = imgs[index] 
}

function prev() {
    if (index==0) {
        index = imgs.length -1
    } else {
        index --
    }
    see.src = imgs[index] 
}