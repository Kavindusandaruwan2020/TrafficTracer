import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../useAuth';

const OfficerSignUpScreen = () => {
    const navigation = useNavigation();
    const { signUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [officerId, setOfficerId] = useState('');

    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        let errors = {};

        if (!firstName) {
            errors.firstName = "First name is required";
            valid = false;
        }

        if (!lastName) {
            errors.lastName = "Last name is required";
            valid = false;
        }

        if (!email) {
            errors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email) || !email.endsWith('@gmail.com')) {
            errors.email = "Email must be a valid Gmail address";
            valid = false;
        }

        if (!phoneNumber) {
            errors.phoneNumber = "Phone number is required";
            valid = false;
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            errors.phoneNumber = "Phone number must be 10 digits";
            valid = false;
        }

        if (!officerId) {
            errors.officerId = "Officer ID is required";
            valid = false;
        }

        if (!password) {
            errors.password = "Password is required";
            valid = false;
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSignUp = async () => {
        if (validate()) {
            try {
                await signUp(email, password, { firstName, lastName, phoneNumber, officerId });
                navigation.navigate('OfficerProfile');
            } catch (error) {
                console.error(error);
                Alert.alert('Sign Up Failed', 'Failed to sign up. Please try again later.');
            }
        }
    };

    return (
        <ImageBackground style={{ flex: 1, justifyContent: 'center' }} source={require('../assets/Bg.jpg')}>
            <SafeAreaView style={{ padding: 20 }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>Officer Sign Up</Text>

                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 }}
                        placeholder="First Name"
                        keyboardType="default"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    {errors.firstName && <Text style={{ color: 'red' }}>{errors.firstName}</Text>}

                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 }}
                        placeholder="Last Name"
                        keyboardType="default"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                    {errors.lastName && <Text style={{ color: 'red' }}>{errors.lastName}</Text>}

                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 }}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 }}
                        placeholder="Phone Number"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                    {errors.phoneNumber && <Text style={{ color: 'red' }}>{errors.phoneNumber}</Text>}

                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 }}
                        placeholder="Officer ID"
                        keyboardType="default"
                        value={officerId}
                        onChangeText={setOfficerId}
                    />
                    {errors.officerId && <Text style={{ color: 'red' }}>{errors.officerId}</Text>}

                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 }}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

                    <TouchableOpacity
                        style={{ backgroundColor: '#0D8050', paddingVertical: 15, borderRadius: 30, marginBottom: 10 }}
                        onPress={handleSignUp}
                    >
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default OfficerSignUpScreen;
