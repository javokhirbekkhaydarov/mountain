
const navAnim = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    // toggle
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      
      //  Animate items
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkMove 0.4s linear forwards ${
            index / 7 + 0.45
          }s`;
        }
      });
      burger.classList.toggle("toggle");
    });
    window.addEventListener("DOMContentLoaded", function () {
        window.addEventListener("scroll", function () {
          const nav = document.querySelector("nav");
          nav.classList.toggle("sticy", window.scrollY > 0);
         burger.classList.toggle("burger-left", window.scrollY > 0)
        });
      });
    // toggle
  };
  navAnim();


  window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", () => {
        const rights = document.querySelectorAll(".right");
  
        for (let i = 0; i < rights.length; i++) {
            let windowHeitgh = window.innerHeight;
            let containerRight = rights[i].getBoundingClientRect().top;
            let containerPoint = 50;
  
            if (containerRight < windowHeitgh - containerPoint) {
                rights[i].classList.add("Ractive");
            }
        };
        rights.forEach((right, index) => {
          if (right.style.animation) {
            right.style.animation = "";
          } else {
            right.style.animation = `right 0.5s linear forwards ${
              index / 7 + 0.7
            }s`;
          }
        });
  
  
        const lefts = document.querySelectorAll(".left");
  
        for (let i = 0; i < lefts.length; i++) {
            let windowHeitgh = window.innerHeight;
            let containerLeft = lefts[i].getBoundingClientRect().top;
            let containerPoint = 50;
  
            if (containerLeft < windowHeitgh - containerPoint) {
              lefts[i].classList.add("leftActiv");
            }
        
            
        };
        lefts.forEach((left, index) => {
          if (left.style.animation) {
            left.style.animation = "";
          } else {
            left.style.animation = `link 0.5s linear forwards ${
              index / 7 + 0.45
            }s`;
          }
        });
  
        const top = document.querySelectorAll(".toTop");
  
        for (let i = 0; i < top.length; i++) {
            let windowHeitgh = window.innerHeight;
            let containerTop = top[i].getBoundingClientRect().top;
            let containerPoint = 50;
  
            if (containerTop < windowHeitgh - containerPoint) {
                top[i].classList.add("active");
            };
        };
    });
  
   
  });