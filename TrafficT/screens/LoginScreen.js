import React from 'react';
import { SafeAreaView, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <ImageBackground className="flex-1 justify-center" source={require('../assets/Bg.jpg')}>
            <SafeAreaView className="items-center p-4">
                <Image className="w-20 h-20 mb-4" source={require('../assets/TrafficTracerLogo.png')} />
                <Text className="text-3xl text-white text-center mb-8">Traffic Tracer</Text>
                <TouchableOpacity
                    className="bg-blue-500 py-4 px-8 rounded-full mb-4"
                    onPress={() => navigation.navigate('DriverLogin')}
                >
                    <Text className="text-white text-lg">Login as Driver</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="bg-green-500 py-4 px-8 rounded-full"
                    onPress={() => navigation.navigate('OfficerLogin')}
                >
                    <Text className="text-white text-lg">Login as Officer</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default LoginScreen;
