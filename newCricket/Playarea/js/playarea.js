
//PreviousBall
const uri = 'http://localhost:8080/book-cricket/inning';
const uri1 = 'http://localhost:8080/book-cricket/end-of-first-inning';
const uri3 = 'http://localhost:8080/book-cricket/previous-ball';
function getResponseFromprevball(){
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", uri3, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    document.getElementById("score").innerHTML = jsonObject.totalScore;
    document.getElementById("over").innerHTML = jsonObject.overs;
    document.getElementById("playerName").innerHTML = jsonObject.batsmanName;
    document.getElementById("com").innerHTML = jsonObject.commentary;
    document.getElementById("rr").innerHTML = jsonObject.runRate;
    console.log(jsonObject);
}


//Inning
function getResponseFromAPI() {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", uri, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    document.getElementById("score").innerHTML = jsonObject.totalScore;
    document.getElementById("over").innerHTML = jsonObject.oversCompleted;
    document.getElementById("playerName").innerHTML = jsonObject.playerName;
    document.getElementById("wicket").innerHTML = jsonObject.wicketCount;
    document.getElementById("com").innerHTML = jsonObject.commentary;
    document.getElementById("teamName").innerHTML = jsonObject.playingTeamName
    document.getElementById("rr").innerHTML = jsonObject.currentRunRate;
    console.log(jsonObject);

    if ((jsonObject.oversCompleted==jsonObject.totalOvers) || (jsonObject.wicketCount==jsonObject.totalWicket 
    && jsonObject.inningType==1)) {
       var prev = document.getElementById("prev");
       prev.remove();
        var Target = jsonObject.totalScore+1
        console.log(Target);
        let btn = document.createElement("button");
        btn.innerHTML = "Second Inning";
        btn.style.height = "9%";
        btn.style.width = "20%";
        btn.style.marginLeft = "40%";
        btn.style.marginTop = "-11%";
        btn.style.position = "absolute";
        btn.style.border = "none";
        btn.style.borderRadius = "15px";
        btn.style.boxShadow = "0 9px black";
        btn.style.backgroundColor = "cyan";
        btn.style.fontSizeAdjust = "20%;"
        var h1 = document.createElement("h1");
        h1.innerText = "Target for second inning :" + " " + Target;
        h1.style.marginLeft = "32%";
        h1.style.marginTop = "-30%";
        h1.style.position = "absolute";
        h1.style.color = "cadetblue";
        document.body.appendChild(h1);
        var commentary2 = document.getElementById("comdiv");
        commentary2.remove();
        btn.onclick = function () {
            var xhReq = new XMLHttpRequest();
            xhReq.open("GET", uri1, false);
            xhReq.send(null);
            window.location.replace("../../Playarea/html/secondInning.html");
        }
        document.body.appendChild(btn);
        
    }
} 

const newmatch1 ="http://localhost:8080/book-cricket/new-match"
function newmatch(){
    var xhReq = new XMLHttpRequest();
            xhReq.open("GET", newmatch1, false);
            xhReq.send(null);
            var btn = document.getElementById("play");
            btn.onclick = function () {
                window.location.replace("../../Homepage/html/homepage.html");
           }
}