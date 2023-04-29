import Textarea from '../textarea/textarea.js';
import Keyboard from '../keyboard/keyboard.js';

class VirtualKeyboard {
  constructor(parent) {
    this.textarea = new Textarea(parent);
    this.keyboard = new Keyboard(parent);
    this.cursorPosition = 0;
    this.capsLock = false;

    this.textarea.field.addEventListener('click', () => {
      this.cursorPosition = this.textarea.getCursorPosition();
    });

    this.keyboard.keyboard.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        const currentKeyCode = event.target.dataset.code;

        switch (currentKeyCode) {
          case 'Space':
            break;
          case 'Backspace':
            break;
          case 'Delete':
            break;
          case 'Enter':
            break;
          case 'Tab':
            break;
          case 'CapsLock':
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
            break;
        }
      }
    });
  }
}

export default VirtualKeyboard;
