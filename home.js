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



const me = document.querySelector('.me');
const moons = document.querySelector('.moons');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  me.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  moons.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});


/* efecto parallax sirena mar */
const oceanLayer = document.querySelector('.sea-1');
const mermaidLayer = document.querySelector('.sea-2');
const bubblesLayer = document.querySelector('.sea-3');

// mover las capas de la sirena y las burbujas hacia arriba
mermaidLayer.style.transform = "translateY(-50%)";
bubblesLayer.style.transform = "translateY(-100%)";

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;

  oceanLayer.style.transform = `translateY(calc(-20% + ${scrollPosition * 0.2}px))`;
  mermaidLayer.style.transform = `translateY(calc(-50% + ${scrollPosition * 0.4}px))`;
  bubblesLayer.style.transform = `translateY(calc(-50% + ${scrollPosition * 0.4}px))`;
});




// const romantic2 = document.querySelector('.romantic-2');

// const factor1 = 0.31;
// const factor2 = 0.35;
// const factor3 = 0.32;

// window.addEventListener('scroll', function() {
//   const scrollAmount = window.pageYOffset;
  
//   romantic1.style.transform = `translateY(${scrollAmount * factor1}px)`;
//   romantic2.style.transform = `translateY(${scrollAmount * factor2}px)`;
//   romantic3.style.transform = `translateY(${scrollAmount * factor3}px)`;
// });

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
