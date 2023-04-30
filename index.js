import { arrEn } from './obj.js';
import { header } from './header.js';
import { comments } from './comments.js';
import { textAreaRender } from './textarea.js';

let row;
let clickCtrlAlt = 0;
let clickCapsLock = 0;

header();
comments();
textAreaRender();

//! -------------------- Отрисовка кнопки--------------------
const createBtn = (value) => {
  const btn = document.createElement('button');
  btn.className = 'button';
  if (value === 'Tab' || value === 'Ctrl' || value === 'Alt' || value === 'Win' || value === 'Del') {
    btn.classList.add('special');
  }
  if (value === 'CapsLock' || value === 'Backspace' || value === 'Shift' || value === 'Enter') {
    btn.classList.add('max');
  }
  if (value === 'Space') {
    btn.classList.add('space');
  }

  btn.textContent = value;

  // console.log('value',value,'clickCapsLock',clickCapsLock)
  if (value === 'CapsLock' && clickCapsLock % 2 === 1) {
    btn.classList.add('caps-active');
  } else if (value === 'CapsLock' && clickCapsLock % 2 === 0) {
    btn.classList.add('caps-disactive');
  }

  row.append(btn);
};
//!-------------------------------------------------------------------------

//! ------------------------Рисуем клаву на англ-------------------------------
const showKeyboardEn = (arr) => {
  if (document.querySelector('.container')) { document.querySelector('.container').remove(); }
  const body = document.querySelector('body');
  const divContainer = document.createElement('div');
  divContainer.className = 'container';
  const divFirstRow = document.createElement('div');
  divFirstRow.className = 'row first';
  body.append(divContainer);
  divContainer.append(divFirstRow);
  row = divFirstRow;

  if (clickCtrlAlt % 2 === 0) {
    if (clickCapsLock % 2 === 0) {
      for (let i = 0; i < 14; i += 1) {
        createBtn(arr[i].value.en, arr[i].keyCode);
      }
    } else {
      for (let i = 0; i < 14; i += 1) {
        createBtn(arr[i].value.enShift, arr[i].keyCode);
      }
    }
  } else if (clickCapsLock % 2 === 0) {
    for (let i = 0; i < 14; i += 1) {
      createBtn(arr[i].value.ru, arr[i].keyCode);
    }
  } else {
    for (let i = 0; i < 14; i += 1) {
      createBtn(arr[i].value.ruShift, arr[i].keyCode);
    }
  }

  const divSecRow = document.createElement('div');
  divSecRow.className = 'row second';
  divContainer.append(divSecRow);
  row = divSecRow;

  if (clickCtrlAlt % 2 === 0) {
    if (clickCapsLock % 2 === 0) {
      for (let i = 14; i < 29; i += 1) {
        createBtn(arr[i].value.en, arr[i].keyCode);
      }
    } else {
      for (let i = 14; i < 29; i += 1) {
        createBtn(arr[i].value.enShift, arr[i].keyCode);
      }
    }
  } else if (clickCapsLock % 2 === 0) {
    for (let i = 14; i < 29; i += 1) {
      createBtn(arr[i].value.ru, arr[i].keyCode);
    }
  } else {
    for (let i = 14; i < 29; i += 1) {
      createBtn(arr[i].value.ruShift, arr[i].keyCode);
    }
  }

  const divThirdRow = document.createElement('div');
  divThirdRow.className = 'row third';
  divContainer.append(divThirdRow);
  row = divThirdRow;

  if (clickCtrlAlt % 2 === 0) {
    if (clickCapsLock % 2 === 0) {
      for (let i = 29; i < 42; i += 1) {
        createBtn(arr[i].value.en, arr[i].keyCode);
      }
    } else {
      for (let i = 29; i < 42; i += 1) {
        createBtn(arr[i].value.enShift, arr[i].keyCode);
      }
    }
  } else if (clickCapsLock % 2 === 0) {
    for (let i = 29; i < 42; i += 1) {
      createBtn(arr[i].value.ru, arr[i].keyCode);
    }
  } else {
    for (let i = 29; i < 42; i += 1) {
      createBtn(arr[i].value.ruShift, arr[i].keyCode);
    }
  }

  const divForthRow = document.createElement('div');
  divForthRow.className = 'row fourth';
  divContainer.append(divForthRow);
  row = divForthRow;

  if (clickCtrlAlt % 2 === 0) {
    if (clickCapsLock % 2 === 0) {
      for (let i = 42; i < 55; i += 1) {
        createBtn(arr[i].value.en, arr[i].keyCode);
      }
    } else {
      for (let i = 42; i < 55; i += 1) {
        createBtn(arr[i].value.enShift, arr[i].keyCode);
      }
    }
  } else if (clickCapsLock % 2 === 0) {
    for (let i = 42; i < 55; i += 1) {
      createBtn(arr[i].value.ru, arr[i].keyCode);
    }
  } else {
    for (let i = 42; i < 55; i += 1) {
      createBtn(arr[i].value.ruShift, arr[i].keyCode);
    }
  }

  const divFifthRow = document.createElement('div');
  divFifthRow.className = 'row fifth';
  divContainer.append(divFifthRow);
  row = divFifthRow;

  if (clickCtrlAlt % 2 === 0) {
    if (clickCapsLock % 2 === 0) {
      for (let i = 55; i < 64; i += 1) {
        createBtn(arr[i].value.en, arr[i].keyCode);
      }
    } else {
      for (let i = 55; i < 64; i += 1) {
        createBtn(arr[i].value.enShift, arr[i].keyCode);
      }
    }
  } else if (clickCapsLock % 2 === 0) {
    for (let i = 55; i < 64; i += 1) {
      createBtn(arr[i].value.ru, arr[i].keyCode);
    }
  } else {
    for (let i = 55; i < 64; i += 1) {
      createBtn(arr[i].value.ruShift, arr[i].keyCode);
    }
  }
};
//!---------------------------------------------------------------

