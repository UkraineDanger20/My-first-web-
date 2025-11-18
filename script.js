
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value || "Гість";
  alert(`Дякую, ${name}! Ваше повідомлення відправлено.`);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

function changeBackground() {

  const colors = [
    "rgba(167, 57, 37, 1)",     
    "rgba(65, 125, 148, 1)",   
    "rgb(144, 238, 144)",   
    "rgb(255, 215, 0)",     
    "rgb(173, 216, 230)",   
   
  ];


  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  
  document.body.style.backgroundColor = randomColor;
} 
