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
import UploadPresc from "../components/uploadPresc";
import Card from "../components/card";
import BackHeader from "../components/header1";

const data = [
  {
    id: 1,
    image:
      "https://www.who.int/images/default-source/wpro/health-topic/hospitals/f8-11102016-my-6042.tmb-1024v.jpg?sfvrsn=57e1f33d_3",
    text: "Chungi Lab",
  },
  {
    id: 2,
    image:
      "https://th-thumbnailer.cdn-si-edu.com/qL8iOmVhBPnp_P60qNZZgw-6ST0=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b4/c6/b4c65fd0-01ba-4262-9b3d-f16b53bca617/istock-172463472.jpg",
    text: "Chugtai Lab",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/photos/large-modern-building-with-blue-letter-h-sign-for-hospital-picture-id1240772668?k=20&m=1240772668&s=170667a&w=0&h=7FIoYUU73kz_5OVIY3KQVwte0bXTCr4NLoMXnoxkn2s=",
    text: "Famous Lab",
  },
  {
    id: 4,
    image:
      "https://media-exp1.licdn.com/dms/image/C4E1BAQFPCuSWLrb5ew/company-background_10000/0/1562008863646?e=2147483647&v=beta&t=Lf0YjuZOh-DzA-nc-7myiZ9K0p6X6mevSM_k_VDGlQ4",
    text: "Sikh Chugtai lab",
  },
  {
    id: 5,
    image: "https://www.fels.upenn.edu/sites/default/files/5.4.17.jpg",
    text: "Sabzazar Rich Lab",
  },
];

export default function LabTest({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BackHeader text="Select Lab" backIcon={() => navigation.goBack()} />

      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <UploadPresc
          icon="text-document"
          text="  Upload Prescription"
          text1="Sample Collection Timings:"
          text2="9:00am to 10:00pm"
        />
        <View style={styles.box}>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <Card img={item.image} text={item.text} />;
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
