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

  const API_URL = `https://api.thecatapi.com/v1/`;
  const API_KEY = "live_wnwdnJC3u270mi2WhO3oYqq7jwnwI68g9FfIqoLZDINYq3yRYXZEdL0yA0afCnAv";
  
  let currentImageToVoteOn;

  function showImageToVoteOn()
{
  
  const url = `${API_URL}images/search`;

  fetch(url,{headers: {
    'x-api-key': API_KEY
  }})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    currentImageToVoteOn = data[0];
    document.getElementById("image-to-vote-on").src= currentImageToVoteOn.url;
  });

}

function vote(value)
{
  
  const url = `${API_URL}votes/`;
  const body = {
    image_id:currentImageToVoteOn.id,
    value
  }
  fetch(url,{method:"POST",body:JSON.stringify(body),headers: {
    'content-type':"application/json",
    'x-api-key': API_KEY
  }})
  
}