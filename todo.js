const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos'
let toDos = [] //할일 목록.. 할일 생성후 할일 목록으로 추가


function deleteToDo(event) {
    const btn = event.target
    const li = btn.parentNode
    toDoList.removeChild(li) // list에서 없엠..
    const cleanToDos = toDos.filter(function(toDo) {
            return toDo.id !== parseInt(li.id)
        }) // 삭제 선택 외 것들만남김..
    console.log(cleanToDos)
    toDos = cleanToDos
    saveToDos()
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}


function paintToDo(text) {
    const li = document.createElement("li") //, createElement로  li생성
    const delBtn = document.createElement("button")
    const span = document.createElement("span")
    const newId = toDos.length + 1

    delBtn.innerHTML = "❌"
    delBtn.addEventListener("click", deleteToDo)

    span.innerText = text
    li.appendChild(delBtn)
    li.appendChild(span) //li에  appendChild로 span, delBtn넣음
    li.id = newId
    toDoList.appendChild(li) //toDoList에 li 넣음
    const toDoObj = {
        text: text,
        id: newId //

    }

    toDos.push(toDoObj) //push를 통해 array에 집어넣음..
    saveToDos() // 호출순서가 중요하다.. 생성되고 호출해야됨, localstorage는 string만 저장됨.
}

function handleSubmit(event) {
    event.preventDefault() //이벤트  초기화
    const currentValue = toDoInput.value //입력값의 value받아옴
    paintToDo(currentValue)
    toDoInput.value = "" // 입력되면 빈칸으로 바 꿔줌

}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS)
    if (loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos)
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text)
        })
    }
}
//forEach => Array의 for 문..

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmit)
}

init()