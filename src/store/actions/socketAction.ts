type TConnectAction = {
  type: 'CONNECT';
  payload: string;
};

type TDisconnectAction = {
  type: 'DISCONNECT';
};

type TSendMessageAction = {
  type: 'SEND_MESSAGE';
  payload: any;
};

export type TSocketActions = TConnectAction | TSendMessageAction | TDisconnectAction;

export const connect = (url: string): TConnectAction => ({
  type: 'CONNECT',
  payload: url,
});

export const sendMessage = (payload: any): TSendMessageAction => ({
  type: 'SEND_MESSAGE',
  payload,
});

export const disconnect = (): TDisconnectAction => ({ type: 'DISCONNECT' });
