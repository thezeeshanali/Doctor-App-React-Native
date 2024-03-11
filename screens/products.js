import {
  FlatList,
  LogBox,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { color } from "../colorPallete/colors";
import FieldText from "../components/fieldText";
import Icon from "@expo/vector-icons/AntDesign";
import CustomHeader from "../components/header";
import CustomizeSearchBar from "../components/searchBar";
import ProductCard from "../components/productCard";

const data = [
  {
    id: 1,
    image:
      "https://www.nicepng.com/png/detail/362-3627926_tablet-clipart-medicine-storage-pills-png.png",
    description: "panadol 1 mg",
    price: 500,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGplyf3c9wUQnG6dYVTXt9QcULBjyhn7QNQvekSoB5DiaZEEM6824Cb1Y4tWDaVIA_lu8&usqp=CAU://www.nicepng.com/png/detail/362-3627926_tablet-clipart-medicine-storage-pills-png.png",
    description: "disprin 1 mg",
    price: 800,
  },
  {
    id: 3,
    image:
      "https://www.nicepng.com/png/detail/362-3627926_tablet-clipart-medicine-storage-pills-png.png",
    description: "tegepemat 1 mg",
    price: 700,
  },
  {
    id: 4,
    image:
      "https://www.nicepng.com/png/detail/362-3627926_tablet-clipart-medicine-storage-pills-png.png",
    description: "her0 1 mg",
    price: 600,
  },
  {
    id: 5,
    image:
      "https://www.nicepng.com/png/detail/362-3627926_tablet-clipart-medicine-storage-pills-png.png",
    description: "save me 1 mg",
    price: 1000,
  },
  {
    id: 6,
    image:
      "https://www.nicepng.com/png/detail/362-3627926_tablet-clipart-medicine-storage-pills-png.png",
    description: "queen 1 mg",
    price: 790,
  },
];

export default function Products({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        text="Select Madicines"
        onPress={() => navigation.toggleDrawer()}
        cartPress={() => navigation.navigate("NoCartItems")}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <CustomizeSearchBar />
        <View style={styles.box}>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ProductCard
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingBottom: 10,
  },
  box: {
    backgroundColor: color.body,
  },
});
