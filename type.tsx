import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack"; //
import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack"; // This is used for StackNavigator}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  HomeScreen: undefined;
  CategoryDetailScreen: { category: string };
  SeachDetailScreen: { data: string[] };
};

export type StackScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = 
  NativeStackScreenProps<RootStackParamList, Screen>;

  //NB: either StackScreenProps or RootStackScreenProps can be use. Both are the same


