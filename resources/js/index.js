import { fadeOut, fadeIn, hoverFadeIn, hoverFadeOut, floatIn, floatOut, fadeInBanner, fadeOutBanner, fadeInSocials, fadeOutSocials} from "../js/animations.js";

let toggleAboutMe = false;

//ON DOM CONTENT LOADED
window.addEventListener("load", function(){
  const mainImage = document.getElementById("center");
  const mainImageContainer = document.getElementById("centerBase");
  const selectable = document.getElementsByClassName("masked");
  const socials = document.getElementsByClassName("socials");
  const videoBG = document.getElementById("videoBG");
  const banner = document.getElementById("banner");
  const difference = document.getElementById("difference");
  

  addHoverEvents(selectable);
  addFloatEvents(mainImage);

  mainImage.onclick = () => {  toggleInfo(selectable, socials, banner, difference);};
})



const toggleInfo = (selectables, socials, banner, difference) => {
  toggleAboutMe = !toggleAboutMe;

  for (const el of selectables) {
    if(el.style.display !== "none"){
        el.animate(fadeOut.animation, fadeOut.timing);
        setTimeout(() => { el.style.display = 'none';}, fadeOut.timing.duration);
    }else{
      el.style.display = 'initial'; 
      el.animate(fadeIn.animation, fadeIn.timing);
    }
  }

  /*if(toggleAboutMe){
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

  }*/



  for (const el of socials) {
    if(el.style.display !== "none"){
        el.animate(fadeOutSocials.animation, fadeOutSocials.timing);
        setTimeout(() => { el.style.display = 'none';}, fadeOutSocials.timing.duration);
    }else{
      el.style.display = 'initial'; 
      el.animate(fadeInSocials.animation, fadeInSocials.timing);
    }
  }

  /*if(banner.style.display !== "none"){
    banner.animate(fadeOutBanner.animation, fadeOutBanner.timing);
    setTimeout(() => { banner.style.display = 'none';}, fadeOutBanner.timing.duration);
  }else{
    banner.style.display = 'initial'; 
    banner.animate(fadeInBanner.animation, fadeInBanner.timing);
  }*/
}

const addHoverEvents = (selectable) => {
  for (const el of selectable) {
    el.addEventListener("mouseover", () => {

      if(window.getComputedStyle(el).getPropertyValue("opacity") !== 1 && !toggleAboutMe) {
        el.animate([{opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`}, {opacity: "1"}], hoverFadeIn.timing);
      }

      let altEl;
      if(window.getComputedStyle(el).getPropertyValue("opacity") !== 1 && !toggleAboutMe) {
        switch(el.classList.item(el.classList.length - 1)){
          case 'tl':
            altEl = document.getElementsByClassName("labeltl")[0];
            altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "1"}], hoverFadeIn.timing);
            break;

          case 'bl':
            altEl = document.getElementsByClassName("labelbl")[0];
            altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "1"}], hoverFadeIn.timing);
            break;

          case 'tr':
            altEl = document.getElementsByClassName("labeltr")[0];
            altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "1"}], hoverFadeIn.timing);
            break;

          case 'br':
            altEl = document.getElementsByClassName("labelbr")[0];
            altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "1"}], hoverFadeIn.timing);
            break;

          default:
            break;
        }
      }


    })
  
    el.addEventListener("mouseout", () => {
  
      if(window.getComputedStyle(el).getPropertyValue("opacity") !== 0.35) {
        el.animate([{opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}`}, {opacity: "0.65"}], hoverFadeOut.timing);
      }

      let altEl;

      switch(el.classList.item(el.classList.length - 1)){
        case 'tl':
          altEl = document.getElementsByClassName("labeltl")[0];
          altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "0"}], {
        duration: 200,
        iterations: 1,
        fill: "both"
    });
          break;

        case 'bl':
          altEl = document.getElementsByClassName("labelbl")[0];
          altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "0"}], {
        duration: 200,
        iterations: 1,
        fill: "both"
    });
          break;

        case 'tr':
          altEl = document.getElementsByClassName("labeltr")[0];
          altEl.animate([{opacity: `${window.getComputedStyle(altEl).getPropertyValue("opacity").toString()}`}, {opacity: "0"}], {
        duration: 200,
        iterations: 1,
        fill: "both"
    });
          break;

        case 'br':
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

const addFloatEvents = (el) => {
  el.addEventListener("mouseover", () => {
    if(!toggleAboutMe){
      el.animate([{ transform: `translateY(${getTransformY(el)}px)`, opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}` }, { transform: "translateY(-20px)", opacity: "1" }], floatIn.timing);
    }
  })

  el.addEventListener("mouseout", () => {
    if(!toggleAboutMe){
      el.animate([{ transform: `translateY(${getTransformY(el)}px)`, opacity: `${window.getComputedStyle(el).getPropertyValue("opacity").toString()}` }, { transform: "translateY(0px)", opacity: "0.65" }], floatOut.timing);
    }
  })
}

const getTransformY = (el) => {
  return new WebKitCSSMatrix(window.getComputedStyle(el).transform).f;
}
