import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../useAuth';

const DriverLoginScreen = () => {
    const navigation = useNavigation();
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert('Validation Error', 'Please enter both email and password.');
            return;
        }

        try {
            await signIn(email, password);
            navigation.navigate('DriverProfile');
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
        }
    };

    return (
        <ImageBackground className="flex-1 justify-center" source={require('../assets/Bg.jpg')}>
            <SafeAreaView className="p-4">
                <View className="bg-white p-8 rounded-lg shadow-lg">
                    <Text className="text-2xl font-bold text-center mb-4">Driver Login</Text>

                    <TextInput
                        className="border border-gray-300 p-2 rounded mb-4"
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        className="border border-gray-300 p-2 rounded mb-4"
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    
                    <TouchableOpacity
                        className="bg-blue-500 py-3 px-6 rounded-full mb-4"
                        onPress={handleSignIn}
                    >
                        <Text className="text-white text-center text-lg">Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className="bg-green-500 py-3 px-6 rounded-full mb-4"
                        onPress={() => navigation.navigate('DriverSignUp')}
                    >
                        <Text className="text-white text-center text-lg">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default DriverLoginScreen;
