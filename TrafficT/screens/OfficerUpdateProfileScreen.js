import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../useAuth';

const OfficerUpdateProfileScreen = () => {
    const navigation = useNavigation();
    const { updateProfile } = useAuth(); // Assuming you have an updateProfile function in useAuth hook
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [officerPosition, setOfficerPosition] = useState('');
    const [officerAge, setOfficerAge] = useState('');
    const [currentStation, setCurrentStation] = useState('');

    const handleUpdateProfile = async () => {
        try {
            await updateProfile({ firstName, lastName, phoneNumber, officerPosition, officerAge, currentStation });
            navigation.goBack();
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show a message to the user)
        }
    };

    return (
        <ImageBackground className="flex-1 justify-center" source={require('../assets/Bg.jpg')}>
            <SafeAreaView className="p-4">
                <View className="bg-white p-8 rounded-lg shadow-lg">
                    <Text className="text-2xl font-bold text-center mb-4">Update Profile</Text>

                    <TextInput
                        className="border border-gray-300 p-2 rounded mb-4"
                        placeholder="First Name"
                        keyboardType="default"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        className="border border-gray-300 p-2 rounded mb-4"
                        placeholder="Last Name"
                        keyboardType="default"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                    <TextInput
                        className="border border-gray-300 p-2 rounded mb-4"
                        placeholder="Phone Number"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                    <TextInput
                        className="border border-gray-300 p-2 rounded mb-4"
                        placeholder="Officer Position"
                        keyboardType="default"
                        value={officerPosition}
                        onChangeText={setOfficerPosition}
                    />
                    <TextInput
                        className="border border-gray-300 p-2 rounded mb-4"
                        placeholder="Officer Age"
                        keyboardType="numeric"
                        value={officerAge}
                        onChangeText={setOfficerAge}
                    />
                    <TextInput
                        className="border border-gray-300 p-2 rounded mb-4"
                        placeholder="Current Police Station"
                        keyboardType="default"
                        value={currentStation}
                        onChangeText={setCurrentStation}
                    />
                    
                    <TouchableOpacity 
                        className="bg-green-500 py-3 px-6 rounded-full mb-4"
                        onPress={handleUpdateProfile}
                    >
                        <Text className="text-white text-center text-lg">Update Profile</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default OfficerUpdateProfileScreen;
