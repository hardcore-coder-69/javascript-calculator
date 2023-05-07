let display = document.getElementById("display")
let trackHistoryButton = document.getElementById("track-history")
let history = document.getElementById("history")

function addToDisplay(value) {
    display.value+= value
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    history.value += display.value + '\n'
    history.scrollTop = history.scrollHeight

    let result = eval(display.value)
    display.value = result
}

function trackHistory() {
    if(history.style.display !== "block") {
        history.style.display = "block"
        trackHistoryButton.innerText = "Hide history"
    } else {
        history.style.display = "none"
        trackHistoryButton.innerText = "Track history"
    }
}