class M7MediaPlayer {
  constructor(audioId, playlistId, titleId) {
    this.audio = document.getElementById(audioId);
    this.playlist = document.getElementById(playlistId);
    this.title = document.getElementById(titleId);
    this.tracks = [];
    this.currentIndex = 0;
  }

  loadFiles(event) {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    this.tracks = files;
    this.render();
    this.playTrack(0);
  }

  render() {
    if (!this.playlist) return;
    this.playlist.innerHTML = '';
    this.tracks.forEach((track, idx) => {
      const li = document.createElement('li');
      li.style.cssText = 'padding: 8px; border-bottom: 1px solid #21262d; cursor: pointer; color: #c9d1d9; font-size: 11px;';
      li.textContent = `🎵 ${idx + 1}. ${track.name}`;
      li.onclick = () => this.playTrack(idx);
      this.playlist.appendChild(li);
    });
  }

  playTrack(idx) {
    if (idx < 0 || idx >= this.tracks.length) return;
    this.currentIndex = idx;
    const file = this.tracks[idx];
    this.audio.src = URL.createObjectURL(file);
    this.audio.play();
    if (this.title) this.title.textContent = file.name;
  }
}

const m7Player = new M7MediaPlayer('mainAudio', 'playlist', 'trackTitle');
