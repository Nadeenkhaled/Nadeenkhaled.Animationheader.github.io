const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");


const tl = new TimelineMax();

// start from (hero) for (1sec) from (height 0) end(height 100) 
tl.fromTo(hero, 1, {height: "0%"}, {height: "100%", ease: Power2.easeInOut}) 

.fromTo(hero, 1.2,{width: "100%"}, {width: "80%", ease: Power2.easeInOut})
//start from (slider) for (1.2sec) from outside the screen to 0.(to start with width -= the same time of the width)
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")

.fromTo(logo, 0.5, {opacity: 0, x: 30 }, {opacity:1, x: 0}, "-=0.5")


.fromTo(headline, 0.5, {opacity: 0, x: 30 }, {opacity:1, x: 0}, "-=0.5")
;
