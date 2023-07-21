export type TMessage = {
  login: string;
  text: string;
};

type TSocketConnectAction = {
  type: 'CONNECT';
  payload: string;
};

type TSocketOnEventAction = {
  type: 'ON_EVENT';
  payload: {
    eventName: keyof WebSocketEventMap;
    callback: (e: WebSocketEventMap[keyof WebSocketEventMap]) => void;
  };
};

type TSocketMessageReceivedAction = {
  type: 'RECEIVED_MESSAGE';
  payload: TMessage;
};

export type TMessageAction =
  | TSocketOnEventAction
  | TSocketConnectAction
  | TSocketMessageReceivedAction;

// actions

export const connect = (url: string): TSocketConnectAction => ({
  type: 'CONNECT',
  payload: url,
});

export const onSocketEvent = (
  eventName: keyof WebSocketEventMap,
  callback: (e: WebSocketEventMap[keyof WebSocketEventMap]) => void
): TSocketOnEventAction => ({
  type: 'ON_EVENT',
  payload: {
    eventName,
    callback,
  },
});

export const receivedMessage = (message: TMessage): TSocketMessageReceivedAction => ({
  type: 'RECEIVED_MESSAGE',
  payload: message,
});
