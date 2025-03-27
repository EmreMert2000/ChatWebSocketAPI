import { Message } from '@/app/Models/Message';
import { webSocketService } from '@/app/Services/WebSocketService';
import {useEffect, useState} from 'react';


export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    webSocketService.connect();
    webSocketService.onMessage(handleReceive);
  }, []);

  const handleReceive = (text: string) => {
    const message: Message = {
      text,
      user: 'cpu',
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, message]);
  };

  const sendMessage = (text: string) => {
    const message: Message = {
      text,
      user: 'zafer',
      timestamp: Date.now(),
    };
    webSocketService.sendMessage(text);
    setMessages(prev => [...prev, message]);
  };

  return {messages, sendMessage};
};
