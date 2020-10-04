import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

export default function Story() {
  //let texts = [];
  const stories = [
    {
      id: 1,
      title: "Hienbx",
      imageSource: require("../../assets/Intagram/hienbx_avatar.png"),
    },
    {
      id: 2,
      title: "Helen",
      imageSource: require("../../assets/Intagram/profile2.jpeg"),
    },
    {
      id: 3,
      title: "Lucy",
      imageSource: require("../../assets/Intagram/profile3.jpg"),
    },
    {
      id: 4,
      title: "Saran",
      imageSource: require("../../assets/Intagram/profile4.jpg"),
    },
    {
      id: 5,
      title: "Betsy",
      imageSource: require("../../assets/Intagram/profile5.jpg"),
    },
  ];

  //   for (let i = 0; i < 20; i++) {
  //     texts.push(
  //       <View style={styles.storyDetailView}>
  //         <Image style={styles.storyImage} source={AvatarDefault}></Image>
  //         <Text>Hienbx</Text>
  //       </View>
  //     );
  //   }

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.storeScrollView}>
        {stories.map((story) => (
          <View style={styles.storyDetailView}>
            <Image style={styles.storyImage} source={story.imageSource}></Image>
            <Text>{story.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:10,
    paddingHorizontal: 5,
    backgroundColor: "lightgrey",
    borderTopWidth: 1,
    borderTopColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  storeScrollView: {},
  storyDetailView: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
