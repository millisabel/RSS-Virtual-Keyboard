import Textarea from '../textarea/textarea.js';
import Keyboard from '../keyboard/keyboard.js';
import { language, letter, specKey } from '../data/data.js';

class VirtualKeyboard {
  constructor(parent) {
    this.textarea = new Textarea(parent);
    this.keyboard = new Keyboard(parent);
    this.cursorPosition = 0;
    this.capsLock = false;
    this.shift = false;

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
            this.textarea.addNewChar('\n', this.cursorPosition);
            this.cursorPosition = this.textarea.getCursorPosition();
            break;
          case 'Tab':
            this.textarea.addNewChar('\t', this.cursorPosition);
            this.cursorPosition = this.textarea.getCursorPosition();
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
            this.toggleShift();
            break;
          case 'ControlLeft':
          case 'ControlRight':
            break;
          case 'AltLeft':
          case 'AltRight':
            break;
          case 'ArrowLeft':
          case 'ArrowRight':
            this.textarea.updateCursorPositionHoriz(currentKeyCode, this.cursorPosition);
            this.cursorPosition = this.textarea.getCursorPosition();
            break;
          case 'ArrowUp':
          case 'ArrowDown':
            this.textarea.updateCursorPositionVert(currentKeyCode, this.cursorPosition);
            this.cursorPosition = this.textarea.getCursorPosition();
            break;
          case 'MetaLeft':
            break;
          default:
            this.textarea.addNewChar(currentKeyEl.innerHTML, this.cursorPosition);
            if (this.shift) {
              this.toggleShift();
            }
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

  toggleShift() {
    this.shift = !this.shift;

    this.keyboard.keys.forEach((key) => {
      const currentEl = key;
      const keyCode = currentEl.keyEl.dataset.code;
      let value;

      if (!(keyCode in specKey) && letter[language][keyCode]) {
        if (this.capsLock) {
          if (this.shift) {
            if ('keyShift' in letter[language][keyCode]) {
              value = 'keyShift';
            } else {
              value = 'key';
            }
          } else if ('keyShift' in letter[language][keyCode]) {
            value = 'keyShift';
          } else {
            value = 'keyTab';
          }
        } else if (this.shift) {
          if ('keyShift' in letter[language][keyCode]) {
            value = 'keyShift';
          } else {
            value = 'keyTab';
          }
        } else {
          value = 'key';
        }
        currentEl.keyEl.innerHTML = letter[language][keyCode][value];
      }
    });
  }
}

export default VirtualKeyboard;
