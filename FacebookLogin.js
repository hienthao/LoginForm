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
import FacebookBannerImage from "/Users/hienbui/biplus_projects/react-native-study/LoginForm/assets/facebook-banner.png";

export default function FacebookLogin() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerView}>
        <Image source={FacebookBannerImage} style={styles.banner}></Image>
      </View>
      <View style={styles.loginView}>
        <TextInput defaultValue="Input username"
          style={{
            color: "grey",
            height: 50,
            borderWidth: 1,
            borderColor: "grey",
            paddingLeft: 20
          }}
        ></TextInput>
        <TextInput defaultValue="Password" textContentType="password"
          style={{
            color: "grey",
            height: 50,
            borderWidth: 1,
            borderColor: "grey",
            paddingLeft: 20
          }}
        ></TextInput>

        <TouchableOpacity
          style={{
              marginTop:30,
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

        <TouchableWithoutFeedback>
          <Text style={{ color: "white", alignContent: "center" }}>
            Forgot Password
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={{ color: "white", alignContent: "center" }}>Back</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.signupView}></View>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const bannerHight = (screenWidth / 75) * 46;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  banner: {
    resizeMode: "contain",
    width: "100%",
    height: bannerHight,
  },
  bannerView: {},
  loginView: {
    margin: 20,
    alignItems: "stretch",
    justifyContent: "center",
  },
  signupView: {
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 10,
  },
});
