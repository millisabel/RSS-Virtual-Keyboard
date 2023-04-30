import { insertNewDOMElement } from '../functions/functions.js';

class Textarea {
  constructor(parent) {
    this.el = insertNewDOMElement(parent, 'textarea', 'textarea');
    this.el.value = '';
  }

  insertSpace() {
    const textareaField = this.el;
    const { value } = this.el;
    const cursorPosition = textareaField.selectionStart;
    textareaField.value = `${value.slice(0, cursorPosition)} ${value.slice(cursorPosition)}`;
    textareaField.selectionStart = cursorPosition + 1;
    textareaField.selectionEnd = cursorPosition + 1;
    textareaField.focus();
  }

  addNewChar(char, cursorPosition) {
    if (cursorPosition === this.el.value.length) {
      this.el.value += char;
    } else {
      this.el.value = `${this.el.value.slice(0, cursorPosition)}${char}${this.el.value.slice(cursorPosition)}`;
    }
    this.el.selectionStart = cursorPosition + 1;
    this.el.selectionEnd = cursorPosition + 1;
    this.el.focus();
  }

  getCursorPosition() {
    return this.el.selectionStart;
  }
}

export default Textarea;
