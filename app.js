// mobile popup starts 

const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#menu-popup');
const navIcon = document.querySelectorAll('.navIcon');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navIcon.forEach(icon => {
    icon.classList.toggle('hidden');
  });
});

// Mobile popup ends 

// features speaker popup starts
const speakers = [
  {
    Images: ['images/speaker_01.png', 'images/speaker_02.png', 'images/speaker_03.png', 'images/speaker_04.png', 'images/speaker_05.png', 'images/speaker_06.png',],
    name: ['Yohai Benkler', 'Jeon Gil-nam', 'Noh So-youn', 'Julia Leda', 'Layla Tretikov', 'Ryan Merkley',],
    role: ['Berkham Professor of Entrepreneurial Legal Studies at Harvard Law School', 'Director of Art Centre Nabi and a board member of CC Korea', 'Art Center Nabi Director, CC Korea Director', 'Head of the Young Pirates of Europe', 'Secretary General of the Wikimedia Foundation', 'Creative Commons CEO, Former Mozilla Foundation COO',],
    about: ['Benkler studies commons based peer production and published his seminal book The Wealth of Networks in 2006', 'As the author of Digital Art  of Our Time he opened Art Center Nabi Koreas first digital art institution in 2000 and is currently serving.', 'As the author of Digital Art  of Our Time he opened Art Center Nabi Koreas first digital art institution in 2000 and is currently serving.', 'As the author of Digital Art  of Our Time he opened Art Center Nabi Koreas first digital art institution in 2000 and is currently serving.', 'As the author of Digital Art  of Our Time he opened Art Center Nabi Koreas first digital art institution in 2000 and is currently serving.', 'As the author of Digital Art  of Our Time he opened Art Center Nabi Koreas first digital art institution in 2000 and is currently serving.',],
  },
];


const jsContainer = document.querySelector('.speakers-container');
for (let i = 0; i < 6; i += 1) {
  jsContainer.innerHTML = `
  <div class="container">
  <div class="row mb-5">
        <div class="col-2">
          <img class="desktop-speaker-img" src="${speakers[0].Images[0]}" alt="">
        </div>
        <div class="col-4">
          <p class="speaker-name">${speakers[0].name[0]}</p>
              <p class="speaker-profession">${speakers[0].role[0]}</p>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <p class="speaker-experience">${speakers[0].about[0]}</p>
        </div>
        <div class="col-2">
          <img class="desktop-speaker-img" src="${speakers[0].Images[1]}" alt="">
        </div>
        <div class="col-4">
          <p class="speaker-name">${speakers[0].name[1]}</p>
              <p class="speaker-profession">${speakers[0].role[1]}</p>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <p class="speaker-experience">${speakers[0].about[1]}</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-2">
          <img class="desktop-speaker-img" src="${speakers[0].Images[2]}" alt="">
        </div>
        <div class="col-4">
          <p class="speaker-name">${speakers[0].name[2]}</p>
              <p class="speaker-profession">${speakers[0].role[2]}</p>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <p class="speaker-experience">${speakers[0].about[2]}</p>
        </div>
        <div class="col-2">
          <img class="desktop-speaker-img" src="${speakers[0].Images[3]}" alt="">
        </div>
        <div class="col-4">
          <p class="speaker-name">${speakers[0].name[3]}</p>
              <p class="speaker-profession">${speakers[0].role[3]}</p>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <p class="speaker-experience">${speakers[0].about[3]}</p>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-2">
          <img class="desktop-speaker-img" src="${speakers[0].Images[4]}" alt="">
        </div>
        <div class="col-4">
          <p class="speaker-name">${speakers[0].name[4]}</p>
              <p class="speaker-profession">${speakers[0].role[4]}</p>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <p class="speaker-experience">${speakers[0].about[4]}</p>
        </div>
        <div class="col-2">
          <img class="desktop-speaker-img" src="${speakers[0].Images[5]}" alt="">
        </div>
        <div class="col-4">
          <p class="speaker-name">${speakers[0].name[5]}</p>
              <p class="speaker-profession">${speakers[0].role[5]}</p>
              <span><i class="fa-solid fa-ellipsis"></i></span>
              <p class="speaker-experience">${speakers[0].about[5]}</p>
        </div>
      </div>
  `;
}
// features speakers end