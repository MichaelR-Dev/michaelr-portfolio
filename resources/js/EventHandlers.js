import { hoverFadeIn, hoverFadeOut, floatIn, floatOut, fadeInBanner, fadeOutBanner } from "./animations.js";
import { clamp, getTransformX, getTransformY } from "./utils.js";

const addHoverEvents = (selectable, stateMachine) => {
    for (const el of selectable) {
      el.addEventListener("mouseover", () => {
  
        let altEl;
        if(window.getComputedStyle(el).getPropertyValue("opacity") !== 1 && !stateMachine.toggleAboutMe) {
          switch(el.classList.item(el.classList.length - 1)){
            case 'tl':
              el.animate([
  
                {opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`, 
                transform: `translate(${getTransformX(el)}px, ${getTransformY(el)}px)`}, 
  
                {opacity: "1", transform: `translate(-10vw, -2.5vh)`}], 
  
                {
                  duration: 400,
                  iterations: 1,
                  fill: "both",
                  easing: "ease-out"
              });
  
              altEl = document.getElementsByClassName("labeltl")[0];
              altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "1"}], hoverFadeIn.timing);
              break;
  
            case 'bl':
              el.animate([
  
                {opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`, 
                transform: `translate(${getTransformX(el)}px, ${getTransformY(el)}px)`}, 
  
                {opacity: "1", transform: `translate(-10vw, 2.5vh)`}], 
  
                {
                  duration: 400,
                  iterations: 1,
                  fill: "both",
                  easing: "ease-out"
              });
  
              altEl = document.getElementsByClassName("labelbl")[0];
              altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "1"}], hoverFadeIn.timing);
              break;
  
            case 'tr':
              el.animate([
  
                {opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`, 
                transform: `translate(${getTransformX(el)}px, ${getTransformY(el)}px)`}, 
  
                {opacity: "1", transform: `translate(10vw, -2.5vh)`}], 
  
                {
                  duration: 400,
                  iterations: 1,
                  fill: "both",
                  easing: "ease-out"
              });
  
              altEl = document.getElementsByClassName("labeltr")[0];
              altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "1"}], hoverFadeIn.timing);
              break;
  
            case 'br':
              el.animate([
  
                {opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`, 
                transform: `translate(${getTransformX(el)}px, ${getTransformY(el)}px)`}, 
  
                {opacity: "1", transform: `translate(10vw, 2.5vh)`}], 
  
                {
                  duration: 400,
                  iterations: 1,
                  fill: "both",
                  easing: "ease-out"
              });
  
              altEl = document.getElementsByClassName("labelbr")[0];
              altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "1"}], hoverFadeIn.timing);
              break;
  
            default:
              break;
          }
        }
  
  
      })
    
      el.addEventListener("mouseout", () => {
    
        /*if(window.getComputedStyle(el).getPropertyValue("opacity") !== 0.35) {
          el.animate([{opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`}, {opacity: "0.65"}], hoverFadeOut.timing);
        }*/
  
        let altEl;
  
        switch(el.classList.item(el.classList.length - 1)){
          case 'tl':
  
          el.animate([
  
                {opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`, 
                transform: `translate(${getTransformX(el)}px, ${getTransformY(el)}px)`}, 
  
                {opacity: "0.22", transform: `translate(0, 0)`}], 
  
                {
                  duration: 600,
                  iterations: 1,
                  fill: "both",
                  easing: "ease-out"
              });
  
            altEl = document.getElementsByClassName("labeltl")[0];
            altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "0"}], {
          duration: 200,
          iterations: 1,
          fill: "both"
      });
            break;
  
          case 'bl':
  
          el.animate([
  
                {opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`, 
                transform: `translate(${getTransformX(el)}px, ${getTransformY(el)}px)`}, 
  
                {opacity: "0.22", transform: `translate(0, 0)`}], 
  
                {
                  duration: 600,
                  iterations: 1,
                  fill: "both",
                  easing: "ease-out"
              });
  
            altEl = document.getElementsByClassName("labelbl")[0];
            altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "0"}], {
          duration: 200,
          iterations: 1,
          fill: "both"
      });
            break;
  
          case 'tr':
  
          el.animate([
  
                {opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`, 
                transform: `translate(${getTransformX(el)}px, ${getTransformY(el)}px)`}, 
  
                {opacity: "0.22", transform: `translate(0, 0)`}], 
  
                {
                  duration: 600,
                  iterations: 1,
                  fill: "both",
                  easing: "ease-out"
              });
  
            altEl = document.getElementsByClassName("labeltr")[0];
            altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "0"}], {
          duration: 200,
          iterations: 1,
          fill: "both"
      });
            break;
  
          case 'br':
  
          el.animate([
  
                {opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`, 
                transform: `translate(${getTransformX(el)}px, ${getTransformY(el)}px)`}, 
  
                {opacity: "0.22", transform: `translate(0, 0)`}], 
  
                {
                  duration: 600,
                  iterations: 1,
                  fill: "both",
                  easing: "ease-out"
              });
  
            altEl = document.getElementsByClassName("labelbr")[0];
            altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "0"}], {
          duration: 200,
          iterations: 1,
          fill: "both"
      });
            break;
  
          default:
            break;
        }
      })
    }
  }
  
  const addFloatEvents = (el, stateMachine) => {
    el.addEventListener("mouseover", () => {
      if(!stateMachine.toggleAboutMe){
        el.animate([{ transform: `translateY(${getTransformY(el)}px)`, opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}` }, { transform: "translateY(-20px)", opacity: "1" }], floatIn.timing);
      }
    })
  
    el.addEventListener("mouseout", () => {
      if(!stateMachine.toggleAboutMe){
        el.animate([{ transform: `translateY(${getTransformY(el)}px)`, opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}` }, { transform: "translateY(0px)", opacity: "0.65" }], floatOut.timing);
      }
    })
  }

  /*const addSelectDivFloatEvents = (el, doc) => {
    doc.addEventListener("mousemove", (e) => {
      el.style.left = (clamp(e.clientX / 24, 0, 1000) + 320) + "px";
      el.style.top = (clamp(e.clientY / 24, 0, 1000) - 80) + "px";
    });
  }*/

  const addSelectDivFloatEvents = (el, doc) => {

    el.style.left = ((window.innerWidth / 100) * 14.64) + "px";
    el.style.top = -((window.innerHeight / 100) * 3.76) + "px";

    doc.addEventListener("mousemove", (e) => {
      el.style.left = (clamp(e.clientX / 24, 0, window.innerWidth) + ((window.innerWidth / 100) * 12.5)) + "px";
      el.style.top = (clamp(e.clientY / 24, 0, window.innerHeight) - ((window.innerHeight / 100) * 6.01)) + "px";
    });
  }
  
  /*const addSelectDivFloatEvents = (el, doc) => {
    doc.addEventListener("mousemove", (e) => {
      el.style.left = clamp(e.clientX, (window.innerWidth / 100) * 45, (window.innerWidth / 100) * 55) - (el.offsetWidth / 2) + "px";
      el.style.top = clamp(e.clientY, (window.innerHeight / 100) * 48, (window.innerHeight / 100) * 51) - (el.offsetHeight / 2) + "px";
    });
  }*/

  /*const addSelectDivFloatEvents = (el, doc) => {
    doc.addEventListener("mousemove", (e) => {
      el.style.left = ((clamp(e.clientX, (window.innerWidth / 100) * 40, (window.innerWidth / 100) * 60)) / 3.3) + "px";
      el.style.top = ((clamp(e.clientY, (window.innerHeight / 100) * 45, (window.innerHeight / 100) * 50)) - (window.innerHeight / 2)) + "px";
    });
  }*/

export { addFloatEvents, addHoverEvents, addSelectDivFloatEvents }; 