type TSocketMessageEvent = {
  data: string;
};

export class Socket {
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
    if (this.socket) {
      this.socket.send(JSON.stringify(message));
    }
  }

  on<T extends keyof WebSocketEventMap>(
    eventName: T,
    callback: (e: WebSocketEventMap[T]) => any
  ) {
    if (this.socket) {
      this.socket.addEventListener(eventName, callback);
    }
  }
}
