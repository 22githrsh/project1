gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  multiplier:.8
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl = gsap.timeline({
    scrollTrigger:{
        scroller:".main",
        trigger:".page3",
        scrub:3,
        pin:true,
        start:"top top",
    }
})
tl
tl.to(".manifesto",{
    marginRight:"0%"
})
tl.to(".founding",{
    right:"0%"
})
var tl1 = gsap.timeline({
    scrollTrigger:{
        scroller:".main",
        trigger:".page5",
        scrub:3,
        pin:true,
        start:"top top",
    }
})
tl1
tl1.to("#wi1",{
    bottom: "0%"
})
tl1.to("#wi2",{
    bottom:"2%"
})
tl1.to("#wi4",{
    bottom: "0%"
})
tl1.to(".page5 h1",{
    opacity: "1"    
})
tl1.to("#wi3",{
    bottom: "0.5%"
})
 var swiper = new Swiper(".mySwiper", {});

 var tl2 = gsap.timeline({
    scrollTrigger:{
        scroller:".main",
        trigger:".page8",
        scrub:3,
        // pin:true,
        // markers:true,
        start:"top 80%",
    }
})
tl2
tl2.to(".page8 h1",{
     marginLeft:"50%"
})
