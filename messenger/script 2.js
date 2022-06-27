let button = document.getElementById("Send")
let count = 0
let stop_ = 0

button.addEventListener("click", Send)

setInterval(Update, 500)

function Update() {
    let stop = localStorage.getItem("stop_1")
    if (count == stop - 1) {
        AddItem()
        count++
    }
}

function Send() {
    let message = document.getElementById("message");
    let sended = document.getElementById("chat");
    if (message.value != "") {
        sended.insertAdjacentHTML('beforeend', `<div class = "message_1">Вы:<br> ${message.value} </div>`)
        localStorage.setItem("message_2", message.value)
        stop_++
        localStorage.setItem("stop_2", stop_)
        message.value = ""
    }
}


function AddItem() {
    let message_1 = localStorage.getItem("message_1");
    let sended = document.getElementById("chat");
    updated = `<div class = message_2>От пользователя 1:<br> ${message_1} </div>`
    sended.insertAdjacentHTML('beforeend', updated)
}