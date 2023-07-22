class Socket {
  socket: WebSocket | null;

  constructor() {
    this.socket = null;
  }

  connect(url: string) {
    if (!this.socket) {
      this.socket = new WebSocket(url);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  send(message: {}) {
    try {
      if (this.socket) {
        this.socket.send(JSON.stringify(message));
      }
    } catch (e) {
      console.error(e);
    }
  }

  on(
    eventName: keyof WebSocketEventMap,
    callback: (e: WebSocketEventMap[keyof WebSocketEventMap]) => any
  ) {
    if (this.socket) {
      this.socket.addEventListener(eventName, callback);
    }
  }
}

export const socket = new Socket();
