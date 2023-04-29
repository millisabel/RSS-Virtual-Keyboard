import { insertNewDOMElement } from './functions/functions.js';
import VirtualKeyboard from './VirtualKeyboard/VirtualKeyboard.js';

const main = insertNewDOMElement(document.body, 'main', 'main');
const keyboard = new VirtualKeyboard(main);
