const textAreaRender = () => {
  const textArea = document.createElement('textarea');
  textArea.className = 'text-area';
  textArea.setAttribute('rows', 10);
  textArea.setAttribute('cols', 100);
  // textArea.autofocus = 'true';
  document.querySelector('body').append(textArea);
};
export default textAreaRender;
