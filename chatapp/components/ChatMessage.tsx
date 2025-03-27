import { Message } from '@/app/Models/Message';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export const ChatMessage = ({message}: {message: Message}) => {
  const isOwn = message.user === 'zafer';
    function formatTime(timestamp: number): React.ReactNode {
        throw new Error('Function not implemented.');
    }

  return (
    <View style={[styles.container, !isOwn && styles.received]}>
      <Text style={styles.text}>{message.text}</Text>
      <Text style={styles.time}>{formatTime(message.timestamp)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    backgroundColor: '#1976d2',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    maxWidth: 300,
    position: 'relative',
  },
  received: {
    alignSelf: 'flex-start',
    backgroundColor: '#00796b',
  },
  text: {color: '#fff', fontSize: 15},
  time: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    fontSize: 12,
    opacity: 0.6,
    color: '#fff',
  },
});
