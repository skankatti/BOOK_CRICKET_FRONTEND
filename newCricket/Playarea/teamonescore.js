const teamonescore = 'http://localhost:8080/book-cricket/getAll-finalscorecard-teamone';

function tableCreate () {
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", teamonescore, false);
    xhReq.send(null);
    var jsonObject = JSON.parse(xhReq.responseText);
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
  var cell4 = row.insertCell(3);

  cell1.innerHTML = "bowlerName";
  cell2.innerHTML = "playerRuns";
  cell3.innerHTML = "ballPlayed";
  cell4.innerHTML = "playerName";

    for(var i = 0; i < jsonObject.length; i++){
      var tr = document.createElement('tr');
      tblBody.appendChild(tr)
      for(var j=1; j< Object.keys(jsonObject[i]).length-2; j++) {
          var td = document.createElement('td');
          
        td.innerHTML = jsonObject[i][Object.keys(jsonObject[i])[j]];
        tr.appendChild(td);
      }
    }
    table.appendChild(tblBody);
    myTable.appendChild(table);
  }
  
  tableCreate();