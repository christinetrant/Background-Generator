// 1. Write code so that the colour inputs match the background generated on the first page load.

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

// DOM Strings
const body = document.querySelector("body");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const color1a = document.querySelector(".color1a");
const color2a = document.querySelector(".color2a");
const color3a = document.querySelector(".color3a");

const h3Title = document.getElementsByClassName("type")[0];
const h3Colors = document.getElementsByClassName("output")[0];
const button = document.getElementsByClassName("btn");

const twoColorDiv = document.getElementById("twoColorInput");
const threeColorDiv = document.getElementById("threeColorInput");

const radialBtn = document.getElementById("radialBtn");
const linearBtn = document.getElementById("linearBtn");
const twoColorBtn = document.getElementById("twoColorBtn");
const threeColorBtn = document.getElementById("threeColorBtn");
const randomBtn = document.getElementById("randomBtn");

let output;

// If linear button is active
const linearBtnActive = () => {
  linearBtn.classList.add("active");
  radialBtn.classList.remove("active");
  h3Title.textContent = "Linear Gradient: ";
};
// If radial button is active
const radialBtnActive = () => {
  radialBtn.classList.add("active");
  linearBtn.classList.remove("active");
  h3Title.textContent = "Radial Gradient: ";
};
// If two color button is active
const twoBtnActive = () => {
  twoColorBtn.classList.add("active");
  threeColorBtn.classList.remove("active");
  // Hide the three color input div and show the two color input
  twoColorDiv.classList.remove("hidden");
  threeColorDiv.classList.add("hidden");
};
// If three color button is active
const threeBtnActive = () => {
  threeColorBtn.classList.add("active");
  twoColorBtn.classList.remove("active");
  // Hide the two color input div and show the three color input
  threeColorDiv.classList.remove("hidden");
  twoColorDiv.classList.add("hidden");
};

// If Linear & Two Color Button Selected
const linearTwo = () => {
  output = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  // Change the background to have new colors
  body.style.backgroundImage = output;
  // Change the classes so the linear button has active class
  linearBtnActive();
  // Change the classes so the two color button has active class
  twoBtnActive();
  // Display color values in h3 tag
  // h3Colors.textContent = `${color1.value}   ➡   ${color2.value}`;
  h3Colors.textContent = output;
};

// If Linear & Three Color Button Selected
const linearThree = () => {
  output = `linear-gradient(to right, ${color1a.value}, ${color2a.value}, ${color3a.value})`;
  // Change the background to have new colors
  body.style.backgroundImage = output;
  // Change the classes so the linear button has active class
  linearBtnActive();
  // Change the classes so the three color button has active class
  threeBtnActive();
  // Display color values in h3 tag
  // h3Colors.textContent = `${color1a.value}   ➡   ${color2a.value}   ➡   ${color3a.value}`;
  h3Colors.textContent = output;
};

// If Radial & Two Color Button Selected
const radialTwo = () => {
  output = `radial-gradient(${color1.value}, ${color2.value})`;
  // Change the background to have new colors
  body.style.backgroundImage = output;
  // Change the classes so the radial button has active class
  radialBtnActive();
  // Change the classes so the two color button has active class
  twoBtnActive();
  // Display color values in h3 tag
  // h3Colors.textContent = `${color1.value}   ➡   ${color2.value}`;
  h3Colors.textContent = output;
};

// If Radial & Three Color Button Selected
const radialThree = () => {
  output = `radial-gradient(${color1a.value}, ${color2a.value}, ${color3a.value})`;
  // Change the background to have new colors
  body.style.backgroundImage = output;
  // Change the classes so the radial button has active class
  radialBtnActive();
  // Change the classes so the three color button has active class
  threeBtnActive();
  // Display color values in h3 tag
  // h3Colors.textContent = `${color1a.value}   ➡   ${color2a.value}   ➡   ${color3a.value}`;
  h3Colors.textContent = output;
};
// If Two Color Button Selected
const two = () => {
  // If the linear button is active we want the output to be linear gradient
  if (linearBtn.classList.contains("active")) {
    linearTwo();
  } else if (radialBtn.classList.contains("active")) {
    radialTwo();
  }
};
// If Three Color Button Selected
const three = () => {
  if (linearBtn.classList.contains("active")) {
    linearThree();
  } else if (radialBtn.classList.contains("active")) {
    radialThree();
  }
};
// If Linear Button Selected
const linear = () => {
  // If the linear button is active we want the output to be linear gradient
  if (twoColorBtn.classList.contains("active")) {
    linearTwo();
  } else if (threeColorBtn.classList.contains("active")) {
    linearThree();
  }
};
// If Radial Button Selected
const radial = () => {
  // otherwise we'd like it to be a radial gradient
  if (twoColorBtn.classList.contains("active")) {
    radialTwo();
  } else if (threeColorBtn.classList.contains("active")) {
    radialThree();
  }
};
// When the color is changed through the input element
const colorInput = () => {
  // If the linear button is active we want the output to be linear gradient
  if (
    linearBtn.classList.contains("active") &&
    twoColorBtn.classList.contains("active")
  ) {
    linearTwo();
    // console.log("input function - 2 button linear");
  } else if (
    linearBtn.classList.contains("active") &&
    threeColorBtn.classList.contains("active")
  ) {
    linearThree();
    // console.log("input function - 3 button linear");
    // otherwise we'd like it to be a radial gradient
  } else if (
    radialBtn.classList.contains("active") &&
    twoColorBtn.classList.contains("active")
  ) {
    radialTwo();
    // console.log("input function - 2 button radial");
  } else if (
    radialBtn.classList.contains("active") &&
    threeColorBtn.classList.contains("active")
  ) {
    radialThree();
    // console.log("input function - 3 button radial");
  }
};

