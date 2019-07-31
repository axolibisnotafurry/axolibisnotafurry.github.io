cookie = document.cookie;
  
if (cookie == null) {
  //No dark theme
  body.style.color="black";
  body.style['background-color']="white";
}
else {
  //Dark theme
  body.style.color="white";
  body.style['background-color']="black";
}

var texts = [
  "He really isn't.",
  "Don't call him one.",
  "Animal Crossing doesn't count.",
  "Fireboltofdeath is a weeb.",
  "I swear.",
  "It's only for the memes.",
  "He's also not a weeb.",
  "<img src='https://i.imgur.com/h7jh1g4.png'>",
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Mz3Mi_OZYno?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
];

document.getElementById("mainText").innerHTML = texts[Math.floor(Math.random()*texts.length)];;


function toggleDarkLight() {
  var body = document.getElementById("body");
  cookie = document.cookie;
  if (cookie == null) {
    //No dark theme
    body.style.color="black";
    body.style['background-color']="white";
    document.cookie = "cookie=true; path=/";
  }
  else {
    //Dark theme
    body.style.color="white";
    body.style['background-color']="black";
    document.cookie = "cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  }
}
