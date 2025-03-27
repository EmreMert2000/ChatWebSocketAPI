type MessageHandler = (message: string) => void;

class WebSocketService {
  private ws: WebSocket | null = null;
  private messageHandler: MessageHandler | null = null;
  private isConnected = false;

  connect() {
    this.ws = new WebSocket('wss://echo.websocket.org');
    this.ws.onopen = () => {
      console.log('WebSocket connected');
      this.isConnected = true;
    };
    this.ws.onmessage = e => this.messageHandler?.(e.data);
    this.ws.onerror = e => {
      const errorEvent = e as ErrorEvent;
      console.log('WebSocket error', errorEvent.message);
    };
    this.ws.onclose = e => {
      console.log('WebSocket closed', e.reason);
      this.isConnected = false;
    };
  }

  sendMessage(message: string) {
    if (this.ws && this.isConnected) {
      this.ws.send(message);
    } else {
      console.warn('WebSocket not connected yet. Message not sent.');
    }
  }

  onMessage(handler: MessageHandler) {
    this.messageHandler = handler;
  }
}

export const webSocketService = new WebSocketService();
