const title = document.querySelector("#title")

const CLICKED_CLASS = "clicked"

function _handleClick() {
    const currentClass = title.className
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS
    }
}


function _init() {
    title.addEventListener("click", _handleClick)
}

_init()