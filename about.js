const canvas = document.getElementById('starfield');
const context = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for(let i=0; i<200; i++) {
  const star = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() + 0.25
  };
  stars.push(star);
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  stars.forEach((star) => {
    star.x += star.speed;
    star.y += star.speed;
    
    if(star.x > canvas.width) {
      star.x = 0;
    }
    if(star.y > canvas.height) {
      star.y = 0;
    }
    
    context.beginPath();
    context.fillStyle = 'white';
    context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    context.fill();
  });
  
  requestAnimationFrame(animate);
}

animate();









const typingTextElement = document.getElementById("typing-text");
const textArray = ["Graphic Designer", "Illustrator", "Web Developer", "AI lover", "many things..."];
let textIndex = 0;
let currentText = "";

function typeText() {
  if (currentText.length < textArray[textIndex].length) {
    currentText = textArray[textIndex].substr(0, currentText.length + 1);
    typingTextElement.innerHTML = currentText;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (currentText.length > 0) {
    currentText = currentText.substr(0, currentText.length - 1);
    typingTextElement.innerHTML = currentText;
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, 1000);
  }
}

setTimeout(typeText, 1000);