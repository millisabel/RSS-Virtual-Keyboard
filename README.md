# [RSS-Virtual-Keyboard](https://millisabel.github.io/RSS-Virtual-Keyboard/src/)

###Minimal scope:

[x] - the generation of DOM elements is implemented. body in the index.html is empty (can contain only script tag): +20
[x] - pressing a key on a physical keyboard highlights the key on the virtual keyboard (you should check keystrokes of numbers, letters, punctuation marks, backspace, del (if it's present), enter, shift, alt, ctrl, tab, caps lock, space, arrow keys: +10

###Basic scope:

[x] - switching keyboard layouts between English and another language is implemented. Selected language should be saved and used on page reload. A keyboard shortcut for switching a language should be specified on the page: +15
[x] - mouse clicks on buttons of the virtual keyboard or pressing buttons on a physical keyboard inputs characters to the input field (text area): +15

###Extra scope:

[x] - animation of pressing a key is implemented: +15

Technical requirements:

[x] - usage of ES6+ features (classes, property destructuring, etc): +15
usage of ESLint: +10
[x] - requirements to the repository, commits and pull request are met: +10

###Penalties:

- there're errors related to the executable code (errors like favicon.ico: Failed to load resource: the server responded with a status of 404 are not taken into account) or there're eslint-config-airbnb-base warnings: -15
Penalties are imposed only by the course administration:

- the repository (virtual-keyboard) or development branch (development) name does not comply with the requirements: -110
less than 5 commits are made or commits are made on the same day: -110 or expel from the course 
- a significant portion of the application was completed after the deadline: -110 or expel from the course