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
      const expression = out.innerText;

      // Перевірка наявності конкретного рядка
      if (expression === '10.10+21+18') {
        out.innerText = ''
        displayLoveMessage()
        break;
      }

      out.innerText = result.toFixed(0)
      break;

    default:
      if (out.innerText.length < 15) {
        out.innerText += value;
      }
  }
});


function displayLoveMessage() {
  const message = 'Я тебе кохаю, Киця';

  // Розділити рядок на масив букв
  const letters = message.split('');

  // Вивести кожну букву на новому рядку
  letters.forEach((letter, index) => {
    setTimeout(() => {
      out.innerHTML += letter + ''
    }, index * 500); // Кожну букву виводити з проміжком у 500 мілісекунд
  });
}