//! -------------------- Отрисовка заголовка ---------------
const header = () =>{
  const hOne = document.createElement('h1');
  hOne.className = 'hOne';
  hOne.textContent = 'RSS Keyboard Windows OS';
  document.querySelector('body').append(hOne);
};
export { header };
