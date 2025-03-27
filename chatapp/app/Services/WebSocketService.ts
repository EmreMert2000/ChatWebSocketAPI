type MessageHandler = (message: string) => void;

class WebSocketService {
  private ws: WebSocket | null = null;
  private messageHandler: MessageHandler | null = null;

  connect() {
    this.ws = new WebSocket('wss://echo.websocket.org');
    this.ws.onopen = () => console.log('WebSocket connected');
    this.ws.onmessage = e => this.messageHandler?.(e.data);
    this.ws.onerror = e => {
      const errorEvent = e as ErrorEvent;
      console.log('WebSocket error', errorEvent.message);
    };
    this.ws.onclose = e => console.log('WebSocket closed', e.reason);
  }

  sendMessage(message: string) {
    this.ws?.send(message);
  }

  onMessage(handler: MessageHandler) {
    this.messageHandler = handler;
  }
}

export const webSocketService = new WebSocketService();
