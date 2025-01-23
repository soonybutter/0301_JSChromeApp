console.log("안녕하세요"); 

console.log(2+2);

console.log("안녕"+"~~~~"); 

//-------------------------------
//1. let, const , var

//변수만들때 let, const, var차이
//const 재선언 금지, 재할당 금지
//let 재선언 금지, 재할당 가능
//var 재선언 가능, 재할당 가능

//const를 주로 사용하고, 가끔 let을 사용할 것. var은 사용하지 않을 것.(위험성 ㅇ)

let a = 5;
const b = 10;
const myName = "dy";


console.log(myName);

console.log(a*b);

a = 30; //let으로 a를 선언했으므로 재할당 가능! (!= const)

console.log(a*b);

//-------------------------------
//2. undefined, null

//undefined = 변수는 선언했지만, 값을 할당하지는 않음.

//null = 변수에 null(값이 없다)이 할당된다 즉, null이 정의됨. 
// -> 자연적으로 형성되지않음. 비어있다고 의도적으로 표현하는 것.

const amIFat = null;
let something;

console.log(something, amIFat); //undefined null


//-------------------------------
//3. Arrays

const mon ="mon";
const tue ="tue";
const wed ="wed";

const daysOfWeek =[mon, tue, wed];

console.log(daysOfWeek);  //(3) ['mon', 'tue', 'wed']

const weeks =["mon", "tue","wed","thu","fri","sat","sun"];

console.log(weeks); //(7) ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
console.log(weeks[3]); //thu

//배열에 집어넣기
daysOfWeek.push("Thu");
console.log(daysOfWeek); //(4) ['mon', 'tue', 'wed', 'Thu']

//-------------------------------
//4. Objects
//설명이 필요하지 않은 데이터 리스트들은 array로,
//설명이 필요한 정보가 담긴 데이터 리스트들은 object로!


const playerName ="Sally";
const playerPoints =121212;
const playerHandsome = false;
const playerFat = "little bit";


const player ={
    name:"Sally",
    points : 10,
    fat : true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

//업데이트 가능
player.fat = false;

console.log(player.fat);

player.points += 15;
console.log(player.points);

//-------------------------------