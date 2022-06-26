function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

const getTransformY = (el) => {
    return new WebKitCSSMatrix(window.getComputedStyle(el).transform).f;
}
  
  const getTransformX = (el) => {
    return new WebKitCSSMatrix(window.getComputedStyle(el).transform).e;
}

export {clamp, getTransformX, getTransformY};