import React, { useState } from "react";
import { Text } from "react-native";

import api from "../../services/api";

import DateInput from "../../components/DateInput";

import { Container, Button, ButtonText, Form, FormInput } from "./styled";

function CoursePage({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  async function makeProposal() {
    const course = navigation.getParam("class");

    try {
      // await api.put(`${course.id}`, {
      //   name,
      //   description,
      //   duration
      // });

      navigation.pop();
    } catch (err) {}
  }

  return (
    <Container>
      <Text>Informe os detalhes do curso que você gostaria de ministrar</Text>

      <Form>
        <FormInput
          value={name}
          placeholder="Nome"
          onChangeText={text => setName(text)}
        />
        <FormInput
          value={description}
          placeholder="Descriçâo"
          onChangeText={text => setDescription(text)}
        />

        <DateInput date={date} onChange={setDate} />

        <Button onPress={makeProposal}>
          <ButtonText>Propor Curso</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}

CoursePage.navigationOptions = {
  title: "Proposta de Curso"
};

export default CoursePage;
