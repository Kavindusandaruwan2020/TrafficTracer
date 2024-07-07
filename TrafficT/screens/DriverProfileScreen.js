import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground, Image } from 'react-native';
import { useAuth } from '../useAuth';
import { useNavigation } from '@react-navigation/native';

const DriverProfileScreen = () => {
    const { user, logOut } = useAuth();
    const navigation = useNavigation();

    const handleSignOut = async () => {
        try {
            await logOut();
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const navigateToUserProfileStatus = () => {
        navigation.navigate('UserProfileStatus');
    };

    return (
        <ImageBackground
            source={require('../assets/Bg.jpg')}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image
                        source={require("../assets/TrafficTracerLogo.png")}
                        style={{ width: 100, height: 100, marginBottom: 10 }}
                    />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
                        {user ? `Welcome ${user.email}` : 'Welcome User!'}
                    </Text>
                </View>

                {/* First buttons box */}
                <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('FineDetails')}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Fines Details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Fine Status</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Bottom buttons box */}
                <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Reminder</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* User Profile Status Button */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity onPress={navigateToUserProfileStatus} style={{ backgroundColor: '#3B82F6', padding: 14, borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>User Profile Status</Text>
                    </TouchableOpacity>
                </View>

                {/* Driver Profile part */}
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity onPress={handleSignOut} style={{ backgroundColor: '#EF4444', padding: 14, borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default DriverProfileScreen;
