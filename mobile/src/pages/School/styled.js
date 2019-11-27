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
  font-weight: bold;
`;

export const SchoolAddress = styled.Text`
  font-size: 16px;
`;

export const Rooms = styled(FlatList)`
  margin: 20px 0 0;
`;

export const RoomItem = styled.TouchableOpacity`
  border-radius: 4px;
  margin: 10px 10px 0px;
  /* background-color: #c1c1c1; */
  padding: 10px 20px;
  border-left-width: 5px;
  border-width: 1;
  border-color: #c1c1c1;
  /* border-left-color: ${props => (props.available ? "green" : "red")}; */
`;

export const RoomCapacity = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
`;

export const RoomSchedule = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Ionicons)`
  margin-right: 10px;
`;

export const RoomsHeader = styled.View`
  padding: 0 0 0 10px;
`;

export const RoomsTitle = styled.Text``;
