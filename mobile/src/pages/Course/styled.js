import styled from "styled-components/native";
import { Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === "ios",
  behavior: "padding"
})`
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 40px;
`;

export const FormInput = styled.TextInput`
  margin-top: 10px;
`;

export const Button = styled(RectButton)`
  height: 50px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background-color: #7159c1;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
