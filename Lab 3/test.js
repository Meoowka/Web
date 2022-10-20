let button_on = document.getElementById('on');
let button_off = document.getElementById('off');
let list = document.querySelectorAll('.iteams_katalog');
let default_color = window.getComputedStyle( document.body ,null).getPropertyValue('background-color');

const hex=[
    "0","1","2","3","4","5","6","7","8","9","A","B","C","D", "E", "F"
]



button_on.addEventListener('click', function(){
    let hexColor = generateHex();
    for(let i = 0; i<list.length; i++){
        if(i % 2!= 0){
            list[i].style.backgroundColor = hexColor;
            console.log(list[i]);
        }
    }    
})

button_off.addEventListener('click', function(){

    for(let i = 0; i<list.length; i++){
        if(i % 2!= 0){
            list[i].style.backgroundColor = default_color;
            console.log(list[i]);
        }
    }    
})

function generateHex(){
    let hexColor="#";
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNum()];
    }
    return hexColor;
}

function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}