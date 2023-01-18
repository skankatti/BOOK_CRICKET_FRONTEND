
  const uri = 'http://localhost:8080/book-cricket/team-one';
  const uri1 = 'http://localhost:8080/book-cricket/team-two';
  function getResponseFromAPI() {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", uri, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    console.log(jsonObject);

    let txt = "";
    for (let x in jsonObject) {
      txt += jsonObject[x] + "<br>";
    }
    document.getElementById("playerName").innerHTML = txt;

    const teamnames = 'http://localhost:8080/book-cricket/scorecard-data';
    var teams = new XMLHttpRequest();
    teams.open("GET", teamnames, false);
    teams.send(null);
    var js = JSON.parse(teams.responseText);
    document.getElementById("teamone").innerHTML=js.teamOneName;
    console.log(js.teamOneName);
  }
  function getResponseFromAPI2() {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", uri1, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
    console.log(jsonObject)
    let txt = "";
    for (let x in jsonObject) {
      txt += jsonObject[x] + "<br>";
    }
    document.getElementById("playerName1").innerHTML = txt;


    const teamnames = 'http://localhost:8080/book-cricket/scorecard-data';
    var teams = new XMLHttpRequest();
    teams.open("GET", teamnames, false);
    teams.send(null);
    var js = JSON.parse(teams.responseText);
    document.getElementById("teamtwo").innerHTML=js.teamTwoName;
    console.log(js.teamOneName);
  }