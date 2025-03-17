const clock = document.querySelector("h2#clock");

function getClock(){

    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;

}

getClock();

//5초마다 실행됨
setInterval(getClock, 1000);

//2초 기다렸다가 한번만 실행됨
//setTimeout(sayHello, 2000);

/*
1. setInterval(sayHello, 5000); 는 매초, 매분마다 반복되는 일을 해야할때
실행하는 함수임. 첫번째 인수에는 함수이름을 적도 두번째인수는 시간을 적어야함.
1초는 1000임

2. setTimeout(sayHello,1000);는 함수를 바로 실행하고 싶지않을때
사용하는 함수임 예시와같은 setTimeout은 1초 뒤에 sayHello를 실행시킨다는 의미임.

*1. != 2. 비슷하게 생겼지만 전혀다름.

3. getHourse().padStart(2,"0") 는 getHourse로 시간을 받아오고
1시일 경우 01이 아닌 1로 나타난다 그래서 01로 나오게 하기위해 사용하는 함수임.
padStart(2,"0") 2는 두글자가 되지않으면 0을 앞에 추가한다 라는 의미임.
뒤에 추가하고싶으면 padEnd를 사용하면됨.

*/