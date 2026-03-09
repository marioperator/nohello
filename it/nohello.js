var typed2 = new Typed('#strike', {
  strings: [
    'Ciao',
    'hey',
    'Ciao sei in call?',
    "Solo un secondo...",
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
    'hoi',
    'hiya',
    'Привет',
    'you got a sec?',
    'مرحبا',
    'greetings!',
    'aloha',
    'こんにちは',
    'buenos dias',
    'nuqneH',
    'heya',
    'olà',
    'apipoulaï',
    'j0',
    'howdy',
    'שלום',
    'yooooooooooo!',
    '你好',
    'you there?',
    'fraeslis',
    '여보세요',
    'sul sul',
    'quick question...',
    'achuta',
    'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
    'ping',
    'Χαίρετε',
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
