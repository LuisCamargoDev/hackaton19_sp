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
      await api.post(`/teachcourse/5dde71509d278259e08be95f`, 
      {
        name,
        description,
        finishDate,
        limitSubscriptionDate
      },
      { 
        headers: {
          coachid: "5dde68b37267870100e5f289"
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
