import React from "react";
import { ImageBackground, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const OfficerProfileScreen = () => {
  const navigation = useNavigation();

  const navigateToProfileStatus = () => {
    navigation.navigate('OfficerProfileStatus');
  };

  return (
    <ImageBackground
      source={require("../assets/Bg.jpg")}
      style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* Logo and welcome part */}
          <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 20 }}>
            <Image
              source={require("../assets/TrafficTracerLogo.png")}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ alignSelf: "center", marginLeft: 20, fontSize: 20, fontWeight: "bold", color: "white" }}>
              Welcome Officer!
            </Text>
          </View>

          <View style={{ marginHorizontal: 20, marginTop: 10 }}>
            {/* Add Fine/Violation/Report */}
            <View style={{ backgroundColor: "white", borderRadius: 20, height: 100, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
                  Add Fine/Violation/Report
                </Text>
              </TouchableOpacity>
            </View>

            {/* Reviews section */}
            <View style={{ backgroundColor: "white", borderRadius: 20, height: 150, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Reviews</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>Monitor</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>Fine Form</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Officer Profile section */}
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity onPress={navigateToProfileStatus} style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>Officer Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Bottom bar */}
          <View style={{ height: 60, backgroundColor: "white", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: 20, marginHorizontal: 20 }}>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Text>Icon</Text>
              <Text>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Text>Icon</Text>
              <Text>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Text>Icon</Text>
              <Text>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Text>Icon</Text>
              <Text>Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OfficerProfileScreen;
