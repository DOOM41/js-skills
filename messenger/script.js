let button = document.getElementById("Send")
let count = 0
let stop_ = 0

button.addEventListener("click", Send)

setInterval(Update, 500)

function Update() {
    let stop = localStorage.getItem("stop_2")
    if (count == stop - 1) {
        AddItem()
        count++
    }
}

function Send() {
    let message = document.getElementById("message");
    let sended = document.getElementById("chat");
    if (message.value != ""){
        sended.insertAdjacentHTML('beforeend', `<div class = "message_1">Вы:<br> ${message.value} </div>`)
        localStorage.setItem("message_1", message.value)
        stop_++
        localStorage.setItem("stop_1", stop_)
        message.value = ""
    }
}


function AddItem() {
    let message_2 = localStorage.getItem("message_2");
    let sended = document.getElementById("chat");
    updated = `<div class = message_2>От пользователя 2:<br> ${message_2} </div>`
    sended.insertAdjacentHTML('beforeend', updated)
}