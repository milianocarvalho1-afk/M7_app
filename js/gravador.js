const audio = document.getElementById('mainAudio');
const input = document.getElementById('musicInput');
const btnPlay = document.getElementById('btnPlay');
const title = document.getElementById('trackTitle');

input?.addEventListener('change', (e) => {
  const files = e.target.files;
  if (files.length > 0) {
    audio.src = URL.createObjectURL(files[0]);
    title.textContent = files[0].name;
    audio.play();
  }
});

btnPlay?.addEventListener('click', () => {
  if (audio.paused) audio.play();
  else audio.pause();
});
