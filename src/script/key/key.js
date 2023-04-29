import { insertNewDOMElement } from '../functions/functions.js';
import { language, letter, specKey } from '../data/data.js';

class Key {
  constructor(parent, keyCode) {
    this.key = insertNewDOMElement(parent, 'button', 'key');
    this.key.dataset.code = keyCode;

    if (keyCode in specKey) {
      this.key.innerHTML = specKey[keyCode];
    } else {
      this.key.innerHTML = letter[language][keyCode].key;
    }
  }
}

export default Key;
