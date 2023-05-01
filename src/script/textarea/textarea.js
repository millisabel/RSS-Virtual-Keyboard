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

  deletePrevChar(cursorPosition) {
    this.el.value = `${this.el.value.slice(0, cursorPosition - 1)}${this.el.value.slice(cursorPosition)}`;
    this.el.selectionStart = cursorPosition - 1;
    this.el.selectionEnd = cursorPosition - 1;
    this.el.focus();
  }

  deleteNextChar(cursorPosition) {
    if (cursorPosition < this.el.value.length) {
      this.el.value = `${this.el.value.slice(0, cursorPosition)}${this.el.value.slice(cursorPosition + 1)}`;
      this.el.selectionStart = cursorPosition;
      this.el.selectionEnd = cursorPosition;
    }
    this.el.focus();
  }

  updateCursorPositionHoriz(arrow, cursorPosition) {
    this.el.focus();

    const text = this.el.value;
    let newCursorPosition = cursorPosition;

    if (arrow === 'ArrowLeft' && text.length !== 0 && cursorPosition) {
      newCursorPosition = cursorPosition - 1;
    }
    if (arrow === 'ArrowRight' && text.length > cursorPosition) {
      newCursorPosition = cursorPosition + 1;
    }

    this.el.setSelectionRange(newCursorPosition, newCursorPosition);
  }

  updateCursorPositionVert(arrow, cursorPosition) {
    this.el.focus();

    const textarea = this.el;
    const currentValue = textarea.value;

    const lines = currentValue.split('\n');
    const currentLineIndex = currentValue.substr(0, cursorPosition).split('\n').length - 1;
    const currentLine = lines[currentLineIndex];
    const currentLineStartPosition = currentValue.lastIndexOf('\n', cursorPosition - 1) + 1;
    const cursorPositionFromLineStart = cursorPosition - currentLineStartPosition;

    let newtLineCursorPosition;

    if (arrow === 'ArrowUp') {
      if (currentLineIndex > 0) {
        const newLineIndex = currentLineIndex - 1;
        const newLine = lines[newLineIndex];

        if (cursorPositionFromLineStart >= newLine.length) {
          newtLineCursorPosition = cursorPosition - cursorPositionFromLineStart - 1;
        } else {
          newtLineCursorPosition = cursorPosition - newLine.length - 1;
        }
      }
    }

    if (arrow === 'ArrowDown') {
      if (currentLineIndex < lines.length - 1) {
        const newLineIndex = currentLineIndex + 1;
        const newLine = lines[newLineIndex];

        if (cursorPositionFromLineStart <= newLine.length) {
          newtLineCursorPosition = cursorPosition + currentLine.length + 1;
        } else {
          const newLength = newLine.length + 1;
          const currentEndLength = currentLine.length - cursorPositionFromLineStart;
          newtLineCursorPosition = cursorPosition + newLength + currentEndLength;
        }
      }
    }

    if (newtLineCursorPosition) {
      textarea.setSelectionRange(newtLineCursorPosition, newtLineCursorPosition);
    }
  }
}

export default Textarea;
