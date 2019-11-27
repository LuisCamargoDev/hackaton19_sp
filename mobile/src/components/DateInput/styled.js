import styled from "styled-components/native";

export const Container = styled.View`
  margin: 0 0 30px;
`;

export const DateButton = styled.TouchableOpacity`
  height: 46px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  /* background: rgba(0, 0, 0, 0.1); */
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: #000;
  margin-left: 15px;
`;

export const Picker = styled.View`
  background: #fff;
  padding: 15px 30px;
  margin-top: 30px;
`;
