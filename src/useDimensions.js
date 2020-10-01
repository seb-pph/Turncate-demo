let wrapper;
let inner;

function setDimensions(wrapperEl, innerEl) {
  wrapper = wrapperEl;
  inner = innerEl;
  if (wrapperEl.current) {
    console.log(wrapper.current.offsetHeight);
    console.log(inner.current.offsetHeight);
  }
}

function shouldTurncate() {
  if (wrapper.current) {
    return wrapper.current.offsetHeight > inner.current.offsetHeight;
  }
}

export { setDimensions, shouldTurncate };
