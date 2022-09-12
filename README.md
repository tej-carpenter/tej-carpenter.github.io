# tej-carpenter.github.io
<head>
    <style>

        * { margin: 0; padding: 0; }

        nav { height: 55px; background-color:#000; color:white; display:flex; align-items:center; font-size:35px; font-family:fantasy; padding:6px 15px; }
        nav ul { list-style:none; }

        .GameContainer {display:flex; justify-content:center; margin-top:50px;}

        .container {display:grid; grid-template-rows:repeat(3, 10vw); grid-template-columns:repeat(3, 10vw); font-family: Impact;}

        .box { border:2px solid black; font-size:8vw; cursor:pointer; display:flex; justify-content:center; align-items:center; }
        .box:hover { background-color:rgba(128, 128, 128, 0.35); }

        .GameInfo { padding: 0 40px; }

        .lb0 { border-left:0; }
        .rb0 { border-right:0; }
        .tb0 { border-top:0; }
        .bb0 { border-bottom:0; }

        #reset { margin:0px 25px; padding:2px 10px; background-color:rgba(0, 52, 142,0.85); color:white; border:none; border-radius:2px; }
        #reset:hover { background-color: rgb(0, 52, 142); }
        #reset:active { background-color:black; color:white; }
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
