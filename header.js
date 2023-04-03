// document.addEventListener("DOMContentLoaded", function() {
//   let hamburger = document.querySelector(".hamburger");

//   hamburger.onclick = function() {
//     let navBar = document.querySelector(".nav-bar");
//     navBar.classList.toggle("active");
    
//   }
// }); 


document.addEventListener("DOMContentLoaded", function() {
  let hamburger = document.querySelector(".hamburger");

  hamburger.onclick = function() {
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");

    let line1 = document.querySelector("#line1");
    let line2 = document.querySelector("#line2");
    let line3 = document.querySelector("#line3");

    // Si la clase active está presente, cambia la forma de las líneas a una X
    if (navBar.classList.contains("active")) {
      line1.style.transform = "rotate(45deg)";
      line2.style.transform = "scale(0)";
      line3.style.transform = "rotate(-45deg)";
    } else {
      // De lo contrario, regresa las líneas a su forma original
      line1.style.transform = "none";
      line2.style.transform = "none";
      line3.style.transform = "none";
    }
  }
});



