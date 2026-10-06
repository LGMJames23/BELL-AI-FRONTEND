const splashLbl = document.getElementById("splash-label");
const splashBtn = document.getElementById("splash-btn");
let splashTxt = "";
const splashTxtOptions = [
  "I made this in School.",
  "Be careful, I bite.",
  "ARIBA!!!",
  "To infinity and LeBron!",
  "Octopuses have 3 hearts.",
  "Ostriches have larger eyes than brains.",
  "Try to hum while closing your nostrils!",
  "Sharks existed before trees.",
  "Australia is wider than the Moon",
  "Do you ever wonder what Slurp Juice tastes like?",
  "I CAN SEE YOU.",
  "Minecraft did this better.",
  "Do people read these?",
  "Not trying to take over the world.",
  "Lil Baby is actually an adult."
];
splashBtn.addEventListener('click', pickSplashText);
function pickSplashText(){
math.Floor(math.Random(), * splashTxtOptions.length);
  splashTxt = splashTxtOptions[index];
};
splashLbl.textContext = splashTxt;
