import { insertNewDOMElement } from '../functions/functions.js';
import { language, letter, specKey } from '../data/data.js';

class Key {
  constructor(parent, keyCode) {
    this.keyEl = insertNewDOMElement(parent, 'button', 'key');
    this.keyEl.dataset.code = keyCode;

    if (keyCode in specKey) {
      this.keyEl.innerHTML = specKey[keyCode];
    } else {
      this.keyEl.innerHTML = letter[language][keyCode].key;
    }
  }
}

export default Key;
