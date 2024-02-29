import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".my-view");

const scrollbar = Scrollbar.init(container, {
  damping: 0.075,
  renderByPixel: true,
  effects: true,
});

// Update ScrollTrigger on SmoothScrollbar scroll event
scrollbar.addListener(ScrollTrigger.update);

// Set up ScrollTrigger scroller proxy for SmoothScrollbar
ScrollTrigger.scrollerProxy(".home-page-wrapper", {
    scrollTop(value) {
      if (arguments.length) {
        scrollbar.scrollTop = value;
      }
      return scrollbar.scrollTop;
    },
  });
