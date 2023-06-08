$(document).ready(function(){
    $("#hide").click(function(){
      $("#descr").hide();
    });
    $("#show").click(function(){
      $("#descr").show();
    });
});

$(document).ready(function(){
    $("#animation").click(function(){
      var div = $("#divAnimate");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });

function show() {
    let image = document.getElementById("image");
    image.src =
"https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3.png"
    document.getElementById("btnID")
        .style.display = "none";
}
