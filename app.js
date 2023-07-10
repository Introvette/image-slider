const arr = [];

$(document).ready(function(){
    console.log('doc ready');
    makelistImages();
    outputImages();
})

function outputImages() {
    $.each(arr,function(index, value){
        console.log(value);
        let tempActive = index == 1 ? 'active': '';
        console.log(tempActive);
        let html = `<img src='${value}'>`;
        $('.container').append(html);
    })
}

function makelistImages(){
    for(let x=0;x<5;x++){
        let temp = `https://via.placeholder.com/400x400/33ee33/22ff22?text=image${x}`;
        arr.push(temp);
    }
}

