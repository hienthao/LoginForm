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
  Dimensions, ScrollView
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import Header from "./components/Intagram/Header";
import Story from "./components/Intagram/Story";
import Article from "./components/Intagram/Article";

export default function IntagramForm() {
 
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
      <Story />
      <Article />
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
