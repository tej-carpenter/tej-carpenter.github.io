// console.log("Enjoy TIC-TATC-TOE by TEJ PRAKASH CARPENTER")
let turn = document.querySelector("#turn").innerText

// function definiton
const AutoReplay = () => {
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("BoxText")[i].innerText = ""
    }
    document.querySelector("#turn").innerText = "X"
    document.querySelector("body > div > div.GameInfo > div.GameResult").innerHTML = ""
}

// function to change turn
const TurnChanger = () => {
    if (turn === "X") {
        turn = "O"
        document.querySelector("#turn").innerText = turn
    }
    else if (turn === "O") {
        turn = "X"
        document.querySelector("#turn").innerText = turn
    }
}

// function to check if someone won
const CheckWin = () => {
    if (
        (document.querySelector("body > div > div.container > div:nth-child(1) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(2) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(3) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(2) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(1) > span").innerText !== "") ||
        (document.querySelector("body > div > div.container > div:nth-child(4) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(5) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(6) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(5) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(4) > span").innerText !== "") ||
        (document.querySelector("body > div > div.container > div:nth-child(7) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(8) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(9) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(8) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(7) > span").innerText !== "") ||
        (document.querySelector("body > div > div.container > div:nth-child(1) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(4) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(7) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(4) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(1) > span").innerText !== "") ||
        (document.querySelector("body > div > div.container > div:nth-child(2) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(5) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(8) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(5) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(2) > span").innerText !== "") ||
        (document.querySelector("body > div > div.container > div:nth-child(3) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(6) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(9) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(6) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(3) > span").innerText !== "") ||
        (document.querySelector("body > div > div.container > div:nth-child(3) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(5) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(7) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(5) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(3) > span").innerText !== "") ||
        (document.querySelector("body > div > div.container > div:nth-child(1) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(5) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(9) > span").innerText === document.querySelector("body > div > div.container > div:nth-child(5) > span").innerText) && (document.querySelector("body > div > div.container > div:nth-child(1) > span").innerText !== "")
    ) {

        if (turn === "X") {
            console.log("Player with 'O' won")
            for (let i = 0; i < 9; i++) {
                document.getElementsByClassName("BoxText")[i].innerText = "O"
            }
            let oldInfo = document.querySelector("body > div > div.GameInfo > div.GameResult").innerHTML
            let newInfo = oldInfo + "<h1>O won</h1>"
            document.querySelector("body > div > div.GameInfo > div.GameResult").innerHTML = newInfo
            // AutoReplay()
            setTimeout(() => {
                AutoReplay()
            }, 1500);
        }
        else if (turn === "O") {
            console.log("Player with 'X' won")
            for (let i = 0; i < 9; i++) {
                document.getElementsByClassName("BoxText")[i].innerText = "X"
            }
            let oldInfo = document.querySelector("body > div > div.GameInfo > div.GameResult").innerHTML
            let newInfo = oldInfo + "<h1>X won</h1>"
            document.querySelector("body > div > div.GameInfo > div.GameResult").innerHTML = newInfo
            // AutoReplay()
            setTimeout(() => {
                AutoReplay()
            }, 1500);
        }
    }
}

//Replay Button
// document.getElementById("reset").addEventListener("click", AutoReplay())
document.getElementById("reset").addEventListener("click", () => {
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("BoxText")[i].innerText = ""
    }
    document.querySelector("#turn").innerText = "X"
    document.querySelector("body > div > div.GameInfo > div.GameResult").innerHTML = ""
})

// 1
document.querySelector("body > div > div.container > div:nth-child(1)").addEventListener("click", () => {
    document.querySelector("body > div > div.container > div:nth-child(1) > span").innerText = turn
    TurnChanger()
    CheckWin()
})
// 2
document.querySelector("body > div > div.container > div:nth-child(2)").addEventListener("click", () => {
    document.querySelector("body > div > div.container > div:nth-child(2) > span").innerText = turn
    TurnChanger()
    CheckWin()
})
// 3
document.querySelector("body > div > div.container > div:nth-child(3)").addEventListener("click", () => {
    document.querySelector("body > div > div.container > div:nth-child(3) > span").innerText = turn
    TurnChanger()
    CheckWin()
})
// 4
document.querySelector("body > div > div.container > div:nth-child(4)").addEventListener("click", () => {
    document.querySelector("body > div > div.container > div:nth-child(4) > span").innerText = turn
    TurnChanger()
    CheckWin()
})
// 5
document.querySelector("body > div > div.container > div:nth-child(5)").addEventListener("click", () => {
    document.querySelector("body > div > div.container > div:nth-child(5) > span").innerText = turn
    TurnChanger()
    CheckWin()
})
// 6
document.querySelector("body > div > div.container > div:nth-child(6)").addEventListener("click", () => {
    document.querySelector("body > div > div.container > div:nth-child(6) > span").innerText = turn
    TurnChanger()
    CheckWin()
})
// 7
document.querySelector("body > div > div.container > div:nth-child(7)").addEventListener("click", () => {
    document.querySelector("body > div > div.container > div:nth-child(7) > span").innerText = turn
    TurnChanger()
    CheckWin()
})
// 8
document.querySelector("body > div > div.container > div:nth-child(8)").addEventListener("click", () => {
    document.querySelector("body > div > div.container > div:nth-child(8) > span").innerText = turn
    TurnChanger()
    CheckWin()
})
// 9
document.querySelector("body > div > div.container > div:nth-child(9)").addEventListener("click", () => {
    document.querySelector("body > div > div.container > div:nth-child(9) > span").innerText = turn
    TurnChanger()
    CheckWin()
})
