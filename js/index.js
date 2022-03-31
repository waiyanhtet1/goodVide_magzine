AOS.init();

// navabr
var tll = gsap.timeline();
tll.from(".content",{
    duration: 1,
    opacity: 1,
    skewY: "10%",
    x: "5%",
    stagger: {
        amount: .4
    }
});
tll.from(".img-divs",{
    duration: .5,
    opacity: 0,
    y: "5%",
    stagger: {
        amount: .4
    }
});

var tl = gsap.timeline(
    {
        paused: "true"
    }
);

tl.to(".menu",{
    duration: .5,
    y: "0%",
    opacity: 1
})
tl.from(".ul",{
    duration: .5,
    y: "-20%",
    opacity: 0,
    stagger: {
        amount: .4
    }
});
tl.from(".showcase",{
    duration: 1,
    x: "-4%",
    opacity: 0,
    stagger: {
        amount: .4
    }
});
function toggle(){
    tl.play();
}
function togglerev(){
    tl.reverse();
}


window.addEventListener("scroll",()=>{
  var header = document.querySelector("header");
  header.classList.toggle("active",window.scrollY > 0);
});
var navbar_tl = gsap.timeline();
navbar_tl.fromTo("header .logo, header ul li",{
  opactiy: 0,
  y: "-100%"
},{
  opactiy: 1,
  duration: 1.5,
  y:"0%",
  stagger:0.25
});

const up = document.querySelector('.up');
window.onscroll = () => {
  if(window.scrollY > 300) up.style.display = 'block';
  else up.style.display = 'none';
}
up.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
});

        var swiper2 = new Swiper(".mySwiper-2", {
            slidesPerView: 3,
            spaceBetween: 5,
            loop: true,
            effect: "coverflow",
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
            navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
            autoplay: {
              delay: 2000
            },
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 2
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 5
              },
              1000: {
                slidesPerView: 2
              },
              1300: {
                slidesPerView: 3
              }
            }
          });

        
const header_tl = gsap.timeline();
header_tl.from(".header-container h1,.header-container p,.header-container .bottom-section",{
    duration : 1,
    y: 300,
    opactiy: 0,
    stagger: {
        amount: 0.5,
    }
});