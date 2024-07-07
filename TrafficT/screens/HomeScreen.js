import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView, Text, View, Image, ImageBackground, Button } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const handleGetStartedClick = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground className="flex-1 justify-center" source={require('../assets/Bg.jpg')}>
            <SafeAreaView className="items-center">
                <Image className="w-20 h-20 mb-4" source={require('../assets/TrafficTracerLogo.png')} />
                <Text className="text-lg text-white text-center">Welcome to</Text>
                <Text className="text-3xl text-yellow-500 text-center mb-4">Traffic Tracer</Text>
                <Button title="Get Started" onPress={handleGetStartedClick} />
            </SafeAreaView>
        </ImageBackground>
    );
};

export default HomeScreen;
