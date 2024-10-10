const el = document.querySelector("#text");
const text = "Olá! Me chamo Felipe, bem-vindo(a) ao meu portfólio, espero que goste! 😃";
const interval = 100;



function showText(el, text, interval){
    const char = text.split("").reverse();

    const typer = setInterval(() => {
       if(!char.length) {
        return clearInterval(typer);
       }

       const next = char.pop();
       
       el.innerHTML += next;

    }, interval)
}

showText(el, text, interval);

var swiper = new Swiper(".slide-projetos", {
    slidesPerView: 3.5,
    spaceBetween: 1,
    speed: 800,
    pagination: {
      el: "#projetos .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projetos-container .btn-next",
      prevEl: ".projetos-container .btn-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      900:{
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 1,
      }
    }
  });