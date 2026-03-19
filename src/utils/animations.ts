import { gsap } from "gsap";

function glitch_animation(main: string | HTMLElement) {
  const mainElement = typeof main === "string" ? (document.querySelector(main) as HTMLElement) : main;

  if (!mainElement) return;

  // Set main element to relative positioning
  mainElement.style.position = "relative";

  // Create pseudo-elements
  const r = document.createElement("span");
  const b = document.createElement("span");
  const g = document.createElement("span");

  r.textContent = mainElement.textContent;
  b.textContent = mainElement.textContent;
  g.textContent = mainElement.textContent;

  [r, b, g].forEach((el) => {
    el.style.position = "absolute";
    el.style.opacity = "0";
    el.style.pointerEvents = "none";
    el.style.inset = "0";
  });

  r.className = "text-orange-500";
  b.className = "text-yellow-500";
  g.className = "text-green-500";

  mainElement.appendChild(r);
  mainElement.appendChild(b);
  mainElement.appendChild(g);


  const animate = () => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: gsap.utils.random(5, 10.5),
    });

    tl.to(r, { opacity: 0.9, x: -10, duration: 0.04 })
      .to(g, { opacity: 0.7, x: 6, duration: 0.04 }, "<")
      .to(b, { opacity: 0.8, x: 14, duration: 0.04 }, "<")
      .to({}, { duration: gsap.utils.random(0.05, 0.15) })
      .to([r, g, b], { opacity: 0, x: 0, duration: 0.05 })

      .to({}, { duration: 0.06 })
      .to(main, { x: gsap.utils.random(-16, 16), duration: 0.04, ease: "none" })
      .to(main, { x: gsap.utils.random(-8, 8), duration: 0.03, ease: "none" })
      .to(main, { x: 0, duration: 0.08, ease: "elastic.out(1, 0.4)" })

      .to({}, { duration: 0.08 })
      .to(r, { opacity: 0.85, x: -8, duration: 0.03 })
      .to(b, { opacity: 0.8, x: 10, duration: 0.03 }, "<")
      .to([r, b], { opacity: 0, x: 0, duration: 0.04 })
      .to(r, { opacity: 0.6, x: -5, duration: 0.03 })
      .to(g, { opacity: 0.5, x: 4, duration: 0.03 }, "<")
      .to([r, g], { opacity: 0, x: 0, duration: 0.04 })

      .to({}, { duration: 0.04 })
      .to(main, { skewX: gsap.utils.random(-8, 8), scaleX: 1.04, duration: 0.05 })
      .to(main, { skewX: 0, scaleX: 1, duration: 0.1, ease: "power3.out" });
  };

  gsap.delayedCall(0.6, animate);
}


export { glitch_animation };
