import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../useAuth';

const UserUpdateProfileScreen = () => {
  const navigation = useNavigation();
  const { updateProfile } = useAuth(); // Assuming you have an updateProfile function in useAuth
  const [name, setName] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [age, setAge] = useState('');
  const [annualFineCount, setAnnualFineCount] = useState('');

  const handleUpdateProfile = async () => {
    try {
      await updateProfile({
        name,
        nicNumber,
        birthDay,
        age,
        annualFineCount,
      });
      navigation.navigate('UserProfileStatus');
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show a message to the user)
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center p-4 bg-white">
      <View className="p-4 bg-white rounded-lg shadow-lg">
        <Text className="text-2xl font-bold text-center mb-4">Update Profile</Text>

        <TextInput
          className="border border-gray-300 p-2 rounded mb-4"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="border border-gray-300 p-2 rounded mb-4"
          placeholder="NIC Number"
          value={nicNumber}
          onChangeText={setNicNumber}
        />
        <TextInput
          className="border border-gray-300 p-2 rounded mb-4"
          placeholder="Birth Day"
          value={birthDay}
          onChangeText={setBirthDay}
        />
        <TextInput
          className="border border-gray-300 p-2 rounded mb-4"
          placeholder="Age"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          className="border border-gray-300 p-2 rounded mb-4"
          placeholder="Annual Fine Count"
          value={annualFineCount}
          onChangeText={setAnnualFineCount}
        />

        <TouchableOpacity
          className="bg-blue-500 py-3 px-6 rounded-full"
          onPress={handleUpdateProfile}
        >
          <Text className="text-white text-lg text-center">Update Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserUpdateProfileScreen;
