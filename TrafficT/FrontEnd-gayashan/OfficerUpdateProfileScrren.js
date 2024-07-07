import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const UserUpdateProfileScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/Bg.jpg")}
      style={{ alignItems: "center", height: "100%" }}
    >
      <SafeAreaView>
        <View style={styles.Borderbox}>
          <View style={styles.DetailsFrame}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 15,
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "space-betweenS",
                gap: 20,
              }}
            >
              <Image
                source={require("../assets/TrafficTracerLogo.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginBottom: 4,
                  marginLeft: 10,
                }}
              />
              <Text
                style={{ fontSize: 25, marginRight: "35%", fontWeight: "700" }}
              >
                Update Officer Profile
              </Text>
            </View>

            <View style={styles.InsideDeatails}>
              <Text>Name :</Text>
              <Text style={styles.dottedLine}>Ariyasena karunarathna</Text>
            </View>
            <View style={styles.InsideDeatails}>
              <View style={styles.InsideDeatails}>
                <Text> Officer Name :</Text>
                <Text style={styles.dottedLine}>Nilanth Gunawardana</Text>
              </View>
              <View style={styles.InsideDeatails}>
                <Text> Officer ID :</Text>
                <Text style={styles.dottedLine}>4561T</Text>
              </View>
              <View style={styles.InsideDeatails}>
                <Text> Officer Possition :</Text>
                <Text style={styles.dottedLine}>Traffic Officer A Grade</Text>
              </View>
              <View style={styles.InsideDeatails}>
                <Text> Officer Age :</Text>
                <Text style={styles.dottedLine}>28</Text>
              </View>
              <View style={styles.InsideDeatails}>
                <Text> Current Police Station :</Text>
                <Text style={styles.dottedLine}>kadawatha Police Station</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Conform Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default UserUpdateProfileScreen;

const styles = StyleSheet.create({
  Borderbox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "40%",
    gap: 70,
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
