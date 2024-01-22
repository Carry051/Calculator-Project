const buttonsPanel = document.querySelector('.buttonsPanel');
const out = document.querySelector('.out');

buttonsPanel.addEventListener('click', (e) => {
  if (!e.target.classList.contains('nums') && !e.target.classList.contains('primary') && !e.target.classList.contains('second')) return;

  const value = e.target.innerText;

  switch (value) {
    case 'AC':
      out.innerText = '';
      break;

    case '=':
      const result = new Function('return ' + out.innerText)();
        out.innerText = result.toFixed(0)
      break;


    default:
      if (out.innerText.length < 9) {
        out.innerText += value;
      }
  }
});
