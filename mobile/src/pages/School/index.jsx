import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Text, ImageBackground } from "react-native";
import { withNavigationFocus } from "react-navigation";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
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

function SchoolPage({ navigation }) {
  const [school, setSchool] = useState(navigation.getParam("school"));

  return (
    <Container>
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
            <SchoolAddress>{school.address_city}</SchoolAddress>
          </Row>
        </SchoolHeader>
        <Rooms
          data={school.courses}
          keyExtractor={item => item._id}
          ListHeaderComponent={
            <RoomsHeader>
              <RoomsTitle>Salas disponíveis</RoomsTitle>
            </RoomsHeader>
          }
          renderItem={({ item }) => (
            <RoomItem
              onPress={() => navigation.navigate("CoursePage", { class: item })}
              disabled={!item.available}
              available={item.available}
            >
              <Row style={{ justifyContent: "space-between" }}>
                <View>
                  <RoomSchedule>
                    {format(
                      item.limitSubscriptionDate,
                      "dd 'de' MMMM 'de' yyyy",
                      { locale: pt }
                    )}
                  </RoomSchedule>
                  <Text style={{ marginTop: 5 }}>{item.period}</Text>
                </View>

                <RoomCapacity>{`${item.limitStudents}\nvagas`}</RoomCapacity>
              </Row>
            </RoomItem>
          )}
        />
      </View>
    </Container>
  );
}

SchoolPage.navigationOptions = {
  // title: "Instituição de Ensino",
  headerTransparent: true
};

export default withNavigationFocus(SchoolPage);
