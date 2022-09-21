import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type";
import CategoryDetailScreen from "../screens/CategoryDetailScreen";
import HomeScreen from "../screens/HomeScreen";
import SeachDetailScreen from "../screens/SeachDetailScreen";

const JokeSearch = createNativeStackNavigator<RootStackParamList>();

const RootJokeStack = () => {
  return (
    <JokeSearch.Navigator initialRouteName="HomeScreen">
      <JokeSearch.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <JokeSearch.Screen
        name="CategoryDetailScreen"
        component={CategoryDetailScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <JokeSearch.Screen
        name="SeachDetailScreen"
        component={SeachDetailScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </JokeSearch.Navigator>
  );
};
;
export default RootJokeStack;
