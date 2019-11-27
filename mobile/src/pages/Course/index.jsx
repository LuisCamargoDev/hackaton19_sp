import React, { useState } from "react";
import { Text } from "react-native";

import api from "../../services/api";

import DateInput from "../../components/DateInput";

import { Container, Button, ButtonText, Form, FormInput } from "./styled";

function CoursePage({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [finishDate, setFinishDate] = useState(new Date());
  const [limitSubscriptionDate, setLimitSubscriptionDate] = useState(new Date());

  async function makeProposal() {
    const course = navigation.getParam("class");

    try {
      await api.post(`/teachcourse/5dde761dd4b6980017531e8e`, 
      {
        name,
        description,
        finishDate,
        limitSubscriptionDate
      },
      { 
        headers: {
          coachid: "5dde7612d4b6980017531e8c"
        }
      });

      navigation.pop();
    } catch (err) {
      alert(err);
    }
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

        <DateInput
          date={limitSubscriptionDate}
          onChange={setLimitSubscriptionDate}
        />

        <DateInput 
          date={finishDate} 
          onChange={setFinishDate} 
        />

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
