import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const articles = [
  {
    id: 1,
    profileName: "Hienbx",
    profileImage: require("../../assets/Intagram/hienbx_avatar.png"),
    imageSource: require("../../assets/Intagram/image1.png"),
    likeCount: 8731927,
    minutesPassed: 30,
  },
  {
    id: 2,
    profileName: "Helen",
    profileImage: require("../../assets/Intagram/profile2.jpeg"),
    imageSource: require("../../assets/Intagram/image2.png"),
    likeCount: 23432,
    minutesPassed: 1,
  },
  {
    id: 3,
    profileName: "Saran",
    profileImage: require("../../assets/Intagram/profile3.jpg"),
    imageSource: require("../../assets/Intagram/image2.png"),
    likeCount: 653234,
    minutesPassed: 40,
  },
];

export default function Article() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
        {articles.map((article) => (
          <View style={styles.storyArticle}>
            <View style={styles.articleHeader}>
              <View style={styles.articleHeader}>
                <Image
                  style={styles.profileImage}
                  source={article.profileImage}
                ></Image>
                <Text>{article.profileName}</Text>
              </View>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={26}
                color="gray"
                style={styles.iconStyle}
              />
            </View>
            <Image
              style={styles.articleImage}
              source={article.imageSource}
            ></Image>
            <View style={styles.articleHeader}>
              <View style={styles.articleHeader}>
                <TouchableOpacity>
                  <FontAwesome
                    style={styles.iconStyle}
                    name="heart-o"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 15 }}>
                  <SimpleLineIcons
                    style={styles.iconStyle}
                    name="bubble"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <SimpleLineIcons
                    style={styles.iconStyle}
                    name="paper-plane"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <FontAwesome name="bookmark-o" size={24} color="black" />
            </View>
            <Text style={styles.likeCount}>{article.likeCount} liked</Text>
            <View >
              <Text style={styles.minutesPassed}>{article.minutesPassed} phut truoc</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  storyArticle: {},
  articleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 30,
    margin: 10,
  },
  articleImage: {
    width: width,
    height: width * 0.8,
  },
  iconStyle: {
    margin: 5,
  },
  likeCount: {
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  minutesPassed: {
    paddingLeft: 5,
    fontSize: 14,
    color: "grey",
  },
});
