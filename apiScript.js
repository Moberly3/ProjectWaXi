$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

function show() {
    let image = document.getElementById("image");
    image.src =
"https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3.png"
    document.getElementById("btnID")
        .style.display = "none";
}
