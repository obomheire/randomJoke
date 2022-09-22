import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CategoriesContextProvider from "./src/contexts/CategoriesContext";
import SearchQueryContextProvider from "./src/contexts/SearchContext";

import RootNavigator from "./src/navigator/RootNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <CategoriesContextProvider>
        <SearchQueryContextProvider>
          <RootNavigator />
          <StatusBar style="auto" />
        </SearchQueryContextProvider>
      </CategoriesContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
