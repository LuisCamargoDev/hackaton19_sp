import React, { useState, useEffect } from "react";
import { Text, Platform, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Marker } from "react-native-maps";

import api from "../../services/api";

import { Container, Map } from "./styled";

function MapPage({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [schools, setSchools] = useState([]);

  async function fetchSchools() {
    try {
      // const response = await api.get('schools')
      const response = {
        data: [
          {
            id: 1,
            name: "Escola 1",
            coords: {
              latitude: -23.643688,
              longitude: -46.640053
            }
          },
          {
            id: 2,
            name: "Rocketseat Experience",
            coords: {
              latitude: -23.64474,
              longitude: -46.63022
            }
          }
        ]
      };

      setSchools(response.data);
    } catch (err) {}
  }

  useEffect(() => {
    async function _getLocationAsync() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMessage(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      fetchSchools();
      _getLocationAsync();
    }
  }, []);

  return (
    <Container>
      {!errorMessage && !location && <ActivityIndicator size="large" />}

      {errorMessage && <Text>{errorMessage}</Text>}

      {location && (
        <Map
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker coordinate={location.coords} title="Você" />

          {schools.map(school => (
            <Marker
              key={school.id}
              coordinate={school.coords}
              title={school.name}
              onCalloutPress={() =>
                navigation.navigate("SchoolPage", { schoolId: school.id })
              }
            />
          ))}
        </Map>
      )}
    </Container>
  );
}

MapPage.navigationOptions = {
  header: null
};

export default MapPage;
