import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen() {
  
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'user',
      text: 'Make a cartoon poster design for how to train your dragon movie',
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      type: 'ai',
      text: 'Here is a poster design for the "How to Train Your Dragon" movie:',
      hasImage: true,
      timestamp: new Date().toISOString()
    },
    {
      id: 3,
      type: 'user',
      text: 'Make toothless more cute but looks very angry',
      timestamp: new Date().toISOString()
    },
    {
      id: 4,
      type: 'processing',
      text: 'Processing image',
      hasImage: true,
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        text: inputText,
        timestamp: new Date().toISOString()
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      
      // Add sample AI response after a delay
      setTimeout(() => {
        const sampleResponses = [
          "I'll help you with that! Here's what I can do for you...",
          "Great question! Let me provide you with a detailed response...",
          "I understand your request. Here's my analysis...",
          "That's an interesting topic! Let me share some insights...",
          "I'll work on that for you right away!"
        ];
        
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai',
          text: sampleResponses[Math.floor(Math.random() * sampleResponses.length)],
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">

      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4 bg-white border-b border-gray-100">
        <View className="flex-row items-center space-x-3">
          <TouchableOpacity className="p-2" onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <View>
            <Text className="text-black text-lg font-semibold">How to train a dra..</Text>
            <View className="flex-row items-center space-x-1">
              <Text className="text-orange-500 text-sm font-medium">LunoIQ v1</Text>
              <Ionicons name="chevron-down" size={14} color="#000" />
            </View>
          </View>
        </View>
        <View className="flex-row space-x-2">
          <TouchableOpacity className="p-2">
            <Ionicons name="share-outline" size={20} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2">
            <Ionicons name="ellipsis-vertical" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Content */}
      <ScrollView className="flex-1 px-6 bg-orange-50 py-5">
        {messages.map((message) => (
          <View key={message.id} className="mb-4">
            {message.type === 'user' ? (
              <View className="items-end">
                <View className="bg-orange-100 rounded-2xl px-4 py-3 max-w-xs">
                  <Text className="text-black">{message.text}</Text>
                </View>
              </View>
            ) : (
              <View>
                <Text className="text-black text-lg mb-3">{message.text}</Text>
                
                {message.hasImage && (
                  <View className="bg-orange-100 rounded-2xl h-64 mb-4 flex items-center justify-center">
                    {message.type === 'processing' ? (
                      <View className="flex items-center justify-center">
                        <MaterialIcons name="cloud-download" size={48} color="#9CA3AF" />
                        <Text className="text-gray-500 mt-2">Processing...</Text>
                      </View>
                    ) : (
                      <Text className="text-gray-500">Generated Image Placeholder</Text>
                    )}
                  </View>
                )}

                {/* Action Icons */}
                <View className="flex-row space-x-6 mb-4">
                  <TouchableOpacity className="flex items-center justify-center w-8 h-8">
                    <Ionicons name="copy-outline" size={20} color="#6B7280" />
                  </TouchableOpacity>
                  <TouchableOpacity className="flex items-center justify-center w-8 h-8">
                    <Ionicons name="thumbs-up-outline" size={20} color="#6B7280" />
                  </TouchableOpacity>
                  <TouchableOpacity className="flex items-center justify-center w-8 h-8">
                    <Ionicons name="thumbs-down-outline" size={20} color="#6B7280" />
                  </TouchableOpacity>
                  <TouchableOpacity className="flex items-center justify-center w-8 h-8">
                    <Ionicons name="refresh-outline" size={20} color="#6B7280" />
                  </TouchableOpacity>
                  <TouchableOpacity className="flex items-center justify-center w-8 h-8">
                    <Ionicons name="arrow-up-right-box-outline" size={20} color="#6B7280" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Input Bar */}
      <View className="bg-white px-6 pt-2 flex-row items-end space-x-3 border-t border-gray-200">
        <TouchableOpacity className="p-2">
          <Ionicons name="attach-outline" size={24} color="#6B7280" />
        </TouchableOpacity>
        
        <View className="flex-1 bg-gray-100 rounded-3xl px-4 py-3 max-h-32">
          <TextInput
            placeholder="Type your thoughts..."
            value={inputText}
            onChangeText={setInputText}
            className="text-black text-base"
            multiline
            style={{ minHeight: 24, maxHeight: 96 }}
          />
        </View>
        
        <View className="flex-row space-x-2">
          <TouchableOpacity className="p-2">
            <Ionicons name="mic-outline" size={24} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity 
            className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center"
            onPress={handleSendMessage}
          >
            <Ionicons name="send" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
