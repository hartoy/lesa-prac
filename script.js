//Navbar menu
function myFunction(x) {
  const menuNav = document.getElementsByClassName('menu-nav')
  menuNav[0].classList.toggle('d-none')
}

//Agenta buttons
function agendaFunction(x) {
  const buttonLeft = document.getElementById('button-left')
  const buttonRight = document.getElementById('button-right')
  const dayPicker = document.getElementById('d-pickers')
  buttonRight.classList.toggle('click-green')

  if (buttonLeft.classList.contains('click-green')) {
    buttonLeft.classList.remove('click-green')
    buttonRight.classList.add('click-green')
    dayPicker.classList.remove('d-none')
  } else {
    buttonRight.classList.remove('click-green')
    buttonLeft.classList.add('click-green')
    dayPicker.classList.add('d-none')
  }
}

//Agenda call

const allData = []
console.log(typeof allData)
function callData() {
  fetch('http://api.juiciosdelesahumanidad.ar/api/v1.0/historico/agenda/fecha/2022-9-15/2022-9-22')
    // Exito
    .then((response) => response.json()) // convertir a json
    .then((data) => allData.push(data.resultado)) //imprimir los datos en la consola
    .catch((err) => console.log('Solicitud fallida', err)) // Capturar errores

    .then(() => {
      setInfo()
    })
}

callData()

function setInfo() {
  const lopo = allData[0].agenda.reduce(function (r, a) {
    r[a.proxima_audiencia] = r[a.proxima_audiencia] || []
    r[a.proxima_audiencia].push(a)
    return r
  }, Object.create(null))

  console.log(typeof lopo)
}
