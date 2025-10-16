import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function PricingScreen() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <SafeAreaView className="flex-1 bg-white">


      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <TouchableOpacity>
          <Text className="text-black text-xl">✕</Text>
        </TouchableOpacity>
        <View />
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-6">
        {/* Title Section */}
        <View className="items-center mb-8">
          <Text className="text-4xl font-bold text-center mb-4">
            <Text className="text-orange-500">Luno</Text>
            <Text className="text-black">Pro</Text>
          </Text>
          <Text className="text-black text-lg text-center mb-2">Introducing LunoIQ v1</Text>
          <Text className="text-gray-600 text-center leading-relaxed">
            Our smartest AI yet — built for deeper, faster, and more flexible conversations.
          </Text>
        </View>

        {/* Features List */}
        <View className="mb-8">
          {[
            'Full access to LunoIQ v1',
            'Faster and smarter replies',
            'Unlock voice & image generation',
            'Higher message limits',
            'Enhanced collaboration features',
            'Advanced analytics and insights'
          ].map((feature, index) => (
            <View key={index} className="flex-row items-center mb-4">
              <View className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <Text className="text-white text-sm">★</Text>
              </View>
              <Text className="text-black text-lg flex-1">{feature}</Text>
            </View>
          ))}
        </View>

        {/* Pricing Options */}
        <View className="mb-8">
          <View className="flex-row space-x-4">
            {/* LunoPro */}
            <TouchableOpacity 
              className={`flex-1 rounded-xl p-6 me-3 ${selectedPlan === 'pro' ? 'border-2 border-orange-500 bg-white' : 'bg-gray-50'}`}
              onPress={() => setSelectedPlan('pro')}
            >
              <Text className="text-orange-500 text-lg font-semibold mb-2">LunoPro</Text>
              <Text className="text-black text-3xl font-bold mb-1">$29.99/</Text>
              <Text className="text-black text-lg">month</Text>
            </TouchableOpacity>

            {/* LunoPro Max */}
            <TouchableOpacity 
              className={`flex-1 rounded-xl p-6 ${selectedPlan === 'max' ? 'border-2 border-orange-500 bg-white' : 'bg-gray-50'}`}
              onPress={() => setSelectedPlan('max')}
            >
              <Text className="text-orange-500 text-lg font-semibold mb-2">LunoPro Max</Text>
              <Text className="text-black text-3xl font-bold mb-1">$299.99/</Text>
              <Text className="text-black text-lg">month</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Call to Action */}
      <View className="px-6 pb-8">
        <TouchableOpacity className="bg-orange-500 rounded-full py-4">
          <Text className="text-white text-center text-xl font-bold">Get LunoPro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
