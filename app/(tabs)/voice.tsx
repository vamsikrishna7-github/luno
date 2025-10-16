import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VoiceScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">

      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <View className="flex-row items-center space-x-3">
          <View className="flex-row items-center space-x-2 me-2">
            <Image source={require('@/assets/images/live.png')} className="w-4 h-4" style={{ width: 16, height: 16 }} />
            <Text className="text-orange-500 text-lg font-semibold">Live</Text>
          </View>
        </View>
        
        <View className="flex-row space-x-4">
          <TouchableOpacity className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <Image source={require('@/assets/images/cc.png')} className="w-4 h-4" style={{ width: 16, height: 16 }} />
          </TouchableOpacity>
          <TouchableOpacity className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <Image source={require('@/assets/images/info.png')} className="w-4 h-4" style={{ width: 16, height: 16 }} />
          </TouchableOpacity>
          <TouchableOpacity className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <Image source={require('@/assets/images/sound.png')} className="w-4 h-4" style={{ width: 16, height: 16 }} />
          </TouchableOpacity>
          <TouchableOpacity className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <Image source={require('@/assets/images/settings.png')} className="w-4 h-4" style={{ width: 16, height: 16 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View className="flex-1 justify-center items-center px-6">
        {/* Central Logo/Icon */}
        <View className="w-32 h-32 bg-white-500 rounded-full flex items-center justify-center mb-8">
          <Image source={require('@/assets/images/voice.png')} className="w-24 h-24" style={{ width: 100, height: 100 }} />
        </View>

        {/* Question Text */}
        <View className="mb-8">
          <Text className="text-black text-2xl font-bold text-center leading-tight mb-2">
            What are the advantages of
          </Text>
          <Text className="text-black text-2xl font-bold text-center leading-tight mb-2">
            online education compared to
          </Text>
          <Text className="text-gray-400 text-xl text-center leading-tight">
            traditional classroom learning.....
          </Text>
        </View>

        {/* Instructional Text */}
        <Text className="text-gray-400 text-center text-lg mt-20 text-xs">
          Continue conversations outside the app - tap to enable notifications!
        </Text>
      </View>

      {/* Footer */}
      <View className="bg-gray-100 px-6 py-2">
        <View className="flex-row justify-around items-center">
          <TouchableOpacity className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <Text className="text-gray-600 text-lg">📹</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <Text className="text-gray-600 text-lg">⬆️</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <Text className="text-gray-600 text-lg">⋮</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <Text className="text-white text-2xl">✕</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
}
