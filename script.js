function Clock(){
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    if(10 >= seconds){
        seconds = "0" + seconds;
    }

    if(10 >= minutes){
        minutes = "0" + minutes;
    }

    if(10 >= hours){
        hours = "0" + hours;
    }

    var clockBackground = "#" + seconds + minutes + hours;
    var clockLine = "#" + hours + seconds + minutes;
    var clockTry = "#"  + seconds + minutes + seconds;

    document.getElementById('clock').innerHTML = clockBackground;
    document.body.style.backgroundColor = clockBackground;
    document.body.style.color = clockLine;
    document.body.style.color = clockTry;
    setTimeout(Clock, 1000);
}
Clock();

$(document).ready(function(){
    $("#animation").click(function(){
      var div = $("#divAnimate");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
      div.animate({height: '200px', opacity: '0.2'}, "slow");
      div.animate({width: '200px', opacity: '0.4'}, "slow");
      div.animate({height: '100px', opacity: '0.2'}, "slow");
      div.animate({width: '100px', opacity: '0.4'}, "slow");
    });
  });