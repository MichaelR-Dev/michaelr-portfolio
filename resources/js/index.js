import { fadeOut, fadeIn, fadeInSocials, fadeOutSocials} from "./animations.js";
import {clamp, getTransformX, getTransformY} from "./utils.js";
import { addFloatEvents, addHoverEvents, addSelectDivFloatEvents } from "./EventHandlers.js";

//*Global Variables
  //stateMachine for cross-module state values
let stateMachine = { toggleAboutMe: false };


//!ON DOM CONTENT LOADED
window.addEventListener("load", function(){

  //*Element Variables
  const mainImage = document.getElementById("center");
  const mainImageContainer = document.getElementById("centerBase");
  const selectContainer = document.querySelector("#sectionSelect");
  const selectable = document.getElementsByClassName("masked");
  const socials = document.getElementsByClassName("socials");
  const banner = document.getElementById("banner");
  const difference = document.getElementById("difference");
  const aboutMeText = document.getElementById("aboutMeText");
  
  //*Func Invocations
  addHoverEvents(selectable, stateMachine);
  addFloatEvents(mainImage, stateMachine);
  addSelectDivFloatEvents(selectContainer, this.document);
  mainImage.onclick = () => {  toggleInfo(selectable, socials, undefined, undefined, aboutMeText);};

})


//*FUNCTIONS

/**
 * @brief toggleInfo toggles landing elements on/off for about info
 * 
 * @param {HTMLCollection} selectables Selectable section elements
 * @param {HTMLCollection} socials Social links/buttons
 * @param {HTMLImageElement} [banner] Banner (optional) for about page
 * @param {HTMLImageElement} [difference] Difference (optional) for white page background
 */
const toggleInfo = (selectables, socials, banner, difference, aboutMeText) => {
  stateMachine.toggleAboutMe = !stateMachine.toggleAboutMe;

  for (const el of selectables) {
    if(el.style.display !== "none"){
        el.animate(fadeOut.animation, fadeOut.timing);
        setTimeout(() => { el.style.display = 'none'; aboutMeText.style.display = 'initial'; aboutMeText.animate(fadeInSocials.animation, fadeInSocials.timing);}, fadeOut.timing.duration + 20);
    }else{

      aboutMeText.animate(fadeOutSocials.animation, fadeOutSocials.timing);
      setTimeout(() => { el.style.display = 'initial';  aboutMeText.style.display = 'none'; el.animate(fadeIn.animation, fadeIn.timing);}, fadeOut.timing.duration + 20);

    }
  }

  for (const el of socials) {
    if(el.style.display !== "none"){
        el.animate(fadeOutSocials.animation, fadeOutSocials.timing);
        setTimeout(() => { el.style.display = 'none';}, fadeOutSocials.timing.duration + 100);
    }else{
      el.style.display = 'initial'; 
      el.animate(fadeInSocials.animation, fadeInSocials.timing);
    }
  }

  if(stateMachine.toggleAboutMe && typeof difference !== undefined){
    setInterval(() => {
      difference.animate([
        { opacity: '0%' },
        { opacity: '100%'}
      ], {
        duration: 50,
        iterations: 1,
        fill: "forwards"
    });
      setTimeout(()=>{
        difference.animate([
          { opacity: '100%' },
          { opacity: '0%'}
        ], {
          duration: 50,
          iterations: 1,
          fill: "forwards"
      });
      },100)
    }, 2000);
  }

  if(typeof banner !== undefined && banner.style.display !== "none"){
    banner.animate(fadeOutBanner.animation, fadeOutBanner.timing);
    setTimeout(() => { banner.style.display = 'none';}, fadeOutBanner.timing.duration);
  }else if(typeof banner !== undefined){
    banner.style.display = 'initial'; 
    banner.animate(fadeInBanner.animation, fadeInBanner.timing);
  }
}