import { Dimensions } from "react-native";
import styled from "styled-components/native";
import MapView from "react-native-maps";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Map = styled(MapView)`
  width: ${SCREEN_WIDTH};
  height: ${SCREEN_HEIGHT};
`;
