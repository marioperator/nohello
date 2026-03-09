var typed2 = new Typed('#strike', {
  strings: [
    'Ciao',
    'Heylà, sarò veloce..',
    'Ciao sei in call?',
    'Solo un secondo...',
    'Ciao, domanda tanto ci metti 1 minuto..',
    'Sei online?',
    'Ciao, buondì',
    'Hai un attimo?',
    'Ci sei per caso?',
    'Ciao, puoi?',
    'Ti vedo occupato, ci sei?',
    'Un attimo quando puoi...',
    '&#128075;',
    'Hai un secondo?',
    'Domanda al volo',
    "Ehi, ti coinvolgo un attimo…",
    "Ciao, puoi aiutarmi? 😇",
    "Ping!",
    'Ugente, ci sei?',
    'domanda rapida...',
    'Help?',
    'Voilà',
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

// force the start of cursor animation while the `startDelay` is ticking
if (typed2.cursor != null) {
  // can't use `toggleBlinking(true)` here, as it has some extra checks
  // whether animation has started...which defeats the purpose
  typed2.cursor.classList.add('typed-cursor--blink');
}

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelector('#year').innerHTML = year.toString(10);
});
