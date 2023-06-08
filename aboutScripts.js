

$(document).ready(function(){
    $("#hide").click(function(){
      $("#div1").fadeOut("slow");
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut("slow");
      $("#div4").fadeOut("slow");
      $("#div5").fadeOut("slow");
    });
    $("#show").click(function(){
      $("#div1").fadeIn();
      $("#div2").fadeIn();
      $("#div3").fadeIn();
      $("#div4").fadeIn();
      $("#div5").fadeIn();
    });
});
