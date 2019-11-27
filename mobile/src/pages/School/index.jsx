import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { withNavigationFocus } from "react-navigation";

import api from "../../services/api";

import {
  Container,
  SchoolHeader,
  SchoolName,
  SchoolAddress,
  Rooms,
  RoomItem,
  RoomCapacity,
  RoomSchedule,
  Row,
  Icon
} from "./styled";

function SchoolPage({ navigation, isFocused }) {
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchRooms() {
    try {
      setLoading(true);

      const schoolId = navigation.getParam("schoolId");
      // const response = await api.get(`schools/${schoolId}`)
      const response = {
        data: {
          id: 1,
          name: "Centro de Ensino Médio Setor Oeste",
          address: "Mod D - Asa Sul, Brasília - DF, 70390-120",
          rooms: [
            {
              id: 10,
              capacity: 20,
              schedule: "seg, qua, sex",
              available: true
            },
            {
              id: 20,
              capacity: 20,
              schedule: "ter, qui",
              available: false
            }
          ]
        }
      };

      setSchool(response.data);
    } catch (err) {
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  }

  useEffect(() => {
    if (isFocused) {
      fetchRooms();
    }
  }, [isFocused]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <SchoolHeader>
            <Row>
              <Icon name="md-business" size={32} color="gray" />
              <SchoolName>{school.name}</SchoolName>
            </Row>
            <Row>
              <Icon name="md-pin" size={32} color="gray" />
              <SchoolAddress>{school.address}</SchoolAddress>
            </Row>
          </SchoolHeader>
          <Rooms
            data={school.rooms}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <RoomItem
                onPress={() =>
                  navigation.navigate("CoursePage", { class: item })
                }
                disabled={!item.available}
                available={item.available}
              >
                <RoomCapacity>Vagas: {item.capacity}</RoomCapacity>
                <RoomSchedule>Dias: {item.schedule}</RoomSchedule>
              </RoomItem>
            )}
          />
        </View>
      )}
    </Container>
  );
}

SchoolPage.navigationOptions = {
  title: "Instituição de Ensino"
};

export default withNavigationFocus(SchoolPage);
