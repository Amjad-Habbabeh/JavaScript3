// I build function for creating dom element:
function creatElementAndAppend(parent, child, optional = {}) {
  const elem = document.createElement(child);
  parent.append(elem);
  Object.entries(optional).forEach(([key, value]) => {
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  });

  return elem;
}
