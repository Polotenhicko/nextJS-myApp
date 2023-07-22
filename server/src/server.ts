import { WebSocket } from 'ws';

// Создаем новый WebSocket сервер на порту 8080
const ws = new WebSocket.Server({ port: 8080 });
const clients = new Set<WebSocket>();
// Событие 'connection' срабатывает, когда клиент подключается к серверу
ws.on('connection', (ws: WebSocket) => {
  console.log('Новое подключение');
  clients.add(ws);

  // Событие 'message' срабатывает, когда сервер получает сообщение от клиента
  ws.on('message', (message: Buffer) => {
    const messageInfo = JSON.parse(new TextDecoder().decode(new Uint8Array(message)));
    const result = JSON.stringify({ type: 'RECEIVED_MESSAGE', payload: messageInfo });
    clients.forEach((ws) => ws.send(result));
  });

  // Событие 'close' срабатывает, когда клиент отключается от сервера
  ws.on('close', () => {
    console.log('Подключение закрыто');
  });
});
