import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const FineStatus = () => {
  return (
    <SafeAreaView>
      <View style={styles.Borderbox}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 55,
            marginHorizontal: 10,
          }}
        >
          <Image
            source={require("../assets/TrafficTracerLogo.png")}
            style={{ width: 20, height: 20, marginBottom: 4, marginLeft: 10 }}
          />
          <Text
            style={{
              marginLeft: 120,
            }}
          >
            Fine Details
          </Text>
        </View>

        <View style={styles.Box}>
          <View style={styles.InsideBorder}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Fine Name</Text>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Price</Text>
          </View>
          <View style={styles.InsideBorder}>
            <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <Text>{"Driving without a license\n(first occasion)"}</Text>
              <Text>{"Driving without a license\n(second occasion)"}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Text>25,000</Text>
              <Text>30,000</Text>
            </View>
          </View>
          <View style={styles.InsideBorder}>
            <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <Text>
                {"Employing a driver without a license\n(first occasion)"}
              </Text>
              <Text>
                {"Employing a driver without a license\n(second occasion)"}
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Text>25,000</Text>
              <Text>{"30,000\n-50,000"}</Text>
            </View>
          </View>
          <View style={styles.InsideBorder}>
            <View>
              <Text>
                {"Driving under the influence of liquor \n (narcotics)"}
              </Text>
            </View>
            <View>
              <Text>25,000</Text>
            </View>
          </View>
          <View style={styles.InsideBorder}>
            <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <Text>
                {
                  "Transporting passengers for \nhire while being under the\n influence of liquor\n(In case of death);"
                }
              </Text>
              <Text>
                {
                  "Transporting passengers for \nhire while being under the\n influence of liquor\n (causing minor injuries to a person)"
                }
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              <Text>{"50,000 \n- 100,000"}</Text>
              <Text>{"30,000 \n-50,000"}</Text>
            </View>
          </View>
          <View style={styles.InsideBorder}>
            <View>
              <Text>
                {"Driving 20 percent more than the \n maximum speed limit"}
              </Text>
            </View>
            <View>
              <Text>3000 - 5000</Text>
            </View>
          </View>
          <View style={styles.InsideBorder}>
            <View>
              <Text>
                {"Driving 30 percent more than the \n maximum speed limit"}
              </Text>
            </View>
            <View>
              <Text>10000 - 15000</Text>
            </View>
          </View>
          <View style={styles.InsideBorder}>
            <View>
              <Text>
                {"Driving 50 percent more than the \n maximum speed limit"}
              </Text>
            </View>
            <View>
              <Text>15000 - 25000</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FineStatus;

const styles = StyleSheet.create({
  Borderbox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#59CBE8",
    gap: 10,
    height: "100%",
    padding: 10,
  },
  InsideBorder: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  Box: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },
});
