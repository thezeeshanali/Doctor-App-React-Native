import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { color } from "../colorPallete/colors";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function Banner() {
  const BannerImages = [
    require("../assets/2.jpg"),
    require("../assets/3.jpg"),
    require("../assets/4.jpg"),
    require("../assets/5.jpg"),
    require("../assets/6.jpg"),
  ];

  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={2}
        showPagination
        paginationDefaultColor="white"
        paginationActiveColor={color.headerColor}
        data={BannerImages}
        renderItem={({ item }) => (
          <View style={[styles.child]}>
            <Image source={item} style={styles.img} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  child: { width, justifyContent: "center" },
  img: {
    width,
    height,
  },
});
