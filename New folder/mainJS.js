var coin = document.getElementById('coin');  
 var button = document.getElementById('button');  
 var result = document.getElementById('result');  
 var headsCounter = document.getElementById('headsCounter');  
 var TailsCounter = document.getElementById('TailsCounter');  
 var featureCoin = document.getElementById('featureCoin');  
 var heads = 0;  
 var tails = 0;  
 /* On click of button spin coin ainamtion */  
 function coinToss() {  
  /* Random number 0 or 1 */  
  var x = Math.floor(Math.random() * 2);  
  /* If x = 0 change coin html to image of heads along with animation for flipping effect */  
  if (x === 0) {  
   coin.innerHTML = '<img class="heads animate-coin" src="Toss Heads.png"/>';  
   /* Heads count increase by 1 */  
   heads += 1;  
   /* Display result of flip */ 
//    const element = document.getElementById("result");
//   setInterval(function() {element.innerHTML += "<h2>You got heads</h2>"}, 1000); 
//   clearInterval(element);
 
const myTimeout1 = setTimeout(myGreeting, 2000);
function myGreeting() {
  document.getElementById("result").innerHTML = "<h2>You got heads</h2>"
//   window.location.href = "rules.html";
}
function myStopFunction() {
  clearTimeout(myTimeout1);

    window.location = "rules.html";
 }            
 setTimeout('myStopFunction()', 500);
//    result.innerHTML = '<h2>You got heads</h2>';  
   /* Display number of heads */  
   /*headsCounter.innerHTML = '<h3> Number of heads:<span> ' + heads + '</span></h3>'; */ 
   /* Else x = change coin html to image of tails along with animation for flipping effect */  
  } else {  
   coin.innerHTML = '<img class="tails animate-coin" src="Toss Tails.png"/>';  
   /* Tails count increase by 1 */  
   tails += 1;  
   /* Display result of flip */  
//    const element = document.getElementById("result");
//   setInterval(function() {element.innerHTML += "<h2>You got tails</h2>"}, 1000); 
//   clearInterval(element);
const myTimeout = setTimeout(myGreeting, 2000);
function myGreeting() {
  document.getElementById("result").innerHTML = "<h2>You got tails</h2>"
//   window.location.href = "rules.html";
}
function myStopFunction() {
  clearTimeout(myTimeout);

    window.location = "rules.html";
 }            
 setTimeout('myStopFunction()', 500);

//    result.innerHTML = '<h2>You got tails</h2>';  
   /* Display number of tails */  
   /*tailsCounter.innerHTML = '<h3> Number of tails:<span> ' + tails + '</span></h3>';  */
  }  
 }  
 /* Add the coin toss function to the button using on click */  
 button.onclick = function() {  
  coinToss();  
  featureCoin.remove();  
 }  