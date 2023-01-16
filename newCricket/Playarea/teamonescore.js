const teamonescore = 'http://localhost:8080/book-cricket/getAll-finalscorecard-teamone';
const uri = 'http://localhost:8080/book-cricket/inning';
function tableCreate () {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", teamonescore, false);
    xhReq.send(null);
    let jsonObject = JSON.parse(xhReq.responseText);
    var myTable = document.getElementById('myDynamicTable');
    // var table = document.createElement('table');
    var table = document.getElementById('myDynamicTable1');
    table.style.position="absolute";
    table.style.alignItems="center";
    table.style.marginTop="71px";
    table.style.marginLeft="73px";
    var tblBody = document.createElement('tbody');
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = "PLAYERRUNS";
  cell2.innerHTML = "BALLPLAYED";
  cell3.innerHTML = "PLAYERNAME";

    for(var i = 0; i < jsonObject.length; i++){
      var tr = document.createElement('tr');
      tblBody.appendChild(tr)
      for(var j=2; j< Object.keys(jsonObject[i]).length-2; j++) {
          var td = document.createElement('td');
          
        td.innerHTML = jsonObject[i][Object.keys(jsonObject[i])[j]];
        tr.appendChild(td);
      }
    }
    table.appendChild(tblBody);
    myTable.appendChild(table);
  
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", uri, false);
    xhReq.send(null);
    let jsonObject1 = JSON.parse(xhReq.responseText);
    var h1 = document.createElement("h1");
    h1.innerHTML = jsonObject1.teamOneName;
    h1.style.textTransform = "uppercase"
    h1.style.marginLeft = "136px";
    h1.style.marginTop = "-335px";
    h1.style.position = "absolute";
    h1.style.color = "white";
    h1.style.backgroundColor="black"
    h1.id="team1"
    document.body.appendChild(h1);


    var h2 = document.createElement("h1");
    h2.innerHTML = jsonObject1.teamTwoName;
    h2.style.textTransform = "uppercase"
    h2.style.marginLeft = "1015px";
    h2.style.marginTop = "-335px";
    h2.style.position = "absolute";
    h2.style.color = "white";
    h2.style.backgroundColor="black"
    h2.id="team2"
    document.body.appendChild(h2);
  }
  tableCreate();
