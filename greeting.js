const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greeting = document.querySelector(".js-greetings")
const USER_LS = "currentUser"
const SHOWING_CN = "showing"

function saveName(text) {
    localStorage.setItem(USER_LS, text) //localStorage를 통해 저장..
}

function handleSubmit(event) {
    event.preventDefault(); //이벤트의 기본 진행과정 막음
    const currentVaule = input.value //form의 inputValue를 받음
    paintGreeting(currentVaule)
    saveName(currentVaule)

}


function askForName() {
    form.classList.add(SHOWING_CN) //이름물어봄
    form.addEventListener("submit", handleSubmit) //submit 되면 handleSubmit실행
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null) {
        askForName()
    } else {
        paintGreeting(currentUser)
    }

}

function init() {
    loadName()
}

init()