const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//let으로 선언해서 업데이트가 가능하도록
let toDos = [];

const TODOS_KEY ="todos";


//toDos 배열을 localStorage에 저장하는 함수
function saveToDos(){

    //문자열로 저장함 (localStorage에 array로 저장이 안되기 때문!)
    localStorage.setItem("todos",JSON.stringify(toDos));

}


function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo.text; // text로 해줘야 object로 localStorage형식에 저장된 것들이 화면 상으로 나옴.
  const button = document.createElement("button");
  button.innerText = "❌";

  //클릭 시 삭제
  button.addEventListener("click", deleteToDo); 
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  //toDos 배열에 저장 objec형식으로 저장된 값을 저장
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  
  //saveToDos()호출
  saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item){

    console.log("This is the turn of "+ item);

}
*/

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){

    //string을 다시 array로 꺼내기 위해 parse
    const parsedToDos = JSON.parse(savedToDos);
    
    //item 개수대로 아래 함수를 호출
    //forEach() : 받아온 array를 for문 없이 item 하나씩 function에 넣어줌!
    parsedToDos.forEach((item) => console.log("This is the turn of "+ item ));
    //parsedToDos.forEach(sayHello);

    
    toDos = parsedToDos;

    //이전에 저장해뒀던 배열을 불러와 출력함.
    parsedToDos.forEach(paintToDo);
}

function sexyFilter(){


}

[1,2,3,4].filter(sexyFilter)