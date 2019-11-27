import React, { useState } from "react";

import api from "../../services/api";

import DateInput from "../../components/DateInput";

import { Container, Button, ButtonText, Form, FormInput, Label, Title } from "./styled";

function CoursePage({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [limitSubscriptionDate, setLimitSubscriptionDate] = useState(new Date());

  async function makeProposal() {
    const course = navigation.getParam("class");

    try {
      await api.post(`/teachcourse/${course._id}`, 
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
      <Title>Informe os detalhes do curso que você gostaria de ministrar:</Title>

      <Form>
        <Label>Nome:</Label>
        <FormInput
          value={name}
          onChangeText={text => setName(text)}
          underlineColorAndroid
        />

        <Label>Descrição:</Label>
        <FormInput
          value={description}
          onChangeText={text => setDescription(text)}
          underlineColorAndroid
        />

        <Label>Limite data de inscrição:</Label>
        <DateInput
          date={limitSubscriptionDate}
          onChange={setLimitSubscriptionDate}
        />

        <Label>Data inicial:</Label>
        <DateInput 
          date={startDate} 
          onChange={setStartDate} 
        />

        <Label>Data final:</Label>
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
