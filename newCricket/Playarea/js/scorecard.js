//new-match
const newmatch1 ="http://localhost:8080/book-cricket/new-match"
function newmatch(){
    var xhReq = new XMLHttpRequest();
            xhReq.open("GET", newmatch1, false);
            xhReq.send(null);
            var btn = document.getElementById("newmatch");

            btn.onclick = function () {
                window.location.replace("../../Homepage/html/homepage.html");
           }
}
// next-match
const nextmatch1 ="http://localhost:8080/book-cricket/next-match"
function Previous(){
    var prev = document.getElementById("Previous");
        prev.onclick = function () {
            window.location.replace("../html/secondInning.html");
        }
}
function nextmatch(){
    var xhReq = new XMLHttpRequest();
            xhReq.open("GET", nextmatch1, false);
            xhReq.send(null);
            var jsonObject = JSON.parse(xhReq.responseText);
             var btn = document.getElementById("play2");
            
            if(jsonObject.tournamentResult!=null)
            {
               prev.remove();
               btn.remove(); 
               var btn2 = document.getElementById("newmatch");
                btn2.style.marginTop="39%";
               var table = document.getElementById("myDynamicTable");
            table.remove();
            var h1 = document.getElementById("team1");
            h1.remove();
            var h2 = document.getElementById("team2");
            h2.remove();
            

            var h1 = document.createElement("h1");
            h1.innerText = jsonObject.tournamentResult;
            h1.style.marginLeft = "35%";
            h1.style.marginTop = "-30%";
            h1.style.position = "absolute";
            h1.style.color = "cadetblue";
            document.body.appendChild(h1);

            var x = document.createElement("IMG");
            x.style.position="absolute";
            x.setAttribute("src", "../images/unnamed.png");
            x.setAttribute("width", "400");
            x.setAttribute("height", "400");
            x.setAttribute("alt", "The Pulpit Rock");
            x.style.marginTop= "-40%";
            x.style.marginLeft="0%";
            document.body.appendChild(x);

            var y = document.createElement("IMG");
            y.style.position="absolute";
            y.setAttribute("src", "../images/unnamed.png");
            y.setAttribute("width", "400");
            y.setAttribute("height", "400");
            y.setAttribute("alt", "The Pulpit Rock");
            y.style.marginTop= "-40%";
            y.style.marginLeft="72%";
            document.body.appendChild(y);

            var ballon = document.createElement("IMG");
            ballon.style.position="absolute";
            ballon.setAttribute("src", "../images/confetti_PNG87041.png");
            ballon.setAttribute("width", "600");
            ballon.setAttribute("height", "600");
            ballon.setAttribute("alt", "The Pulpit Rock");
            ballon.style.marginTop= "10%";
            ballon.style.marginLeft="30%";
            document.body.appendChild(ballon);
        
        let start = Date.now();
        let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        ballon.style.bottom = timePassed / 8 + 'px';

        if (timePassed > 8000) clearInterval(timer);

      }, 50);
            
      var ballon2 = document.createElement("IMG");
            ballon2.style.position="absolute";
            ballon2.setAttribute("src", "../images/confetti_PNG87041.png");
            ballon2.setAttribute("width", "600");
            ballon2.setAttribute("height", "600");
            ballon2.setAttribute("alt", "The Pulpit Rock");
            ballon2.style.marginTop= "-43%";
            ballon2.style.marginLeft="2%";
            document.body.appendChild(ballon2);

            let start2 = Date.now();
        let timer2 = setInterval(function() {
        let timePassed = Date.now() - start2;

        ballon2.style.bottom = timePassed / 8 + 'px';

        if (timePassed > 8000) clearInterval(timer2);

      }, 50);

            var ballon3 = document.createElement("IMG");
            ballon3.style.position="absolute";
            ballon3.setAttribute("src", "../images/confetti_PNG87041.png");
            ballon3.setAttribute("width", "600");
            ballon3.setAttribute("height", "600");
            ballon3.setAttribute("alt", "The Pulpit Rock");
            ballon3.style.marginTop= "-41%";
            ballon3.style.marginLeft="55%";
            document.body.appendChild(ballon3);

            let start3 = Date.now();
        let timer3 = setInterval(function() {
        let timePassed = Date.now() - start3;

        ballon3.style.bottom = timePassed / 8 + 'px';

        if (timePassed > 8000) clearInterval(timer3);

      }, 50);
 }
            btn.onclick = function () {
                window.location.replace("../../Playarea/html/toss.html");
            }       
}
