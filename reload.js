document.addEventListener('DOMContentLoaded', (event) => {
  ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})

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

