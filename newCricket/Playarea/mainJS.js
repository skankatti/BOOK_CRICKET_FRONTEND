var coin = document.getElementById('coin');
var button = document.getElementById('button');
var button2 = document.getElementById('button2');
var result = document.getElementById('result');
var headsCounter = document.getElementById('headsCounter');
var TailsCounter = document.getElementById('TailsCounter');
var featureCoin = document.getElementById('featureCoin');
var toss = document.getElementById("toss");
var heads = 0;
var tails = 0;



// function hitthebutton() {
//    setInterval(function () { alert("Now you can play hit the play"); }, 4000);
// }
function coinToss() {
   var x = Math.floor(Math.random() * 2);
   if (x === 0) {
      coin.innerHTML = '<img class="heads animate-coin" src="Toss Heads.png"/>';
      heads += 1;
      const myTimeout = setTimeout(myGreeting2, 500);
      function myGreeting2() {
         toss.style.color = "white";
         toss.style.fontWeight = "bolder";
         toss.style.fontSize = "30px";
         toss.innerHTML += "<h1> Won The Toss And Selected To Bat First</h1>";
      }
   } else {
      coin.innerHTML = '<img class="tails animate-coin" src="Toss Tails.png"/>';

      tails += 1;

      const myTimeout = setTimeout(myGreeting, 500);
      function myGreeting() {
         toss.style.color = "white";
         toss.style.fontWeight = "bolder";
         toss.style.fontSize = "30px";
         toss.innerHTML += "<h1> Won The Toss And Selected To Bat First</h1>";
      }

   }
}

button.onclick = function () {
   coinToss();
   callToss();
   var rmv = document.getElementById("button");
   rmv.remove();
   featureCoin.remove();
}
// button2.on = function () {
//    hitthebutton();
// }


const tossAPI = 'http://localhost:8080/book-cricket/toss';
  function callToss() {

    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", tossAPI, false);
    xhReq.send(null);
    var toss = JSON.parse(xhReq.responseText);
    document.getElementById("toss").innerHTML = toss.tossResult;
    console.log(toss.tossResult)
    let btn = document.createElement("button");
    btn.innerHTML = "PLAY";
    btn.style.height = "9%";
    btn.style.width = "18%";
    btn.style.marginLeft = "600px";
    btn.style.marginBottom = "-30px";
    btn.style.position = "absolute";
    btn.style.border = "none";
    btn.style.borderRadius = "32px";
    document.body.appendChild(btn);
    btn.onclick = function () {
       document.location = 'playarea.html' 
      }
  }