// Generate a random hex code for random color function - Found on https://dev.to/thecodepixi/what-the-hex-how-to-generate-random-hex-color-codes-in-javascript-21n
const generateHexCode = () => {
  let randomHexCode = "#";
  while (randomHexCode.length < 7) {
    randomHexCode += Math.floor(Math.random() * 15).toString(16);
  }
  return randomHexCode;
};

// Random Button Function
const random = () => {
  let randomColor1 = generateHexCode();
  let randomColor3 = generateHexCode();
  let randomColor2 = generateHexCode();

  // If the linear button is active we want the output to be linear gradient
  if (
    linearBtn.classList.contains("active") &&
    twoColorBtn.classList.contains("active")
  ) {
    // Change the background to have new colors
    body.style.backgroundImage = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
    // Change the classes so the linear button has active class
    linearBtnActive();
    // Change the classes so the two color button has active class
    twoBtnActive();
    // Display color values in h3 tag
    h3Colors.textContent = `${randomColor1}   ➡   ${randomColor2}`;

    color1.value = randomColor1;
    color2.value = randomColor2;
    // console.log("RANDOM function - 2 button linear", randomColor1, randomColor2);
  } else if (
    linearBtn.classList.contains("active") &&
    threeColorBtn.classList.contains("active")
  ) {
    // Change the background to have new colors
    body.style.backgroundImage = `linear-gradient(to right, ${randomColor1}, ${randomColor2}, ${randomColor3})`;
    // Change the classes so the linear button has active class
    linearBtnActive();
    // Change the classes so the three color button has active class
    threeBtnActive();
    // Display color values in h3 tag
    h3Colors.textContent = `${randomColor1}   ➡   ${randomColor2}   ➡   ${randomColor3}`;

    color1a.value = randomColor1;
    color2a.value = randomColor2;
    color3a.value = randomColor3;
    // console.log("RANDOM function - 3 button linear", randomColor1, randomColor2, randomColor3);
    // otherwise we'd like it to be a radial gradient
  } else if (
    radialBtn.classList.contains("active") &&
    twoColorBtn.classList.contains("active")
  ) {
    // Change the background to have new colors
    body.style.backgroundImage = `radial-gradient(${randomColor1}, ${randomColor2})`;
    // Change the classes so the radial button has active class
    radialBtnActive();
    // Change the classes so the two color button has active class
    twoBtnActive();
    // Display color values in h3 tag
    h3Colors.textContent = `${randomColor1}   ➡   ${randomColor2}`;

    color1.value = randomColor1;
    color2.value = randomColor2;
    // console.log("RANDOM function - 2 button radial", randomColor1, randomColor2);
  } else if (
    radialBtn.classList.contains("active") &&
    threeColorBtn.classList.contains("active")
  ) {
    // Change the background to have new colors
    body.style.backgroundImage = `radial-gradient(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    // Change the classes so the radial button has active class
    radialBtnActive();
    // Change the classes so the three color button has active class
    threeBtnActive();
    // Display color values in h3 tag
    h3Colors.textContent = `${randomColor1}   ➡   ${randomColor2}   ➡   ${randomColor3}`;

    color1a.value = randomColor1;
    color2a.value = randomColor2;
    color3a.value = randomColor3;
    // console.log("RANDOM function - 3 button radial", randomColor1, randomColor2);
  }
};

// Hover over buttons
const hover = (event) => {
  let linearTwoBg = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  let linearThreeBg = `linear-gradient(to right, ${color1a.value}, ${color2a.value}, ${color3a.value})`;
  let radialTwoBg = `radial-gradient(${color1.value}, ${color2.value})`;
  let radialThreeBg = `radial-gradient(${color1a.value}, ${color2a.value}, ${color3a.value})`;

  if (
    linearBtn.classList.contains("active") &&
    twoColorBtn.classList.contains("active")
  ) {
    event.target.style.backgroundImage = linearTwoBg;
    linearBtn.style.backgroundImage = "none";
    twoColorBtn.style.backgroundImage = "none";
  } else if (
    linearBtn.classList.contains("active") &&
    threeColorBtn.classList.contains("active")
  ) {
    event.target.style.backgroundImage = linearThreeBg;
    linearBtn.style.backgroundImage = "none";
    threeColorBtn.style.backgroundImage = "none";
    // otherwise we'd like it to be a radial gradient
  } else if (
    radialBtn.classList.contains("active") &&
    twoColorBtn.classList.contains("active")
  ) {
    event.target.style.backgroundImage = radialTwoBg;
    radialBtn.style.backgroundImage = "none";
    twoColorBtn.style.backgroundImage = "none";
  } else if (
    radialBtn.classList.contains("active") &&
    threeColorBtn.classList.contains("active")
  ) {
    event.target.style.backgroundImage = radialThreeBg;
    radialBtn.style.backgroundImage = "none";
    threeColorBtn.style.backgroundImage = "none";
  }
};
const nohover = (event) => {
  event.target.style.backgroundImage = "none";
};

// EVENT LISTENERS
document.addEventListener("input", colorInput);
linearBtn.addEventListener("click", linear);
radialBtn.addEventListener("click", radial);
twoColorBtn.addEventListener("click", two);
threeColorBtn.addEventListener("click", three);
// randomBtn.addEventListener('click', random);
randomBtn.addEventListener("click", random);

// Loop through all buttons and add gradient effect on hover and remove when mouse leaves
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseenter", hover);
  button[i].addEventListener("mouseleave", nohover);
}

// want linear gradient & two color option to be the initial view
linearTwo();
