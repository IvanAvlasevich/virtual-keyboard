const comments = () => {
  const hTwo = document.createElement('h2');
  hTwo.className = 'hTwo';
  hTwo.textContent = 'Комбинация переключения языка  с помощью клавиатуры - (Ctrl + Alt)';
  document.querySelector('body').append(hTwo);
  const hThree = document.createElement('h2');
  hThree.className = 'hTwo';
  hThree.textContent = 'Переключение языка  с помощью мыши - клик по Win';
  document.querySelector('body').append(hThree);
};
export default comments;
