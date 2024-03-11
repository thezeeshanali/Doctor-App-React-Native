import * as React from "react";
import { Searchbar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomizeSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search For Madicine"
      onChangeText={onChangeSearch}
      value={searchQuery}
      icon={() => <FontAwesome name="search" size={24} color="black" />}
      clearIcon={() => (
        <FontAwesome5 name="backspace" size={24} color="black" />
      )}
    />
  );
};

export default CustomizeSearchBar;
