
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin)
gsap.from("#role", {
  opacity: 0,
  scale: 0.8,
  y: 20,
  duration: 1,
  ease: "power2.out",
});