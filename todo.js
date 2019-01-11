const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos'

function paintToDo(text) {
    const li = document.createElement("li") //, createElement로  li생성
    const delBtn = document.createElement("button")
    delBtn.innerHTML = "❌"
    const span = document.createElement("span")
    span.innerText = text
    li.appendChild(delBtn)
    li.appendChild(span) //li에  appendChild로 span, delBtn넣음
    toDoList.appendChild(li) //toDoList에 li 넣음
}

function handleSubmit(event) {
    event.preventDefault() //이벤트  초기화
    const currentValue = toDoInput.value //입력값의 value받아옴
    paintToDo(currentValue)
    toDoInput.value = "" // 입력되면 빈칸으로 바 꿔줌

}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS)
    if (toDos !== null) {

    }
}


function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmit)
}

init()