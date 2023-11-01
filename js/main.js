const item = document.querySelector(".item");
const nav = document.querySelector(".nav");
function btnActive(){
    item.classList.toggle("item_active");
    nav.classList.toggle("nav_active");
}

const sec2_anim1 = document.querySelector(".section2>img:nth-child(1)");

const h = window.innerHeight + 20;


window.addEventListener("scroll",(ev)=>{
    if(sec2_anim1.y<h){
        sec2_anim1.classList.add("sec2_anim1")
    }
    if(sec2_anim1.y>=h){
        sec2_anim1.classList.remove("sec2_anim1")
    }
})

const sec2_anim2 = document.querySelector(".section2>img:nth-child(2)");
window.addEventListener("scroll",(ev)=>{
    if(sec2_anim2.y<h){
        sec2_anim2.classList.add("sec2_anim2")
    }
    if(sec2_anim2.y>=h){
        sec2_anim2.classList.remove("sec2_anim2")
    }
})

const sec2_anim3 = document.querySelector(".sec2_context");
window.addEventListener("scroll",(ev)=>{
    if(sec2_anim3.getBoundingClientRect().y<h){
        sec2_anim3.classList.add("sec2_anim3")
    }
    if(sec2_anim3.getBoundingClientRect().y>=h){
        sec2_anim3.classList.remove("sec2_anim3")
    }
    console.log(sec2_anim3.getBoundingClientRect().y);
})

const sec3_an1 = document.querySelector(".sec3_context");
window.addEventListener("scroll",(ev)=>{
    if(sec3_an1.getBoundingClientRect().y<h){
        sec3_an1.classList.add("sec3_an1")
    }
    if(sec3_an1.getBoundingClientRect().y>=h){
        sec3_an1.classList.remove("sec3_an1")
    }
    console.log(sec3_an1.getBoundingClientRect().y);
})

const sec3_an2 = document.querySelector(".section3>.page");
window.addEventListener("scroll",(ev)=>{
    if(sec3_an2.getBoundingClientRect().y<h){
        sec3_an2.classList.add("sec3_an2")
    }
    if(sec3_an2.getBoundingClientRect().y>=h){
        sec3_an2.classList.remove("sec3_an2")
    }
    console.log(sec3_an2.getBoundingClientRect().y);
})

const sec4_animate1 = document.querySelector(".section4>div:nth-child(1)");
window.addEventListener("scroll",(ev)=>{
    if(sec4_animate1.getBoundingClientRect().y<h){
        sec4_animate1.classList.add("sec4_animate1")
    }
    if(sec4_animate1.getBoundingClientRect().y>=h){
        sec4_animate1.classList.remove("sec4_animate1")
    }
    console.log(sec4_animate1.getBoundingClientRect().y);
})

const sec4_animate2 = document.querySelector(".section4>div:nth-child(2)");
window.addEventListener("scroll",(ev)=>{
    if(sec4_animate2.getBoundingClientRect().y<h){
        sec4_animate2.classList.add("sec4_animate2")
    }
    if(sec4_animate2.getBoundingClientRect().y>=h){
        sec4_animate2.classList.remove("sec4_animate2")
    }
    console.log(sec4_animate2.getBoundingClientRect().y);
})

const sec4_animate3 = document.querySelector(".section4>div:nth-child(3)");
window.addEventListener("scroll",(ev)=>{
    if(sec4_animate3.getBoundingClientRect().y<h){
        sec4_animate3.classList.add("sec4_animate3")
    }
    if(sec4_animate3.getBoundingClientRect().y>=h){
        sec4_animate3.classList.remove("sec4_animate3")
    }
    console.log(sec4_animate3.getBoundingClientRect().y);
})

const sec5_an1 = document.querySelector(".section5>div:nth-child(1)");
window.addEventListener("scroll",(ev)=>{
    if(sec5_an1.getBoundingClientRect().y<h){
        sec5_an1.classList.add("sec5_an1")
    }
    if(sec5_an1.getBoundingClientRect().y>=h){
        sec5_an1.classList.remove("sec5_an1")
    }
    console.log(sec5_an1.getBoundingClientRect().y);
})

const sec5_an2 = document.querySelector(".section5>div:nth-child(2)");
window.addEventListener("scroll",(ev)=>{
    if(sec5_an2.getBoundingClientRect().y<h){
        sec5_an2.classList.add("sec5_an2")
    }
    if(sec5_an2.getBoundingClientRect().y>=h){
        sec5_an2.classList.remove("sec5_an2")
    }
    console.log(sec5_an2.getBoundingClientRect().y);
})

const sec6_anim1 = document.querySelector(".section6>div:nth-child(1)");
window.addEventListener("scroll",(ev)=>{
    if(sec6_anim1.getBoundingClientRect().y<h){
        sec6_anim1.classList.add("sec6_anim1")
    }
    if(sec6_anim1.getBoundingClientRect().y>=h){
        sec6_anim1.classList.remove("sec6_anim1")
    }
    console.log(sec6_anim1.getBoundingClientRect().y);
})

