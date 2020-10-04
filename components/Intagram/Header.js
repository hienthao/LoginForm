import React from "react";

import {
  View,
  StyleSheet,
  Text, Image
} from "react-native";
import {
  FontAwesome
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import IntagramLogo from "../../assets/Instagram_logo.svg.png";

export default function Header() {
  return (
    <View style={styles.container}>
      <FontAwesome name="camera" size={24} color="black" />
      <Image source={IntagramLogo} style={{width: 70, height: 30}} />
      <FontAwesome name="paper-plane" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
