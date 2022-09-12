# tej-carpenter.github.io
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="vieport" content="width=device-width, initial-scale=1">
    <title>Tic-Tac-Toe | Tej Prakash Carpenter</title>
    <style>
        * {
    margin: 0;
    padding: 0;
}

nav {
    height: 55px;
    background-color: #000;
    color: white;
    display: flex;
    align-items: center;
    font-size: 35px;
    font-family: fantasy;
    padding: 6px 15px;
}

nav ul {
    list-style: none;
}

.GameContainer {
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.container {
    display: grid;
    grid-template-rows: repeat(3, 10vw);
    grid-template-columns: repeat(3, 10vw);
    font-family: Impact;
}
.box {
    border: 2px solid black;
    font-size: 8vw;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box:hover {
    background-color: rgba(128, 128, 128, 0.35);
}

.GameInfo {
    padding: 0 40px;
}

.lb0 {
    border-left: 0;
}
.rb0 {
    border-right: 0;
}
.tb0 {
    border-top: 0;
}
.bb0 {
    border-bottom: 0;
}

#reset {
    margin:0px 25px;
    padding: 2px 10px;
    background-color: rgba(0, 52, 142,0.85);
    color: white;
    border: none;
    border-radius: 2px;
}
#reset:hover {
    background-color: rgb(0, 52, 142);
}
#reset:active {
    background-color: black;
    color: white;
}
    </style>
</head>

<body>
    <nav>
        <ul>
            <li>Tic Tac Toe</li>
        </ul>
    </nav>

    <div class="GameContainer">
        <div class="container">
            <div class="box tb0 lb0"><span class="BoxText"></span></div>
            <div class="box tb0"><span class="BoxText"></span></div>
            <div class="box tb0 rb0"><span class="BoxText"></span></div>
            <div class="box lb0"><span class="BoxText"></span></div>
            <div class="box"><span class="BoxText"></span></div>
            <div class="box rb0"><span class="BoxText"></span></div>
            <div class="box bb0 lb0"><span class="BoxText"></span></div>
            <div class="box bb0"><span class="BoxText"></span></div>
            <div class="box bb0 rb0"><span class="BoxText"></span></div>
        </div>
        <div class="GameInfo">
            <h1>Tej Prakash Carpenter</h1>
            <div>
                <span class="info">Turn for <span id="turn">X</span></span>
                <button id="reset">Replay</button>
            </div>
            <div class="GameResult">
                <h1></h1>
            </div>
        </div>
    </div>
</body>
<script>
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
</script>
</html>
