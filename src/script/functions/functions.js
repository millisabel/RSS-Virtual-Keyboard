export function insertNewDOMElement(parentEl, tegEl, classEl) {
  const elem = document.createElement(tegEl);
  elem.classList.add(classEl);
  parentEl.add(elem);
  return elem;
}
