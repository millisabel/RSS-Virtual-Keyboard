import { insertNewDOMElement } from './functions/functions.js';
import VirtualKeyboard from './VirtualKeyboard/VirtualKeyboard.js';

const wrap = insertNewDOMElement(document.body, 'div', 'wrap');
const title = insertNewDOMElement(wrap, 'h1', 'title');
title.innerHTML = 'RSS Виртуальная клавиатура';
const keyboard = new VirtualKeyboard(wrap);
