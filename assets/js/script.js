// AOS
AOS.init()

// Ambil elemen musik
var music = document.querySelector('.music');

function mulai() {
  // back to top
  window.scrollTo(0, 0);

  // play sound door
  var soundDoor = document.querySelector('.sound-door');
  if (soundDoor) soundDoor.play();

  // door section
  var doorSection = $('#door-section');
  var doors = document.querySelectorAll('.door');

  // animasi pintu
  doors.forEach(function (door, index) {
    var direction = (index === 0) ? -1 : 1;
    door.style.transition = 'transform 0.8s ease';
    door.style.transform = 'rotateY(' + (70 * direction) + 'deg)';
  });

  // setelah pintu terbuka
  setTimeout(function () {
    if (music) music.play(); // play musik
    doorSection.css('transform', 'scale(6)');
  }, 600);

  // setelah transisi selesai
  setTimeout(function () {
    doorSection.css('opacity', '0');
    $('body').removeClass('overflow-hidden');
    $('body').addClass('transition');
    doorSection.css('display', 'none');
  }, 2000);
}

// button music
var isPlaying = true;
function toggleMusic(event) {
  event.preventDefault();
  const musicButton = document.getElementById('music-button');
  
  if (isPlaying) {
    musicButton.innerHTML = '<i class="fas fa-fw fa-pause"></i>';
    musicButton.classList.remove('rotate');
    musicButton.style.transform = 'translateY(0)';
    music.pause();
  } else {
    musicButton.innerHTML = '<i class="fas fa-fw fa-compact-disc"></i>';
    musicButton.classList.add('rotate');
    music.play();
  }
  
  isPlaying = !isPlaying;
}

// countdown wedding
var countdownDate = new Date("Feb 10, 2026 10:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown-wedding').innerHTML = `
<div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${days}</h5> Hari</div></div>
<div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${hours}</h5> Jam</div></div>
<div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${minutes}</h5> Menit</div></div>
<div class="col-lg-1 col-3"><div class="text-center p-2 rounded text-light"><h5>${seconds}</h5> Detik</div></div>
  `;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown-wedding').innerHTML =
      "<span class='text-center p-3 rounded text-light m-2'><h2>Sudah dimulai!</h2></span>";
  }
}, 1000);

// nama sambutan
const urlParams = new URLSearchParams(window.location.search);
const panggilan = urlParams.get('p');
const nama = urlParams.get('n');
const namaSambutan = document.querySelector('#nama-sambutan');
namaSambutan.innerText = `${panggilan} ${nama}`;
