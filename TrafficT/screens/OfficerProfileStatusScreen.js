import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const OfficerProfileStatusScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-blue-400 h-full">
      <View className="p-4 space-y-4">
        {/* Logo and welcome part */}
        <View className="flex-row items-center justify-between">
          <Image
            source={require("../assets/TrafficTracerLogo.png")}
            className="w-10 h-10 mb-1 ml-4"
          />
          <Text className="text-2xl font-bold">Officer Profile Details</Text>
        </View>

        {/* Officer Details */}
        <View className="bg-white rounded-lg p-4">
          <View className="flex-row items-center space-x-2">
            <Text>Officer Name :</Text>
            <Text className="border-b border-black border-dotted">Nilanth Gunawardana</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Text>Officer ID :</Text>
            <Text className="border-b border-black border-dotted">4561T</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Text>Officer Position :</Text>
            <Text className="border-b border-black border-dotted">Traffic Officer A Grade</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Text>Officer Age :</Text>
            <Text className="border-b border-black border-dotted">28</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Text>Current Police Station :</Text>
            <Text className="border-b border-black border-dotted">Kadawatha Police Station</Text>
          </View>
        </View>

        {/* Status Box */}
        <View className="bg-white rounded-lg p-4">
          <Text className="text-xl font-bold mb-2">About the Officer</Text>
          <View className="flex-col items-center">
            <Text>About the officer details</Text>
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity
          className="bg-blue-500 py-3 px-6 rounded-full"
          onPress={() => navigation.navigate('OfficerUpdateProfile')}
        >
          <Text className="text-white text-lg font-bold">Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OfficerProfileStatusScreen;
