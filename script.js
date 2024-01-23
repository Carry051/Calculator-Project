const buttonsPanel = document.querySelector('.buttonsPanel');
const out = document.querySelector('.out');

const active = document.querySelector('.active');
const lightMode = document.querySelector('.lightMode');
const darkMode = document.querySelector('.darkMode');
const toggleButton = document.querySelector('.toggleButton')

const numericButtons = document.querySelectorAll('.primary');
const numericButtons5 = document.querySelectorAll('.primaryButtons');
const secondaryButtons = document.querySelectorAll('.secondaryButtons');
const numericButtons1 = document.querySelectorAll('.nums');
const numericButtons2 = document.querySelectorAll('.second');
const equalDisplay = document.querySelectorAll('.equal');
const outDisplay = document.querySelectorAll('.out');


function setNumericButtonsColor(buttons, color, background, hoverColor) {
  for (const numeric of buttons) {
    numeric.style.color = color;
    numeric.style.backgroundColor = background;

    // numeric.addEventListener('mouseover', () => {
    //   numeric.style.backgroundColor ='red';
    // })

    // numeric.addEventListener('mouseout', () => {
    //   numeric.style.backgroundColor = hoverColor;
    // })
  }

}




const mainPanel = document.querySelector('.mainPanel');

lightMode.addEventListener('click', lightOn)
darkMode.addEventListener('click', darkOn)

function lightOn(e) {
  e.target = active.classList.remove('toDark')
  e.target = active.classList.remove('fa-moon','fa-regular','darkMode')
  e.target = active.classList.add('toLight')
  e.target = active.innerHTML = `<i style="color:#373737" class="fa-regular fa-sun lightMode"></i>`
  e.target = toggleButton.style.backgroundColor = '#A9DCFD'
  e.target = darkMode.style.color = '#37373766'
  e.target = mainPanel.style.background = 'linear-gradient(166deg, #ececec 0%, #f2f2f2 22.9%, #ffffff 100%)';
  e.target = buttonsPanel.style.backgroundColor = 'linear-gradient(to left, rgba(10, 184, 243, 0.4), rgba(109, 178, 225, 0.4))'

  setNumericButtonsColor(numericButtons, "#373737");
  setNumericButtonsColor(numericButtons5, "#373737",'rgba(255, 255, 255, 0.3)',);
  setNumericButtonsColor(secondaryButtons, "#373737",'rgba(255, 255, 255, 0.3)',);
  setNumericButtonsColor(numericButtons1, "#373737",'rgba(255, 255, 255, 0.3)',);
  setNumericButtonsColor(numericButtons2, "#373737");
  setNumericButtonsColor(equalDisplay, "#373737");
  setNumericButtonsColor(outDisplay, "#373737");

}

function darkOn(e) {
  e.target = active.classList.add('fa-moon','fa-regular','darkMode')
  e.target = active.innerHTML = ``
  e.target = toggleButton.style.backgroundColor = '';
  e.target = mainPanel.style.background = '';
  e.target = buttonsPanel.style.backgroundColor = ''
  e.target = active.classList.remove('toLight')
  e.target = active.classList.add('toDark')
  e.target = buttonsPanel.style.color = '';

  setNumericButtonsColor(numericButtons5,null,null,'rgba(5, 5, 5, 0.30)');
  setNumericButtonsColor(secondaryButtons, null,null,'rgba(5, 5, 5, 0.30)');
  setNumericButtonsColor(numericButtons, null,null,'rgba(5, 5, 5, 0.30)');
  setNumericButtonsColor(numericButtons1, null, null,'rgba(5, 5, 5, 0.30)');
  setNumericButtonsColor(numericButtons2, null,null,'rgba(5, 5, 5, 0.30)');
  setNumericButtonsColor(equalDisplay, "");
  setNumericButtonsColor(outDisplay, "");
  setNumericButtonsColor(numericButtons5, "#373737",'');
  setNumericButtonsColor(secondaryButtons, "#373737",'');


}

//  Logic of calculator

buttonsPanel.addEventListener('click', (e) => {
  if (!e.target.classList.contains('nums')
  &&
  !e.target.classList.contains('primary')
  &&
  !e.target.classList.contains('second'))
  return;

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
      if (out.innerText.length < 12) {

        out.innerText += value;
      }
  }
});
