const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//let으로 선언해서 업데이트가 가능하도록
let toDos = [];

const TODOS_KEY ="todos";


//toDos 배열을 localStorage에 저장하는 함수
function saveToDos(){

    //localStorage에 문자열로 저장함 (localStorage에 array로 저장이 안되기 때문!)
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));

}

//toDos 삭제 함수
function deleteToDo(event) {
  //1. 부모 li태그 가져옴
  const li = event.target.parentElement;

  //2. 기존 리스트는 localStorag에서 삭제됨
  li.remove();

  //3. filter function 통해 새로운 toDos 배열로 변환
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

  //4. 변한값을 다시 저장시킴(덮어씌움)
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; // text로 해줘야 object로 localStorage형식에 저장된 것들이 화면 상으로 나옴.
  const button = document.createElement("button");
  button.innerText = "🆗";

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
