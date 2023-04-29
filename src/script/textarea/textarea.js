import { insertNewDOMElement } from '../functions/functions.js';

class Textarea {
  constructor(parent) {
    this.field = insertNewDOMElement(parent, 'textarea', 'textarea');
    this.field.value = '';
  }

  insertSpace() {
    const textareaField = this.field;
    const { value } = this.field;
    const cursorPosition = textareaField.selectionStart;
    textareaField.value = `${value.slice(0, cursorPosition)} ${value.slice(cursorPosition)}`;
    textareaField.selectionStart = cursorPosition + 1;
    textareaField.selectionEnd = cursorPosition + 1;
    textareaField.focus();
  }

  addNewChar(char) {
    this.field.value += char;
  }

  getCursorPosition() {
    return this.field.selectionStart;
  }
}

export default Textarea;
