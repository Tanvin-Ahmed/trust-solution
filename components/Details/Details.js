import React from "react";
import { Platform, ScrollView, StatusBar, Text } from "react-native";
import { StyleSheet } from "react-native";

const Details = ({ route }) => {
  console.log(route.params);
  const serviceData = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text>Hello Details</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    fontFamily: "sans-serif",
  },
});

export default Details;
