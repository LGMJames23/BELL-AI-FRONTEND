const splashLbl = document.getElementById("splash-txt");
const splashBtn = document.getElementById("splash-txt-btn");
let splashTxt = "";
const splashTxtOptions = [
  "I made this in School.",
  "NEWS: Teenage Pregnancy shown to decrease around age 25.",
  "Be careful, I bite.",
  "ARIBA!!!",
  "To infinity and LeBron!",
  "Octopuses have 3 hearts.",
  "Ostriches have larger eyes than brains.",
  "Try to hum while closing your nostrils!",
  "Sharks existed before trees.",
  "Australia is wider than the Moon.",
  "Do you ever wonder what Slurp Juice tastes like?",
  "I CAN SEE YOU.",
  "Minecraft did this better.",
  "Do people actually read these?",
  "Not trying to take over the world.",
  "Fun Fact: Lil Baby is actually an adult.",
  "Thank you! Thank you! Thank you! Thank you!",
  "What do you think you're looking at?",
  "Don't eat bathroom bread.",
  "Making this website made me question my life choices.",
  "Beware of Small Cats."
];
splashBtn.addEventListener('click', pickSplashText);
function pickSplashText(){ 
let index = Math.floor(Math.random() * splashTxtOptions.length);
  splashTxt = splashTxtOptions[index];
splashLbl.textContent = splashTxt;
}
pickSplashText();
