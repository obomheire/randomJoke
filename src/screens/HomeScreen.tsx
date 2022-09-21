import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import chuckNorris from "../api/chuckNorris";
import { colors } from "../global/styles";
import SearchBar from "../components/SearchBar";
import { Props } from "../../type";
import { useCategories } from "../contexts/CategoriesContext";

const SCREEN_WIDTH = Dimensions.get("window").width;

type result = [
  {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
  }
];

const HomeScreen = ({ navigation }: Props) => {

  const [term, setTerm] = useState<string>("");
  const [results, setResults] = React.useState<result>();
  const { categories, getCategories } = useCategories();

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await chuckNorris.get(`/search?query=${searchTerm}`, {
        params: {
          limit: 50,
          term: searchTerm,
        },
      });

      return response.data.result;
    } catch (error) {
      console.log(error);
    }
  };

  const search = async () => {
    const result = await searchApi(term);
    setResults(result);
    const arr = result?.map((result: any) => result.value);
    navigation.navigate("SeachDetailScreen", { data: arr });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginBottom: 10,
        paddingTop: 20,
        backgroundColor: colors.buttons,
      }}
    >
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={search} />
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("CategoryDetailScreen", { category: item });
            }}
          >
            <View style={styles.imageView}>
              <ImageBackground
                style={styles.image}
                source={{
                  uri: "https://media.gettyimages.com/photos/chuck-norris-poses-with-two-uzis-his-sleeveless-denim-shirt-to-his-picture-id525603356",
                }}
              >
                <View style={styles.textView}>
                  <Text style={{ color: colors.cardBackground }}>{item}</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.listHeader}>Categories</Text>}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },

  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52,0.3)",
  },
});
