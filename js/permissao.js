document.getElementById('btnPermissions')?.addEventListener('click', async () => {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    alert('Permissões Concedidas!');
  } catch (e) {
    alert('Permissões Negadas ou Indisponíveis.');
  }
});
