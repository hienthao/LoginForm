import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function MomoLogin() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "deeppink" }}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Hello{" "}
          </Text>
          <Text style={{ color: "white", marginBottom: 10 }}>
            BUI XUAN HIEN{" "}
          </Text>
          <Text style={{ color: "white", marginBottom: 10 }}>0967777124 </Text>
        </View>
        <View style={styles.password}>
          <Feather
            name="lock"
            size="16"
            style={{ position: "absolute", top: 15, left: 10, zIndex:8 }}
          ></Feather>
          <TextInput
            style={{
              borderRadius: 20,
              height: 50,
              fontSize: 20,
              backgroundColor: "white",
              padding: 10,
              paddingLeft: 50,
            }}
          ></TextInput>
        </View>
        <View style={styles.loginButton}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "mediumvioletred",
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
        </View>
        <View style={styles.forgotPass}>
          <TouchableWithoutFeedback>
            <Text style={{ color: "white", alignContent: "center" }}>
              Forgot Password
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text style={{ color: "white", alignContent: "center" }}>
              Logout
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "deeppink",
    color: "white",
    paddingTop: 150,
    alignContent: "center",
    // alignItems: "center",
    margin: 20,
  },

  password: {
    marginTop: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  loginButton: {
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 10,
  },
  forgotPass: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
