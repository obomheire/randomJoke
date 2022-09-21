import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

type searchBarProps ={
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;

}

const SearchBar = ({ term, onTermChange, onTermSubmit }: searchBarProps) => {
    return (
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="serach"
          style={styles.inputStyle}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15, // NB: this is the marging left 15 and margin rigth 15
    flexDirection: "row", // allows both items to spread across a single row
    // marginVertical: 15
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1, // allows the search bar to spread across to the end
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
