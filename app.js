const arr = [];
const props = {
    "main" : $(".slideArea"),
    "speed" : 3000
}
$(document).ready(function(){
    console.log('doc ready');
    makelistImages();
    outputImages();
    setInterval(moveSlides,props.speed);
})

$('.contBtns').on('click', '.prevBtn', function(){
    console.log('prev');
    prevSlide();
}) 
$('.contBtns').on('click', '.nextBtn', function(){
    console.log('next');
    nextSlide();
})

function nextSlide(){
    const cur = $(".active");
    cur.removeClass('active');
    const next = cur.next();
    const newCur = next.length ? next : cur.prevAll().last();
    console.log(newCur);
    newCur.addClass('active'); 
}

function prevSlide(){
    const cur = $(".active");
    cur.removeClass('active');
    const prev = cur.prev();
    const newCur = prev.length ? prev : cur.nextAll().last();
    console.log(newCur);
    newCur.addClass('active'); 
}

function moveSlides(){

}

function outputImages() {
    $.each(arr,function(index, value){
        console.log(value);
        let tempActive = index == 0 ? 'active': '';
        console.log(tempActive);
        let html = `<div class="slide ${tempActive}"><img src='${value}'><span>Caption ${index+1}</span></div>`;
        props.main.append(html);
    })
}

function makelistImages(){
    for(let x=0;x<5;x++){
        let temp = `https://via.placeholder.com/400x400/${ranColor()}/${ranColor()}?text=image${x+1}`;
        arr.push(temp);
    }
}

function ranColor() {
    const temp = Math.random();
    console.log(temp);
    const temp1 = temp.toString(16);
    console.log(temp1);
    const temp2 = temp1.substr(2,6);
    console.log(temp2);
    return temp2;
}