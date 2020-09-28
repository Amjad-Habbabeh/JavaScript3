// I build function for creating dom element:
// the optional argement is optional if we need it to assign attribute or inner text to the element we creating

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
