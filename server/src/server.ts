import { WebSocket } from 'ws';

type WebSocketMessage = string;

// Создаем новый WebSocket сервер на порту 8080
const ws = new WebSocket.Server({ port: 8080 });

// Событие 'connection' срабатывает, когда клиент подключается к серверу
ws.on('connection', (ws: WebSocket) => {
  console.log('Новое подключение');

  // Событие 'message' срабатывает, когда сервер получает сообщение от клиента
  ws.on('message', (message: WebSocketMessage) => {
    console.log('Получено сообщение:', message);

    // Отправляем обратно клиенту тоже самое сообщение
    ws.send(message);
  });

  // Событие 'close' срабатывает, когда клиент отключается от сервера
  ws.on('close', () => {
    console.log('Подключение закрыто');
  });
});
