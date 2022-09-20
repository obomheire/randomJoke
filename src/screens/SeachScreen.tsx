import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import useResults from "../hooks/useResults";
// import ResultsList from "../components/ResultsList";

// const SearchScreen = ({ navigation }) => {
// console.log(props)

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

const SearchScreen = () => {
  const [term, setTerm] = useState<string>("");
  const [results, searchApi, errorMessage] = useResults();

  const filterResultByValue = (value: string) => (results as result).filter((result: any) => result.value === value);

  filterResultByValue(term);

  return (
    <>
      {/* <View style={{flex: 1}}> NB: this will give the same experience as though it is the same as empty tag above */}
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultByPrice("$$")} title="Big pricier" />
        <ResultsList results={filterResultByPrice("$$$")} title="Big Spender" />
      </ScrollView>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
