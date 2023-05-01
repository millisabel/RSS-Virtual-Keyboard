import { insertNewDOMElement } from './functions/functions.js';
import VirtualKeyboard from './VirtualKeyboard/VirtualKeyboard.js';

const wrap = insertNewDOMElement(document.body, 'div', 'wrap');
const title = insertNewDOMElement(wrap, 'h1', 'title');
title.innerHTML = 'RSS Виртуальная клавиатура';
const keyboard = new VirtualKeyboard(wrap);
const text = insertNewDOMElement(wrap, 'div', 'text');
const str1 = insertNewDOMElement(text, 'p', 'text__row');
const str2 = insertNewDOMElement(text, 'p', 'text__row');
str1.innerHTML = 'Клавиатура создана в операционной системе Windows';
str2.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';
