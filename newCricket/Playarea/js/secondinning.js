const uri = "http://localhost:8080/book-cricket/inning";
const uri3 = "http://localhost:8080/book-cricket/previous-ball";

function getResponseFromprevball() {
  var xhReq = new XMLHttpRequest();
  xhReq.open("GET", uri3, false);
  xhReq.send(null);
  var jsonObject = JSON.parse(xhReq.responseText);
  document.getElementById("score").innerHTML = jsonObject.totalScore;
  document.getElementById("score").style.color.remove;
  document.getElementById("playerName").innerHTML = jsonObject.batsmanName;
  document.getElementById("over").innerHTML = jsonObject.overs;
  document.getElementById("com").innerHTML = jsonObject.commentary;
  document.getElementById("rr").innerHTML = jsonObject.runRate;
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
  document.getElementById("req").innerHTML = jsonObject.reqRunRate;
  console.log(jsonObject);
  if (jsonObject.result !== null && jsonObject.inningType == 2) {
    var table = document.getElementById("tb");
    // table.remove();
    var div = document.getElementById("comdiv");
    div.remove();
    var hit = document.getElementById("hit");
    // hit.remove();
    var uld = document.getElementById("uld");
    // uld.remove();
    if (jsonObject.totalScore != jsonObject.target - 1) {
      var h1 = document.createElement("h1");
      h1.innerText = jsonObject.result + " " + "Won the match";
      h1.style.textTransform = "uppercase";
      h1.style.marginLeft = "36%";
      h1.style.marginTop = "-30%";
      h1.style.position = "absolute";
      h1.style.color = "purple";
      document.body.appendChild(h1);
    } else {
      var h4 = document.createElement("h1");
      h4.innerText = jsonObject.result;
      h4.style.marginLeft = "47%";
      h4.style.marginTop = "-30%";
      h4.style.position = "absolute";
      h4.style.color = "purple";
      document.body.appendChild(h4);
    }

    var h2 = document.createElement("h2");
    h2.innerText = jsonObject.teamOneName + "-" + jsonObject.teamoneWinCount;
    var h22 = document.createElement("h2");
    h22.innerText = jsonObject.teamTwoName + "-" + jsonObject.teamtwoWinCount;
    h22.style.marginTop = "-85px";
    h22.style.marginLeft = "42%";
    h22.style.color = "purple";
    h2.style.marginTop = "-350px";
    h2.style.marginLeft = "42%";
    h2.style.color = "purple";
    document.body.appendChild(h2);
    document.body.appendChild(h22);

    // let btn2 = document.createElement("button");
    // btn2.innerHTML = " Viewscore";
    // btn2.id="scorecard"
  }
}
var btn = document.getElementById("scorecard");
function viewScoreCard() {
  btn.onclick = function () {
    window.location.replace("../../Playarea/html/ScoreCard.html");
  };
}

const newmatch1 = "http://localhost:8080/book-cricket/new-match";
function newmatch() {
  var xhReq = new XMLHttpRequest();
  xhReq.open("GET", newmatch1, false);
  xhReq.send(null);
  var btn = document.getElementById("play1");
  btn.onclick = function () {
    window.location.replace("../../Homepage/html/homepage.html");
  };
}
