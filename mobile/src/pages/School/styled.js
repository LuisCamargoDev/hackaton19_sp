import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const SchoolHeader = styled.View`
  padding: 10px 20px;
`;

export const SchoolName = styled.Text`
  font-size: 18px;
`;

export const SchoolAddress = styled.Text`
  font-size: 16px;
`;

export const Rooms = styled(FlatList)``;

export const RoomItem = styled.TouchableOpacity`
  border-radius: 4px;
  margin: 5px 10px 0px;
  background-color: #c1c1c1;
  padding: 10px 20px;
  border-left-color: ${props => (props.available ? "green" : "red")};
  border-left-width: 5px;
`;

export const RoomCapacity = styled.Text``;

export const RoomSchedule = styled.Text``;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Ionicons)`
  margin-right: 10px;
`;
