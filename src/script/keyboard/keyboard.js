import { insertNewDOMElement } from '../functions/functions.js';
import { keys } from '../data/data.js';
import Key from '../key/key.js';

function insertKeysEl(parent) {
  const arrKeys = [];

  keys.forEach((arr) => {
    const keyboardRow = insertNewDOMElement(parent, 'div', 'keyboard__row');
    arr.forEach((key) => {
      arrKeys.push(new Key(keyboardRow, key));
    });
  });

  return arrKeys;
}

class Keyboard {
  constructor(parent) {
    this.keyboard = insertNewDOMElement(parent, 'div', 'keyboard');
    this.keys = insertKeysEl(this.keyboard);
  }
}

export default Keyboard;
