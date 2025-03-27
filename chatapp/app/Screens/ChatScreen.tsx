import { ChatMessage } from '@/components/ChatMessage';
import { useChat } from '@/hooks/useChat';
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';


export const ChatScreen = () => {
  const {messages, sendMessage} = useChat();
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text);
      setText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.timestamp.toString()}
        renderItem={({item}) => <ChatMessage message={item} />}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity onPress={handleSend}>
          <Text style={styles.send}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, margin: 10},
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    borderColor: '#448aff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  send: {
    color: '#448aff',
    padding: 10,
  },
});
