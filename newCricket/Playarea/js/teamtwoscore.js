const teamtwoscore =
  "http://localhost:8080/book-cricket/getAll-finalscorecard-teamtwo";
function tableCreate() {
  var xhReq = new XMLHttpRequest();
  xhReq.open("GET", teamtwoscore, false);
  xhReq.send(null);
  var jsonObject = JSON.parse(xhReq.responseText);
  var myTable = document.getElementById("myDynamicTable");
  var table = document.getElementById("myDynamicTable3");
  var tblBody = document.createElement("tbody");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = " PLAYERNAME";
  cell2.innerHTML = " PLAYERRUNS";
  cell3.innerHTML = "BALLPLAYED";

  for (var i = 0; i < jsonObject.length; i++) {
    var tr = document.createElement("tr");
    tblBody.appendChild(tr);
    for (var j = 1; j < Object.keys(jsonObject[i]).length - 3; j++) {
      var td = document.createElement("td");
      td.innerHTML = jsonObject[i][Object.keys(jsonObject[i])[j]];
      tr.appendChild(td);
    }
    console.log(jsonObject);
  }
  table.appendChild(tblBody);
  myTable.appendChild(table);
}

tableCreate();
