import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-orange-50 to-white mt-10 pb-10">

      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <View className="flex-row items-center space-x-3">
          <Image source={require('@/assets/images/icon.png')} className="w-8 h-8 me-2" />
          <Text className="text-orange-500 text-2xl font-bold">Luno</Text>
        </View>
        <TouchableOpacity onPress={() => router.replace('/(tabs)')} className="text-white text-lg">
          <Text className="text-white text-lg">Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Main Title */}
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-4xl font-bold text-center leading-tight">
          <Text className="text-white">Talk smarter with </Text>
          <Text className="text-orange-500 text-4xl font-bold">Luno</Text>
        </Text>
      </View>

      {/* Feature Cards */}
      <View className="px-6 space-y-4 mb-8">
        {/* Card 1 */}
        <View className="bg-white rounded-xl p-4 flex-row items-center space-x-4 shadow-sm mb-2">
          <View className="w-12 h-12 bg-white-500 rounded-full flex items-center justify-center">
            <Image source={require('@/assets/images/icon.png')} className="w-8 h-8" />
          </View>
          <View className="flex-1">
            <Text className="text-black text-lg font-semibold mb-1">Understands your context</Text>
            <Text className="text-gray-600">Remembers what you said earlier to keep the flow natural.</Text>
          </View>
        </View>

        {/* Card 2 */}
        <View className="bg-white rounded-xl p-4 flex-row items-center space-x-4 shadow-sm mb-2">
          <View className="w-12 h-12 bg-wite-500 rounded-full flex items-center justify-center">
            <Image source={require('@/assets/images/icon.png')} className="w-8 h-8" />
          </View>
          <View className="flex-1">
            <Text className="text-black text-lg font-semibold mb-1">Flexible and responsive</Text>
            <Text className="text-gray-600">Lets you refine, correct, or expand your prompts easily.</Text>
          </View>
        </View>

        {/* Card 3 */}
        <View className="bg-white rounded-xl p-4 flex-row items-center space-x-4 shadow-sm">
          <View className="w-12 h-12 bg-white-500 rounded-full flex items-center justify-center">
            <Image source={require('@/assets/images/icon.png')} className="w-8 h-8" />
          </View>
          <View className="flex-1">
            <Text className="text-black text-lg font-semibold mb-1">Built with boundaries</Text>
            <Text className="text-gray-600">Designed to avoid harmful or unsafe content.</Text>
          </View>
        </View>
      </View>

      {/* Call to Action Buttons */}
      <View className="px-6 pb-8 space-y-3">
        <TouchableOpacity className="bg-orange-500 rounded-xl py-4 mb-2">
          <Text className="text-white text-center text-lg font-bold">Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-white border border-gray-300 rounded-xl py-4">
          <Text className="text-black text-center text-lg font-bold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
