import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const FineDetailsScreen = () => {
  const tableHead = ["Fine Name", "Price"];
  const tableData = [
    ["Driving without a license (first occasion)", "25,000"],
    ["Driving without a license (second occasion)", "30,000"],
    ["Employing a driver without a license (first occasion)", "25,000"],
    ["Employing a driver without a license (second occasion)", "30,000 - 50,000"],
    ["Driving under the influence of liquor (narcotics)", "25,000"],
    ["Transporting passengers for hire under the influence of liquor (In case of death)", "50,000 - 100,000"],
    ["Transporting passengers for hire under the influence of liquor (causing minor injuries)", "30,000 - 50,000"],
    ["Driving 20 percent more than the maximum speed limit", "3,000 - 5,000"],
    ["Driving 30 percent more than the maximum speed limit", "10,000 - 15,000"],
    ["Driving 50 percent more than the maximum speed limit", "15,000 - 25,000"],
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3498db", padding: 10 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Image
            source={require("../assets/TrafficTracerLogo.png")}
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Fine Details</Text>
        </View>

        <View style={{ backgroundColor: "white", borderRadius: 10, padding: 10 }}>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#ccc" }}>
            <Row
              data={tableHead}
              style={{ height: 40, backgroundColor: "#f1f8ff" }}
              textStyle={{ margin: 6, fontWeight: "bold" }}
            />
            <Rows data={tableData} textStyle={{ margin: 6 }} />
          </Table>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FineDetailsScreen;
