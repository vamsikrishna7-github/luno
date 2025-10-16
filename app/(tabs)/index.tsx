import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">

      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <View className="flex-row items-center space-x-2">
          <Image source={require('@/assets/images/frame.png')} className="w-8 h-8 me-2" />
          <Text className="text-orange-500 text-xl font-bold">LunoIQ</Text>
          <Text className="text-black text-lg">v1</Text>
          <Text className="text-black text-lg">▼</Text>
        </View>
        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <Image source={require('@/assets/images/search.png')} className="w-8 h-8 me-4" style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('@/assets/images/menu.png')} className="w-8 h-8 me-4" style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-6">
        {/* Main Question */}
        <View className="my-10">
          <Text className="text-black text-6xl font-unslashed leading-tight">
            What Can I Do For You Today?
          </Text>
        </View>

        {/* Start New Chat Button */}
        <TouchableOpacity className="bg-orange-500 rounded-full py-6 px-6 mb-8 flex-row items-center justify-center space-x-3">
          <Text className="text-white text-xl font-bold">Start a new chat</Text>
          <Image source={require('@/assets/images/chat.png')} className="w-8 h-8 me-4 ms-2" style={{ width: 20, height: 20 }} />
        </TouchableOpacity>

        {/* Continue Conversation */}
        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-black text-xl font-semibold">Continue Conversation</Text>
            <TouchableOpacity>
              <Text className="text-gray-500">More {'>'}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-3">
              <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-3 me-2">
                <Text className="text-gray-700">Trip to Tokyo on a budget</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 rounded-full px-4 py-3">
                <Text className="text-gray-700">Rewrite my LinkedIn bio</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Explore Luno's */}
        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-black text-xl font-semibold">Explore Luno's</Text>
            <TouchableOpacity>
              <Text className="text-gray-500">View all {'>'}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row space-x-4">
              {/* Image Maker Card */}
              <View className="bg-gray-50 rounded-xl p-4 w-48 shadow-sm me-3">
                <View className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <Text className="text-orange-500 text-xl">🖼️</Text>
                </View>
                <Text className="text-black text-lg font-semibold mb-2">Image maker</Text>
                <Text className="text-gray-600">Create visuals with just a prompt</Text>
              </View>

              {/* Summarize Text Card */}
              <View className="bg-gray-50 rounded-xl p-4 w-48 shadow-sm me-3">
                <View className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <Text className="text-orange-500 text-xl">📄</Text>
                </View>
                <Text className="text-black text-lg font-semibold mb-2">Summarize text</Text>
                <Text className="text-gray-600">Instantly shorten long content</Text>
              </View>

              {/* Write for Me Card */}
              <View className="bg-gray-50 rounded-xl p-4 w-48 shadow-sm me-3">
                <View className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <Text className="text-orange-500 text-xl">✍️</Text>
                </View>
                <Text className="text-black text-lg font-semibold mb-2">Write for me</Text>
                <Text className="text-gray-600">Generate emails, bios, captions, etc</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Category Tags */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row space-x-3 pb-4 me-6">
            {['Sales', 'SEO', 'Marketing', 'Product Dev', 'Customer Support', 'HR', 'Design', 'Smart', 'Creative', 'Web Dev'].map((tag) => (
              <TouchableOpacity key={tag} className="bg-gray-100 rounded-full px-4 py-3 me-2">
                <Text className="text-gray-700">{tag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ScrollView>

    </SafeAreaView>
  );
}