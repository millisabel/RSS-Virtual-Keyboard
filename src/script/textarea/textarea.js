import { insertNewDOMElement } from '../functions/functions.js';

class Textarea {
  constructor(parent) {
    this.field = insertNewDOMElement(parent, 'textarea', 'textarea');
    this.field.value = '';
  }

  getCursorPosition() {
    return this.field.selectionStart;
  }
}

export default Textarea;
