// import {
//   Button,
//   Image,
//   ImageBackground,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useLayoutEffect } from "react";
// import { useNavigation } from "@react-navigation/native";

// const DriverHome = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={require("../assets/background-image.png")}
//       resizeMode="cover"
//       style={styles.backGroundImage}
//     >
//       <SafeAreaView>
//         <View>
//           {/* logo and welcome part */}
//           <View
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               marginLeft: 6,
//               marginTop: 65,
//             }}
//           >
//             <Image
//               source={require("../assets/TrafficTracerLogo.png")}
//               style={{ width: 60, height: 60 }}
//             />
//             <Text
//               style={{
//                 alignSelf: "center",
//                 marginLeft: 50,
//                 fontSize: 20,
//                 fontWeight: "900",
//               }}
//             >
//               WelCome User!
//             </Text>
//           </View>

//           {/* first buttons box */}
//           <View>
//             <View style={styles.contain}>
//               <TouchableOpacity style={{ marginTop: 35 }}>
//                 <Text style={{ marginLeft: 10, fontSize: 35 }}>
//                   {"Fines\nDetails"}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={{ marginLeft: 70, marginTop: 35 }}>
//                 <Text style={{ fontSize: 35 }}>{"Fine\nStatus"}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           {/* botton buttons box */}
//           <View style={styles.downBoxFrame}>
//             <View style={styles.downBox}>
//               <TouchableOpacity>
//                 <Text
//                   style={{ marginLeft: 120, fontSize: 20, fontWeight: "700" }}
//                 >
//                   Remainber
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Text
//                   style={{ marginLeft: 130, fontSize: 40, fontWeight: "700" }}
//                 >
//                   Add
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

// export default DriverHome;

// const styles = StyleSheet.create({
//   backGroundImage: {},

//   contain: {
//     backgroundColor: "white",
//     borderRadius: 20,
//     marginHorizontal: 10,
//     height: 200,
//     marginTop: 55,
//     alignContent: "space-between",
//     flexDirection: "row",
//   },

//   downBoxFrame: {
//     backgroundColor: "white",
//     borderRadius: 20,
//     marginHorizontal: 10,
//     height: 200,
//     marginTop: 65,
//     alignContent: "space-between",
//     flexDirection: "row",
//     marginBottom: 440,
//   },

//   downBox: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     marginBottom: 17,
//   },
// });
