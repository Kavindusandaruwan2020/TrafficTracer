import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './useAuth';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import DriverLoginScreen from './screens/DriverLoginScreen';
import OfficerLoginScreen from './screens/OfficerLoginScreen';
import DriverProfileScreen from './screens/DriverProfileScreen';
import OfficerProfileScreen from './screens/OfficerProfileScreen';
import DriverSignUpScreen from './screens/DriverSignUpScreen';
import FineDetailsScreen from './screens/FineDetailsScreen';
import UserProfileStatusScreen from './screens/UserProfileStatusScreen';
import OfficerProfileStatusScreen from './screens/OfficerProfileStatusScreen';
import OfficerSignUpScreen from './screens/OfficerSignUpScreen';
import OfficerUpdateProfileScreen from './screens/OfficerUpdateProfileScreen';
import UserUpdateProfileScreen from './screens/UserUpdateProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="DriverLogin" component={DriverLoginScreen} />
          <Stack.Screen name="OfficerLogin" component={OfficerLoginScreen} />
          <Stack.Screen name="DriverProfile" component={DriverProfileScreen} />
          <Stack.Screen name="OfficerProfile" component={OfficerProfileScreen} />
          <Stack.Screen name="DriverSignUp" component={DriverSignUpScreen} />
          <Stack.Screen name="FineDetails" component={FineDetailsScreen} />
          <Stack.Screen name="UserProfileStatus" component={UserProfileStatusScreen} />
          <Stack.Screen name="OfficerProfileStatus" component={OfficerProfileStatusScreen} />
          <Stack.Screen name="OfficerSignUp" component={OfficerSignUpScreen} />
          <Stack.Screen name="OfficerUpdateProfile" component={OfficerUpdateProfileScreen} />
          <Stack.Screen name="UserUpdateProfile" component={UserUpdateProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
