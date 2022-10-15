import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import chuckNorris from "../api/chuckNorris";
import { RootStackScreenProps, StackScreenProps } from "../../type";
import { colors } from "../global/styles";
import { Category } from "../utils/interface";

const SCREEN_WIDTH = Dimensions.get("window").width;


const CategoryDetailScreen = ({
  route,
  navigation,
}: RootStackScreenProps<"CategoryDetailScreen">) => {
  const [categoryDetails, setcategoryDetails] = React.useState<Category>();
  // console.log(route?.params?.category);

  const query = route.params.category;

  const getCategoryDetails = async () => {
    try {
      const response = await chuckNorris.get(`/random?category=${query}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryDetails().then((data) => {
      setcategoryDetails(data);
    });
  }, [query]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{categoryDetails?.categories[0]}</Text>
      </View>
      <View style={{ height: 150 }}>
        <ImageBackground
          style={{ height: 270 }}
          source={{
            uri: "https://media.gettyimages.com/photos/chuck-norris-poses-with-two-uzis-his-sleeveless-denim-shirt-to-his-picture-id525603356",
          }}
          imageStyle={styles.imageStyle}
        />
      </View>
      <View
        style={{
          marginTop: 120,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={styles.text}>Created Date: </Text>
          <Text style={styles.text}>{categoryDetails?.created_at}</Text>
        </View>
        <View>
          <Text style={styles.text}>Created Updated: </Text>
          <Text style={styles.text}>{categoryDetails?.updated_at}</Text>
        </View>
        <View>
          <Text style={styles.text}>URL: </Text>
          <Text style={styles.text}>{categoryDetails?.url}</Text>
        </View>
        <View>
          <Text style={styles.text}>Value: </Text>
          <Text style={styles.text}>{categoryDetails?.value}</Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.buttons,
  },
  header: {
    marginTop: 20,
    marginHorizontal: 20,
  },

  imageStyle: { borderTopLeftRadius: 5, borderTopRightRadius: 5 },

  text: { color: "white", fontSize: 20, fontWeight: "bold"},

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.grey2,
  },
});