const sec6_anim2 = document.querySelector(".section6>div:nth-child(2)");
window.addEventListener("scroll",(ev)=>{
    if(sec6_anim2.getBoundingClientRect().y<h){
        sec6_anim2.classList.add("sec6_anim2")
    }
    if(sec6_anim2.getBoundingClientRect().y>=h){
        sec6_anim2.classList.remove("sec6_anim2")
    }
    console.log(sec6_anim2.getBoundingClientRect().y);
})

const sec7_an1 = document.querySelector(".section7>.context");
window.addEventListener("scroll",(ev)=>{
    if(sec7_an1.getBoundingClientRect().y<h){
        sec7_an1.classList.add("sec7_an1")
    }
    if(sec7_an1.getBoundingClientRect().y>=h){
        sec7_an1.classList.remove("sec7_an1")
    }
    console.log(sec7_an1.getBoundingClientRect().y);
})

const sec7_an2 = document.querySelector(".section7>.reference");
window.addEventListener("scroll",(ev)=>{
    if(sec7_an2.getBoundingClientRect().y<h){
        sec7_an2.classList.add("sec7_an2")
    }
    if(sec7_an2.getBoundingClientRect().y>=h){
        sec7_an2.classList.remove("sec7_an2")
    }
    console.log(sec7_an2.getBoundingClientRect().y);
})

const sec8_an1 = document.querySelector(".section8>.context>h2");
window.addEventListener("scroll",(ev)=>{
    if(sec8_an1.getBoundingClientRect().y<h){
        sec8_an1.classList.add("sec8_an1")
    }
    if(sec8_an1.getBoundingClientRect().y>=h){
        sec8_an1.classList.remove("sec8_an1")
    }
    console.log(sec8_an1.getBoundingClientRect().y);
})

const sec8_an2 = document.querySelector(".section8>.context>p");
window.addEventListener("scroll",(ev)=>{
    if(sec8_an2.getBoundingClientRect().y<h){
        sec8_an2.classList.add("sec8_an2")
    }
    if(sec8_an2.getBoundingClientRect().y>=h){
        sec8_an2.classList.remove("sec8_an2")
    }
    console.log(sec8_an2.getBoundingClientRect().y);
})

const sec8_an3 = document.querySelector(".section8>.content");
window.addEventListener("scroll",(ev)=>{
    if(sec8_an3.getBoundingClientRect().y<h){
        sec8_an3.classList.add("sec8_an3")
    }
    if(sec8_an3.getBoundingClientRect().y>=h){
        sec8_an3.classList.remove("sec8_an3")
    }
    console.log(sec8_an3.getBoundingClientRect().y);

    const elems = document.querySelectorAll(".section8>.content>div>h3");
const content = document.querySelectorAll("div");
const Height = window.innerHeight;
let key1 = true;
let key2 = true;
let key3 = true;
    let start1 = 0; let start2 = 0; let start3 = 0; let start4 = 0;
        let time1 = setInterval(() => {
            start1 = start1 + 1
            elems[0].innerText = start1
            if(start1 === 17){
                clearInterval(time1)
            }
        },1000 / 17);
        key1 = false

let time2 = setInterval(() => {
    start2 = start2 + 1
    elems[1].innerText = start2 + "+"
    if(start2 === 12){
        clearInterval(time2)
    }
},1000 / 12);
let time3 = setInterval(() => {
    start3 = start3 + 2
    elems[2].innerText = start3
    if(start3 === 108){
        clearInterval(time3)
    }
},1000 / 108);
let time4 = setInterval(() => {
    start4 = start4 + 5
    elems[3].innerText = start4
    if(start4 === 150){
        clearInterval(time4)
    }
},1000 / 150)
})

const sec9_an1 = document.querySelector(".section9>div:nth-child(2)");
window.addEventListener("scroll",(ev)=>{
    if(sec9_an1.getBoundingClientRect().y<h){
        sec9_an1.classList.add("sec9_an1")
    }
    if(sec9_an1.getBoundingClientRect().y>=h){
        sec9_an1.classList.remove("sec9_an1")
    }
    console.log(sec9_an1.getBoundingClientRect().y);
})

const sec9_an2 = document.querySelector(".section9>div:nth-child(1)");
window.addEventListener("scroll",(ev)=>{
    if(sec9_an2.getBoundingClientRect().y<h){
        sec9_an2.classList.add("sec9_an2")
    }
    if(sec9_an2.getBoundingClientRect().y>=h){
        sec9_an2.classList.remove("sec9_an2")
    }
    console.log(sec9_an2.getBoundingClientRect().y);
})