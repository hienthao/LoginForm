import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  SafeAreaView,
  Dimensions,
} from "react-native";
import FacebookBannerImage from "./assets/facebook-banner.png";

export default function FacebookLogin() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Image source={FacebookBannerImage} style={styles.banner} />

      <SafeAreaView style={styles.formView}>
        <View style={styles.loginView}>
          <TextInput
            placeholder="Input username"
            placeholderTextColor="grey"
            style={{
              color: "grey",
              height: 50,
              borderWidth: 1,
              borderColor: "grey",
              paddingLeft: 20,
            }}
          ></TextInput>
          <TextInput
            placeholder="Password"
            secureTextEntry = {true}
            style={{
              color: "grey",
              height: 50,
              borderWidth: 1,
              borderColor: "grey",
              paddingLeft: 20,
            }}
          ></TextInput>

          <TouchableOpacity
            style={{
              marginTop: 30,
              paddingTop: 12,
              alignItems: "center",
              backgroundColor: "blue",
              height: 50,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableWithoutFeedback>
              <Text style={{ color: "blue", marginTop: 25 }}>
                Forgot Password
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  color: "blue",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                Back
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={{
          width:200,
          height: 1,
          borderTopWidth: 1
        }}>
            <View style={{
              position: "absolute",
            }}>
              <Text>OR</Text>
            </View>
        </View>
        <View style={styles.signupView}>
          <TouchableOpacity
            style={{
              marginTop: 30,
              paddingTop: 12,
              alignItems: "center",
              backgroundColor: "lightblue",
              height: 50,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "blue",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const bannerHight = (screenWidth / 75) * 46;

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
    backgroundColor: "white",
  },
  banner: {
    paddingTop: 0,
    resizeMode: "contain",
    width: "100%",
    height: bannerHight,
  },
  formView: {
    flex: 1,
    margin: 20,
  },
  loginView: {
    alignItems: "stretch",
    justifyContent: "center",
  },
  signupView: {
    width: "100%",
    position: "absolute",
    bottom: 0

  },
});
