const hellos = document.getElementsByClassName('hello');

console.log(hellos);

//const omg = document.getElementsByTagName("omg");

//querySelector : class + 태그
//중복된다면, 첫번째 것만 가져옴!
const omg = document.querySelector(".omg h1");
console.log(omg);

const omg1 = document.querySelectorAll(".omg h1");
console.log(omg);

const omg2 = document.querySelector(".hello");
console.log(omg2);


const title = document.querySelector(".omg");

function handleTitleClick(){
    console.log("title was clicked!");
}



const title1 = document.querySelector("div");

function handleMouseEnter(){
    title.innerHTML = "Mouse is here !";
}



function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title1.addEventListener("mouseenter", handleMouseEnter);
title1.addEventListener("mouseleave", handleMouseLeave);