function myFunction(x) {
  const menuNav = document.getElementsByClassName('menu-nav')
  menuNav[0].classList.toggle('d-none')
}

function agendaFunction(x) {
  const buttonLeft = document.getElementById('button-left')
  const buttonRight = document.getElementById('button-right')
  buttonRight.classList.toggle('click-green')

  if (buttonLeft.classList.contains('click-green')) {
    buttonLeft.classList.remove('click-green')
    buttonRight.classList.add('click-green')
  } else {
    buttonRight.classList.remove('click-green')
    buttonLeft.classList.add('click-green')
  }
}
