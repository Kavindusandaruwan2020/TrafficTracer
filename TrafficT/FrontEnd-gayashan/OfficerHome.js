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

const OfficerHome = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* logo and welcome part */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 6,
            marginTop: 25,
          }}
        >
          <Image
            source={require("../assets/TrafficTracerLogo.png")}
            style={{ width: 60, height: 60 }}
          />
          <Text
            style={{
              alignSelf: "center",
              marginLeft: 50,
              fontSize: 20,
              fontWeight: "900",
            }}
          >
            WelCome Officer!
          </Text>
        </View>

        <View style={{ marginTop: 5, marginHorizontal: 35 }}>
          <View style={styles.FirstBox}>
            <TouchableOpacity>
              <Text style={{ fontSize: 15, fontWeight: "700" }}>
                Add Fine/Violation/Report
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centerBox}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Reviewas</Text>
            <View
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                gap: 50,
                marginTop: 50,
              }}
            >
              <TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>Monitor</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  Fine Form
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.downBox}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Scan QR</Text>
          </View>
        </View>
        <View style={styles.bottonBar}>
          <View style={{ marginHorizontal: 5 }}>
            <TouchableOpacity>
              <Text>Icon</Text>
              <Text>Dashboard</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Icon</Text>
              <Text>Dashboard</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Icon</Text>
              <Text>Dashboard</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Icon</Text>
              <Text>Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OfficerHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#59CBE8",
    display: "flex",
    flexDirection: "column",
    margin: 0,
  },
  FirstBox: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 100,
    marginTop: 5,
    marginBottom: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  centerBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 10,
    height: 150,
    marginTop: 15,
    marginBottom: 35,
    alignItems: "center",
  },

  downBox: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 10,
    height: 75,
    marginTop: 15,
    marginBottom: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  downboxInside: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  bottonBar: {
    height: 50,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 19,
  },
});
