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

  addNewChar(char, cursorPosition) {
    if (cursorPosition === this.field.value.length) {
      this.field.value += char;
    } else {
      this.field.value = `${this.field.value.slice(0, cursorPosition)}${char}${this.field.value.slice(cursorPosition)}`;
    }
    this.field.selectionStart = cursorPosition + 1;
    this.field.selectionEnd = cursorPosition + 1;
    this.field.focus();
  }

  getCursorPosition() {
    return this.field.selectionStart;
  }
}

export default Textarea;
