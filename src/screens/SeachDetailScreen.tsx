import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Props } from "../../type";
import { colors } from "../global/styles";

const SearchBarTitle = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.textStyle}>Search Results</Text>
    </View>
  );
};

const SeachDetailScreen = ({ route, navigation }: Props) => {
  const query = route?.params?.data;

  // console.log(query);

  // <View style={{ flex: 2 }}>
  //   <Image style={{flex: 1}} source={{ uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png" }} />
  // </View>;

  return (
    <View style={styles.container}>
      <SearchBarTitle />
      <FlatList
        data={query}
        keyExtractor={(item) => item}
        renderItem={({ item }) =>
          item ? (
              <View style={{ margin: 5 }}>
                <Text style={{ color: "#fff", fontSize: 20 }}>{item}</Text>
              </View>
          ) : null
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SeachDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: colors.buttons,
  },
  listHeader: {
    fontSize: 30,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    width: "100%",
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
});
