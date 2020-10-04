import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  Switch,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from "react-native";
import ImageBulbOff from "./assets/bulb-off.jpg";
import ImageBulbOn from "./assets/bulb-on.jpg";

export default function TheLight() {
  const [isEnabled, setIsEnable] = useState(false);
   sourceImage = ImageBulbOff;

  function toggleSwitch() {
    setIsEnable(!isEnabled);
  }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="light"></StatusBar>
      <Image source={isEnabled ? ImageBulbOn: ImageBulbOff} style={styles.imageBulb} onValueChange ={toggleSwitch}/>

      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </SafeAreaView>
  );
}

const screenWidth = Dimensions.get("window").width;
const bannerHight = (screenWidth / 631) * 925;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBulb: {
    resizeMode: "contain",
    width: "100%",
    height: bannerHight,
  },
});
