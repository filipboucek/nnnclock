
function onclicktest()
{
    alert("test ok");
}
var updateClock = window.setInterval(function(){
    var countDownDate = new Date("Dec 1, 2022 0:0:0").getTime();
    var currentDate = new Date().getTime();
    var timeleft = countDownDate - currentDate; 
    var dny = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hodiny = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuty = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var sekundy = Math.floor((timeleft % (1000 * 60)) / 1000);
    var element = document.getElementById("countdown-clock");
    // var rawclock = document.getElementById("raw-clock");
    //rawclock.innerHTML = timeleft;
    element.innerHTML = dny + ":" + hodiny + ":" + minuty + ":" + sekundy;
  }, 1000);
function updateText() 
{
    

}
function updateClock() {

}
