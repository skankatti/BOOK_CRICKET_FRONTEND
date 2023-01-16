
    
    const uri = 'http://localhost:8080/book-cricket/inning';
    const uri3 = 'http://localhost:8080/book-cricket/previous-ball';

    function getResponseFromprevball(){
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", uri3, false);
        xhReq.send(null);
        var jsonObject = JSON.parse(xhReq.responseText);
        document.getElementById("score").innerHTML = jsonObject.totalScore;
        // document.getElementById("score").style.color="red";
        document.getElementById("score").style.color.remove;
        document.getElementById("playerName").innerHTML = jsonObject.batsmanName;
        // document.getElementById("playerName").style.color ="red"
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

            // let btn2 = document.createElement("button");
            // btn2.innerHTML = " Viewscore";
            // btn2.id="scorecard"
           
    }

}
var btn = document.getElementById("scorecard"); 
  function viewScoreCard(){  
    btn.onclick = function () {
                window.location.replace("ScoreCard.html");
            }
  }
