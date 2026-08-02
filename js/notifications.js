function requestNotificationPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification('M7 SYSTEM', {
          body: 'Notificações ativas no sistema M7!',
          icon: 'downloadfile-131.png'
        });
      }
    });
  }
}
