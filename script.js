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
    $('#close').on('click', function(){
        $('.desc').hide();
    });

    $('#open').on('click', function(){
        $('.desc').show();
    });

});

function show() {
    let image = document.getElementById("image");
    image.src =
"https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3.png"
    document.getElementById("btnID")
        .style.display = "none";
}
