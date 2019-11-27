import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Text, ImageBackground } from "react-native";
import { withNavigationFocus } from "react-navigation";
// import { ImageBackground } from "expo";

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
  Icon,
  RoomsHeader,
  RoomsTitle
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
      setLoading(false);
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
          <ImageBackground
            source={{
              uri:
                "https://images4.opb.org/c_limit%2Cg_south%2Ch_1000%2Cq_90%2Cw_640/20190805_franklin_high_school_em-2.jpg"
            }}
            style={{
              width: "100%",
              height: 150,
              opacity: 0.5,
              justifyContent: "flex-end"
            }}
          ></ImageBackground>
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
            ListHeaderComponent={
              <RoomsHeader>
                <RoomsTitle>Salas disponíveis</RoomsTitle>
              </RoomsHeader>
            }
            renderItem={({ item }) => (
              <RoomItem
                onPress={() =>
                  navigation.navigate("CoursePage", { class: item })
                }
                disabled={!item.available}
                available={item.available}
              >
                <Row style={{ justifyContent: "space-between" }}>
                  <View>
                    <RoomSchedule>{item.schedule}</RoomSchedule>
                    <Text style={{ marginTop: 5 }}>10:30h</Text>
                  </View>

                  <RoomCapacity>{`${item.capacity}\nvagas`}</RoomCapacity>
                </Row>
              </RoomItem>
            )}
          />
        </View>
      )}
    </Container>
  );
}

SchoolPage.navigationOptions = {
  // title: "Instituição de Ensino",
  headerTransparent: true
};

export default withNavigationFocus(SchoolPage);
