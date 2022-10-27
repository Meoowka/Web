const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", (event)=>{
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior:"smooth",
            block: "start"
        })
    })
}

let list = document.querySelector('#Katalog')
let iteam = document.getElementsByClassName("iteams_katalog");
let select = document.getElementById("#sort");

select.addEventListener('change', () =>{
 console.log(iteam);
    if(select.value == "min"){
    let sorted = [...iteam].sort((a,b) =>{
        return a.children[2].innerHTML - b.children[2].innerHTML;
    });
    list.innerHTML='';
    for(let iteam of sorted){
        list.appendChild(iteam);
    }
    console.log(sorted);
} 
    if(select.value == "max"){
    let sorted = [...iteam].sort((a,b) =>{
        return - a.children[2].innerHTML - b.children[2].innerHTML;
    });
    list.innerHTML='';
    for(let iteam of sorted){
        list.appendChild(iteam);
    }
    console.log(sorted);
} 
    if(select.value == "default"){
        let sorted = [...iteam];
        list.innerHTML='';
        for(let iteam of sorted){
            list.appendChild(iteam);
        }
        console.log(sorted);
}
})

const button = document.getElementById("btn");
const button_none = document.getElementById("btn_none");
let iteams = document.querySelectorAll('.iteams_katalog');
let default_color = window.getComputedStyle( document.body ,null).getPropertyValue('background-color');
const hex=[
    "0","1","2","3","4","5","6","7","8","9","A","B","C","D", "E", "F"
]


button_none.addEventListener("click", () =>{
    for(let n=0; n < iteam.length; n++){
        if(n % 2 !=0){
        iteam[n].style.backgroundColor = default_color;
        }
    }
})

button.addEventListener("click", () => {
    let hexColor = generateHex();
    for(let n=0; n < iteam.length; n++){
        if(n % 2 !=0){
            console.log(iteam[n]);
            iteam[n].style.backgroundColor = hexColor;
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
