class M7VoiceCall {
  constructor() {
    this.localStream = null;
  }

  async startMicrophone() {
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      console.log('Microfone ativado no M7!');
    } catch (err) {
      console.error('Erro ao acessar o microfone:', err);
    }
  }
}

const m7Call = new M7VoiceCall();
