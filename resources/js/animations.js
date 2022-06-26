const hoverFadeOut = {

    animation: [
        {opacity: "100%"},
        {opacity: "15%"}
    ],
    timing: {
        duration: 750,
        iterations: 1,
        fill: "both"
    }
}

const hoverFadeIn = {
    animation: [
        {opacity: "15%"},
        {opacity: "100%"}
    ],
    timing: {
        duration: 300,
        iterations: 1,
        fill: "both"
    }
}

const fadeOutBanner = {
    animation: [
        { opacity: '15%' },
        { opacity: '1%'}
      ],
    timing: {
        duration: 500,
        iterations: 1,
        fill: "forwards",
        easing: "ease-out"
    }
}

const fadeInBanner = {
    animation: [
        { opacity: '0%' },
        { opacity: '15%'}
      ],
    timing: {
        duration: 1000,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in"
    }
}

const fadeIn = {
    animation: [
        { opacity: '0%' },
        { opacity: '35%'}
      ],
    timing: {
        duration: 500,
        iterations: 1,
        fill: "forwards"
    }
}

const fadeOut = {
    animation: [
        { opacity: '35%' },
        { opacity: '1%'}
      ],
    timing: {
        duration: 500,
        iterations: 1,
        fill: "forwards"
    }
}

const fadeInSocials = {
    animation: [
        { opacity: '0%' },
        { opacity: '100%'}
      ],
    timing: {
        duration: 500,
        iterations: 1,
        fill: "forwards"
    }
}

const fadeOutSocials = {
    animation: [
        { opacity: '100%' },
        { opacity: '1%'}
      ],
    timing: {
        duration: 500,
        iterations: 1,
        fill: "forwards"
    }
}

const floatIn = {
    animation: [
        { transform: "translateY(0)" },
        { transform: "translateY(-20px)" }
    ],
    timing: {
        duration: 500,
        iterations: 1,
        fill: "forwards",
        easing: "ease-out"
    }
  }
const floatOut = {
    animation: [
        { transform: "translateY(-20px)" },
        { transform: "translateY(0)" }
    ],
    timing: {
        duration: 500,
        iterations: 1,
        fill: "forwards",
        easing: "ease-out"
    }

  }

export {fadeOut, fadeIn, hoverFadeIn, hoverFadeOut, floatIn, floatOut, fadeInBanner, fadeOutBanner, fadeInSocials, fadeOutSocials};