//! ---------------------- События клавиатуры-------------------------

document.addEventListener('keydown', (event)=>{
  let indexOfEl;
  //! --------------- Нажатие на кнопку---------------
  arrEn.forEach((element, index) => {
    if (element.keyCode === event.code) {
      indexOfEl = index;
    }
  });

  if (event.code === 'Space') {
    event.preventDefault();
  }
  document.querySelectorAll('.button').forEach((element, index)=>{
    if (index === indexOfEl) {
      element.classList.add('active');
      const textAreaOne = document.querySelector('textarea');

      //!----------------------
      textAreaOne.addEventListener('focus', ()=>{
        textAreaOne.blur();
      });
      //!----------------------

      if (element.innerHTML === 'Tab') {
        textAreaOne.textContent += '     ';
        textAreaOne.value = textAreaOne.textContent;
      } else if (element.innerHTML === 'Backspace') {
        textAreaOne.textContent = textAreaOne.textContent.slice(0, -1);
        textAreaOne.value = textAreaOne.textContent;
      } else if (element.innerHTML === 'Enter') {
        textAreaOne.textContent += 'Enter';
        textAreaOne.textContent = textAreaOne.textContent.replace('Enter', '\r\n');
        textAreaOne.value = textAreaOne.textContent;
      } else if (element.innerHTML === 'CapsLock') {
        textAreaOne.textContent += '';
        textAreaOne.value = textAreaOne.textContent;
      } else if (element.innerHTML === 'Ctrl') {
        textAreaOne.textContent += '';
        textAreaOne.value = textAreaOne.textContent;
      } else if (element.innerHTML === 'Alt') {
        textAreaOne.textContent += '';
        textAreaOne.value = textAreaOne.textContent;
      } else if (element.innerHTML === 'Win') {
        textAreaOne.textContent += '';
        textAreaOne.value = textAreaOne.textContent;
      } else if (element.innerHTML === 'Del') {
        textAreaOne.textContent += '';
        textAreaOne.value = textAreaOne.textContent;
      } else if (element.innerHTML === 'Space') {
        textAreaOne.textContent += ' ';
        textAreaOne.value = textAreaOne.textContent;
      } else if (element.innerHTML === 'Shift') {
        textAreaOne.textContent += '';
        textAreaOne.value = textAreaOne.textContent;
      } else if (event.shiftKey && event.code) {
        arrEn.forEach((elem)=>{
          if (event.code === elem.keyCode && (elem.keyCode === 'ShiftLeft' || elem.keyCode === 'ShiftRight')) {
            textAreaOne.textContent += '';
            textAreaOne.value = textAreaOne.textContent;
          }
          if (event.code === elem.keyCode && elem.keyCode !== 'ShiftLeft' && elem.keyCode !== 'ShiftRight') {
            if (clickCtrlAlt % 2 === 0) {
              textAreaOne.textContent += elem.value.enShift;
              textAreaOne.value = textAreaOne.textContent;
            } else {
              textAreaOne.textContent += elem.value.ruShift;
              textAreaOne.value = textAreaOne.textContent;
            }
          }
        });
      } else {
        textAreaOne.textContent += element.textContent;
        textAreaOne.value = textAreaOne.textContent;
      }
    }
  });
  // console.log(indexOfEl);
  //!------------------------------------------------
  if (event.ctrlKey && event.altKey) {
    clickCtrlAlt += 1;
    showKeyboardEn(arrEn);
    // console.log('ctrl+alt', clickCtrlAlt);
  }
  if (event.code === 'CapsLock') {
    clickCapsLock += 1;
    showKeyboardEn(arrEn);
    // console.log('CapsLock', clickCapsLock);
  }
  //!-----------------------------------------
});

