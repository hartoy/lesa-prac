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

const arrayDateMaker = (arrayDates) => {
  const arrayOfDate = arrayDates.map((item) => {
    return item.proxima_audiencia
  })
  const arr = arrayOfDate.filter(function (item, index, inputArray) {
    return inputArray.indexOf(item) == index
  })

  return arr.map((item) => {
    return {
      date: item,
      hearings: arrayDates.filter((subItem) => {
        return subItem.proxima_audiencia === item
      }),
    }
  })
}

let allData = []
function callData() {
  fetch('http://api.juiciosdelesahumanidad.ar/api/v1.0/historico/agenda/fecha/2022-9-15/2022-9-22')
    .then((response) => response.json()) // convertir a json
    .then((data) => (allData = arrayDateMaker(...Object.values(data.resultado)))) //imprimir los datos en la consola
    .then(() => {
      setInfo()
    })
    .catch((err) => console.log('Solicitud fallida', err)) // Capturar errores
}
callData()

const arrayHard = [
  {
    date: '2022-09 15',
    hearings: [
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
    ],
  },
  {
    date: '2022-09 15',
    hearings: [
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
    ],
  },
  {
    date: '2022-09 16',
    hearings: [
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
    ],
  },
  {
    date: '2022-09 19',
    hearings: [
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
    ],
  },
  {
    date: '2022-09 21',
    hearings: [
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
    ],
  },
  {
    date: '2022-09 22',
    hearings: [
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
      {
        accesibilidad: 'mailto:palvarezcarreras@jus.gob.ar',
        caus_id: 1868,
        caus_nombre_vulgar: 'Megacausa Jujuy',
        hora: '08:36:00',
        id: 1226,
        proxima_audiencia: '2022-09-15',
        sede: 'TOF JUJUY',
        suspendida: 0,
        tipo_audiencia: 'Alegatos Defensa',
        transmision: 'https://www.youtube.com/watch?v=vFJnmbfqLE0',
      },
    ],
  },
]

function setInfo() {
  console.log(allData)
  arrayHard.forEach((element) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('day-schedule', 'd-flex', 'flex-column', 'mb-2')

    const audienciaDiv = document.createElement('div')
    audienciaDiv.classList.add('audiencia', 'd-flex')
    const divPadre = document.getElementsByClassName('schedule')
    divPadre[0].append(newDiv)
    newDiv.append(audienciaDiv)

    const day = document.createElement('div')
    day.classList.add('day', 'd-flex', 'flex-column', 'text-center', 'ps-2', 'pe-4', 'pt-2')
    const audienciaTable = document.createElement('div')
    audienciaTable.classList.add('d-flex', 'flex-column', 'audiencia-table')
    audienciaDiv.append(day)
    audienciaDiv.append(audienciaTable)

    element.hearings.forEach((juicios) => {
      const htmlForDays = `
       <p class="number-day">21</p>
      <p class="week-day">MIER.</p>
      `
      day.innerHTML = htmlForDays

      const htmlAudienciaTable = `
       <div class="exact-audencia d-flex justify-content-between">
                        <div class="">
                          <div class="d-flex align-items-center">
                          <p class="date me-1">${juicios.proxima_audiencia}</p>
                          <p class="me-1">•</p>
                          <p class="aud-hour">${juicios.hora}</p>
                          </div>
                          <p class="aud-caratula">${juicios.caus_nombre_vulgar}</p>
                        </div>
                        <div class="d-flex align-items-center">
                          <div class="pe-4">
                            <p class="aud-def">${juicios.tipo_audiencia}</p>
                            <p class="aud-def">${juicios.tipo_audiencia}</p>
                          </div>
                          <div class="d-flex align-items-center ms-5 pe-2">
                            <p class="aud-live d-flex align-items-center">
                              VIVO
                              <img class="ps-1" src="/img/aud-live.svg" alt="" />
                            </p>
                            <p class="aud-card ps-4">
                              <img src="/img/aud-card.svg" alt="" />
                            </p>
                          </div>
                        </div>
                      </div>
      `
      audienciaTable.innerHTML += htmlAudienciaTable
    })
  })
}

console.log(arrayHard)
