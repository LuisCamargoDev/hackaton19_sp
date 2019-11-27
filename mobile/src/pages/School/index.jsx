import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, FlatList, Text } from "react-native";

export default function App() {
  const [school, setSchool] = useState({
    id: 1,
    name: "Escola 1",
    address: "Endereço 1",
    rooms: [
      {
        id: 10,
        capacity: 20,
        schedule: "seg, qua, sex"
      },
      {
        id: 20,
        capacity: 20,
        schedule: "ter, qui"
      }
    ]
  });

  return (
    <View style={styles.container}>
      <View>
        <Text>{school.name}</Text>
        <Text>{school.address}</Text>
      </View>
      <FlatList
        data={school.rooms}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Text>{item.capacity}</Text>
            <Text>{item.schedule}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  text: {
    marginTop: 80,
    fontSize: 18,
    textAlign: "center"
  }
});