document.addEventListener('keyup', ()=>{
  if (document.querySelector('.active') !== null) {
    document.querySelector('.active').classList.remove('active');
  }
});

//! ---------------------- события мыши--------------------------
document.addEventListener('mousedown', event=>{
  let indexOfEl;
  // console.log(event.target.textContent);
  arrEn.forEach((element, index) => {
    if (element.value.en === event.target.textContent
      || element.value.enShift === event.target.textContent
      || element.value.ru === event.target.textContent
      || element.value.ruShift === event.target.textContent) {
      indexOfEl = index;
      // console.log(indexOfEl);
    }
  });

  if (event.target.textContent === 'Space') {
    event.preventDefault();
  }

  document.querySelectorAll('.button').forEach((element, index)=>{
    if (index === indexOfEl) {
      element.classList.add('active');
      const textAreaTwo = document.querySelector('textarea');

      //!----------------------
      textAreaTwo.addEventListener('focus', ()=>{
        textAreaTwo.blur();
      });
      //!----------------------

      if (event.target.textContent === 'Tab') {
        textAreaTwo.textContent += '     ';
        textAreaTwo.value = textAreaTwo.textContent;
      } else if (event.target.textContent === 'Backspace') {
        textAreaTwo.textContent = textAreaTwo.textContent.slice(0, -1);
        textAreaTwo.value = textAreaTwo.textContent;
      } else if (event.target.textContent === 'Enter') {
        textAreaTwo.textContent += 'Enter';
        textAreaTwo.textContent = textAreaTwo.textContent.replace('Enter', '\r\n');
        textAreaTwo.value = textAreaTwo.textContent;
      } else if (event.target.textContent === 'CapsLock') {
        textAreaTwo.textContent += '';
        textAreaTwo.value = textAreaTwo.textContent;
      } else if (event.target.textContent === 'Ctrl') {
        textAreaTwo.textContent += '';
        textAreaTwo.value = textAreaTwo.textContent;
      } else if (event.target.textContent === 'Alt') {
        textAreaTwo.textContent += '';
        textAreaTwo.value = textAreaTwo.textContent;
      } else if (event.target.textContent === 'Win') {
        textAreaTwo.textContent += '';
        textAreaTwo.value = textAreaTwo.textContent;
      } else if (event.target.textContent === 'Del') {
        textAreaTwo.textContent += '';
        textAreaTwo.value = textAreaTwo.textContent;
      } else if (event.target.textContent === 'Space') {
        textAreaTwo.textContent += ' ';
        textAreaTwo.value = textAreaTwo.textContent;
      } else if (event.target.textContent === 'Shift') {
        textAreaTwo.textContent += '';
        textAreaTwo.value = textAreaTwo.textContent;
      } else {
        textAreaTwo.textContent += element.textContent;
        textAreaTwo.value = textAreaTwo.textContent;
      }
    }
  });

  if (event.target.textContent === 'Win') {
    clickCtrlAlt += 1;
    showKeyboardEn(arrEn);
    // console.log('ctrl+alt', clickCtrlAlt);
  }
  if (event.target.textContent === 'CapsLock') {
    clickCapsLock += 1;
    showKeyboardEn(arrEn);
    // console.log('CapsLock', clickCapsLock);
  }
});

//! ---------------------- события мыши--------------------------
document.addEventListener('mouseup', ()=>{
  if (document.querySelector('.active')) {
    document.querySelector('.active').classList.remove('active');
  }
});
//!-------------------------------------------------------------
showKeyboardEn(arrEn);
