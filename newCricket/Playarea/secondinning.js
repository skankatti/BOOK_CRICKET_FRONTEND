
    
    const uri = 'http://localhost:8080/book-cricket/inning';
    const uri3 = 'http://localhost:8080/book-cricket/previous-ball';

    function getResponseFromprevball(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", uri3, false);
        xhReq.send(null);
        var jsonObject = JSON.parse(xhReq.responseText);
        document.getElementById("score").innerHTML = jsonObject.totalScore;
        document.getElementById("score").style.color="red";
        document.getElementById("score").style.color.remove;
        document.getElementById("playerName").innerHTML = jsonObject.batsmanName;
        document.getElementById("playerName").style.color ="red"
        console.log(jsonObject);
    }
    function getResponseFromAPI() {
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", uri, false);
        xhReq.send(null);
        var jsonObject = JSON.parse(xhReq.responseText);
        document.getElementById("score").innerHTML = jsonObject.totalScore;
        document.getElementById("over").innerHTML = jsonObject.oversCompleted;
        document.getElementById("playerName").innerHTML = jsonObject.playerName;
        document.getElementById("wicket").innerHTML = jsonObject.wicketCount;
        document.getElementById("remaining").innerHTML = jsonObject.remainingScore;
        document.getElementById("com").innerHTML = jsonObject.commentary;
        document.getElementById("teamName").innerHTML = jsonObject.playingTeamName;
        document.getElementById("rr").innerHTML = jsonObject.currentRunRate;
        document.getElementById("target").innerHTML = jsonObject.target;
        console.log(jsonObject);
        if (jsonObject.result !== null && jsonObject.inningType==2) {
            var table = document.getElementById("tb");
            // table.remove();
            var div = document.getElementById("comdiv");
            div.remove();
            var hit = document.getElementById("hit");
            // hit.remove();
            var uld = document.getElementById("uld");
            // uld.remove();
            var h1 = document.createElement("h1");
            h1.innerText = jsonObject.result +" " +"Won the match";
            h1.style.textTransform = "uppercase"
            h1.style.marginLeft = "30%";
            h1.style.marginTop = "-25%";
            h1.style.position = "absolute";
            h1.style.color = "purple";
            document.body.appendChild(h1);
            

            // let btn = document.createElement("button");
            // btn.innerHTML = " Play Again";
            // btn.style.height = "9%";
            // btn.style.width = "20%";
            // btn.style.marginLeft = "40%";
            // btn.style.marginTop = "-11%";
            // btn.style.position = "absolute";
            // btn.style.border = "none";
            // btn.style.borderRadius = "15px";
            // btn.style.boxShadow = "0 9px black";
            // btn.style.backgroundColor = "cyan";
            // btn.style.fontSizeAdjust = "20%;"
            // var btn2 = document.getElementById("hit");
             
            let btn2 = document.createElement("button");
            btn2.innerHTML = " Viewscore";
            btn2.id="scorecard"
            // btn2.style.width = "20%";
            // btn2.style.marginLeft = "40%";
            // btn2.style.marginTop = "-11%";
            // btn2.style.position = "absolute";
            // btn2.style.border = "none";
            // btn2.style.borderRadius = "15px";
            // btn2.style.boxShadow = "0 9px black";
            // btn2.style.backgroundColor = "cyan";
            // btn2.style.fontSizeAdjust = "20%;"
            // var btn22 = document.getElementById("hit");

        //     var x = document.createElement("IMG");
        //     x.style.position = "absolute";
        //     x.setAttribute("src", "unnamed.png");
        //     x.setAttribute("width", "400");
        //     x.setAttribute("height", "400");
        //     x.setAttribute("alt", "The Pulpit Rock");
        //     x.style.marginTop = "-40%";
        //     x.style.marginLeft = "0%";
        //     document.body.appendChild(x);
        //     var y = document.createElement("IMG");
        //     y.style.position = "absolute";
        //     y.setAttribute("src", "unnamed.png");
        //     y.setAttribute("width", "400");
        //     y.setAttribute("height", "400");
        //     y.setAttribute("alt", "The Pulpit Rock");
        //     y.style.marginTop = "-40%";
        //     y.style.marginLeft = "72%";
        //     document.body.appendChild(y);
        //     var ballon = document.createElement("IMG");
        //     ballon.style.position = "absolute";
        //     ballon.setAttribute("src", "confetti_PNG87041.png");
        //     ballon.setAttribute("width", "600");
        //     ballon.setAttribute("height", "600");
        //     ballon.setAttribute("alt", "The Pulpit Rock");
        //     ballon.style.marginTop = "10%";
        //     ballon.style.marginLeft = "30%";
        //     document.body.appendChild(ballon);

        //     let start = Date.now();
        //     let timer = setInterval(function () {
        //         let timePassed = Date.now() - start;
        //         ballon.style.bottom = timePassed / 8 + 'px';
        //         if (timePassed > 8000) clearInterval(timer);
        //     }, 50);

        //     var ballon2 = document.createElement("IMG");
        //     ballon2.style.position = "absolute";
        //     ballon2.setAttribute("src", "confetti_PNG87041.png");
        //     ballon2.setAttribute("width", "600");
        //     ballon2.setAttribute("height", "600");
        //     ballon2.setAttribute("alt", "The Pulpit Rock");
        //     ballon2.style.marginTop = "-43%";
        //     ballon2.style.marginLeft = "2%";
        //     document.body.appendChild(ballon2);

        //     let start2 = Date.now();
        //     let timer2 = setInterval(function () {
        //         let timePassed = Date.now() - start2;
        //         ballon2.style.bottom = timePassed / 8 + 'px';
        //         if (timePassed > 8000) clearInterval(timer2);
        //     }, 50);
        //     var ballon3 = document.createElement("IMG");
        //     ballon3.style.position = "absolute";
        //     ballon3.setAttribute("src", "confetti_PNG87041.png");
        //     ballon3.setAttribute("width", "600");
        //     ballon3.setAttribute("height", "600");
        //     ballon3.setAttribute("alt", "The Pulpit Rock");
        //     ballon3.style.marginTop = "-41%";
        //     ballon3.style.marginLeft = "55%";
        //     document.body.appendChild(ballon3);

        //     let start3 = Date.now();
        //     let timer3 = setInterval(function () {
        //         let timePassed = Date.now() - start3;
        //         ballon3.style.bottom = timePassed / 8 + 'px';
        //         if (timePassed > 8000) clearInterval(timer3);
        //     }, 50);
        // }
        // else if(jsonObject.series==3 || jsonObject.series==5){
        //     let btn = document.createElement("button");
        //     btn.innerHTML = "Next Match";
        //     btn.style.height = "9%";
        //     btn.style.width = "20%";
        //     btn.style.marginLeft = "40%";
        //     btn.style.marginTop = "-11%";
        //     btn.style.position = "absolute";
        //     btn.style.border = "none";
        //     btn.style.borderRadius = "15px";
        //     btn.style.boxShadow = "0 9px black";
        //     btn.style.backgroundColor = "cyan";
        //     btn.style.fontSizeAdjust = "20%;"
        //     var btn2 = document.getElementById("hit");
        // }
    }

}
  function viewScoreCard(){
    var btn = document.getElementById("scorecard");
    btn.onclick = function () {
                window.location.replace("ScoreCard.html");
            }
  }
