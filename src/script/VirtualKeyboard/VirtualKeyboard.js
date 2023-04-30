import Textarea from '../textarea/textarea.js';
import Keyboard from '../keyboard/keyboard.js';
import { language, letter, specKey } from '../data/data.js';

class VirtualKeyboard {
  constructor(parent) {
    this.textarea = new Textarea(parent);
    this.keyboard = new Keyboard(parent);
    this.cursorPosition = 0;
    this.capsLock = false;

    this.textarea.el.addEventListener('click', () => {
      this.cursorPosition = this.textarea.getCursorPosition();
    });

    this.keyboard.keyboard.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        const currentKeyEl = event.target;
        const currentKeyCode = event.target.dataset.code;

        switch (currentKeyCode) {
          case 'Space':
            this.textarea.insertSpace();
            this.cursorPosition = this.textarea.getCursorPosition();
            break;
          case 'Backspace':
            this.textarea.deletePrevChar(this.cursorPosition);
            this.cursorPosition = this.textarea.getCursorPosition();
            break;
          case 'Delete':
            this.textarea.deleteNextChar(this.cursorPosition);
            this.cursorPosition = this.textarea.getCursorPosition();
            break;
          case 'Enter':
            break;
          case 'Tab':
            break;
          case 'CapsLock':
            this.capsLock = !this.capsLock;
            this.keyboard.keys.forEach((key) => {
              const currentEl = key;
              const keyCode = currentEl.keyEl.dataset.code;
              let value;

              if (this.capsLock) {
                value = 'keyTab';
              } else {
                value = 'key';
              }

              if (!(keyCode in specKey) && letter[language][keyCode][value]) {
                currentEl.keyEl.innerHTML = letter[language][keyCode][value];
              }
            });
            break;
          case 'ShiftLeft':
          case 'ShiftRight':
            break;
          case 'ControlLeft':
          case 'ControlRight':
            break;
          case 'AltLeft':
          case 'AltRight':
            break;
          case 'ArrowLeft':
            break;
          case 'ArrowUp':
            break;
          case 'ArrowRight':
            break;
          case 'ArrowDown':
            break;
          case 'MetaLeft':
            break;
          default:
            this.textarea.addNewChar(currentKeyEl.innerHTML, this.cursorPosition);
            this.cursorPosition = this.textarea.getCursorPosition();
            break;
        }
      }
    });

    document.addEventListener('keydown', (event) => {
      this.textarea.el.focus();
      this.keyboard.keys.forEach((key) => {
        if (key.keyEl.dataset.code === event.code) {
          key.keyEl.classList.add('key--active');
        }
      });
    });

    document.addEventListener('keyup', (event) => {
      this.keyboard.keys.forEach((key) => {
        if (key.keyEl.dataset.code === event.code) {
          key.keyEl.classList.remove('key--active');
          this.cursorPosition = this.textarea.getCursorPosition();
        }
      });
    });
  }
}

export default VirtualKeyboard;
