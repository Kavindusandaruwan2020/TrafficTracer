import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#59CBE8", height: "100%" }}>
      <View style={styles.Borderbox}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 55,
            marginHorizontal: 10,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Image
            source={require("../assets/TrafficTracerLogo.png")}
            style={{ width: 40, height: 40, marginBottom: 4, marginLeft: 10 }}
          />
          <Text style={{ fontSize: 25, marginRight: "25%", fontWeight: "700" }}>
            User Profile Details
          </Text>
        </View>
        {/* user Deatails */}
        <View style={styles.DetailsFrame}>
          <View style={styles.InsideDeatails}>
            <Text>Name :</Text>
            <Text style={styles.dottedLine}>Sunil Amarathunga</Text>
          </View>
          <View style={styles.InsideDeatails}>
            <Text>NIC Number :</Text>
            <Text style={styles.dottedLine}>942176689v</Text>
          </View>
          <View style={styles.InsideDeatails}>
            <Text>Birth Day :</Text>
            <Text style={styles.dottedLine}>1960.08.04</Text>
          </View>
          <View style={styles.InsideDeatails}>
            <Text>Age :</Text>
            <Text style={styles.dottedLine}>64</Text>
          </View>
          <View style={styles.InsideDeatails}>
            <Text>Anual Fine count :</Text>
            <Text style={styles.dottedLine}>35</Text>
          </View>
        </View>
        <View style={styles.StatusBox}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              what is your Status
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500", color: "green" }}>
                IT IS GOOD{" "}
              </Text>
              {/* <Text style={{ fontSize: 20, fontWeight: "500", color: "red" }}>
                IT IS BAD
              </Text> */}
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check the Status</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  Borderbox: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 10,
  },
  DetailsFrame: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    gap: 20,
    marginHorizontal: 20,
  },
  InsideDeatails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dottedLine: {
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "dotted",
  },
  StatusBox: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    gap: 20,
    marginHorizontal: 20,
    height: 200,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 20,
    marginTop: 15,
    alignItems: "center",
    height: 40,
    display: "flex",
    alignItems: "center",
    width: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
