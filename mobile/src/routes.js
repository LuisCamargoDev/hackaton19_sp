import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MapPage from "./pages/Map";
import SchoolPage from "./pages/School";

const MainStack = createStackNavigator({
  MapPage,
  SchoolPage
});

export default createAppContainer(MainStack);
