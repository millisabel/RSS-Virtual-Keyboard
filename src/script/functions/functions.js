export function insertNewDOMElement(parentEl, tegEl, classEl) {
  const elem = document.createElement(tegEl);
  elem.classList.add(classEl);
  parentEl.append(elem);
  return elem;
}
