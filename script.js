'use strict';
(() => {
  const body = document.querySelector('body');
  const input = document.createElement('input');
  input.type = 'text';
  const paragraph = document.createElement('p');


  body.append(input, paragraph);

  const showText = () => {
    input.addEventListener('change', () => {
    setTimeout(() => {
        paragraph.textContent = input.value;
      }, 300)
    });
  };

  showText();
})();




