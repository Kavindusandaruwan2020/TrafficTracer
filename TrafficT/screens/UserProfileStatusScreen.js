import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../useAuth';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';

const UserProfileStatusScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  // Sample user data (replace with actual user data or use state management)
  const userData = {
    name: 'Sunil Amarathunga',
    nicNumber: '942176689v',
    birthDay: '1960.08.04',
    age: 64,
    annualFineCount: 35,
  };

  return (
    <ImageBackground
      source={require('../assets/Bg.jpg')}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <SafeAreaView style={{ padding: 20 }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <Image
              source={require("../assets/TrafficTracerLogo.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>User Profile Details</Text>
          </View>

          {/* User Details */}
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={() => {/* Handle onPress action */}}>
            <Text style={{ marginRight: 10, fontWeight: 'bold' }}>Name :</Text>
            <Text style={{ borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 2 }}>{userData.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={() => {/* Handle onPress action */}}>
            <Text style={{ marginRight: 10, fontWeight: 'bold' }}>NIC Number :</Text>
            <Text style={{ borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 2 }}>{userData.nicNumber}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={() => {/* Handle onPress action */}}>
            <Text style={{ marginRight: 10, fontWeight: 'bold' }}>Birth Day :</Text>
            <Text style={{ borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 2 }}>{userData.birthDay}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={() => {/* Handle onPress action */}}>
            <Text style={{ marginRight: 10, fontWeight: 'bold' }}>Age :</Text>
            <Text style={{ borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 2 }}>{userData.age}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} onPress={() => {/* Handle onPress action */}}>
            <Text style={{ marginRight: 10, fontWeight: 'bold' }}>Annual Fine Count :</Text>
            <Text style={{ borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 2 }}>{userData.annualFineCount}</Text>
          </TouchableOpacity>

          {/* Status Box */}
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, marginTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>What is your Status</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'green' }}>IT IS GOOD</Text>
            {/* Add more status components as needed */}
          </View>

          {/* Buttons */}
          <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: 'blue', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 30, marginBottom: 10 }} onPress={() => {/* Handle onPress action */}}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Check the Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'blue', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 30 }} onPress={() => navigation.navigate('UserUpdateProfile')}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default UserProfileStatusScreen;
