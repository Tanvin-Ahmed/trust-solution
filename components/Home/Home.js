import React from "react";
import { useEffect, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import fakeData from "../../utilities/fakeData";

const Home = ({ navigation }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(fakeData);
  }, []);

  const goToDetailsPage = (service) => {
    navigation.navigate("Details", service);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerTitle}>Welcome to Trust Services</Text>
        <Text style={styles.headerParagraphStyle}>Get Our services Now</Text>

        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            onPress={() => goToDetailsPage(service)}
          >
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Image
                  style={styles.cardImage}
                  source={{
                    width: "97%",
                    height: 300,
                    uri: service.img,
                  }}
                />
                <View style={styles.cardText}>
                  <Text style={styles.cardName}>{service.name}</Text>
                  <Text style={styles.cardPrice}>
                    {service.service_charge} $
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
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
  headerTitle: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "dodgerblue",
  },
  headerParagraphStyle: {
    textAlign: "justify",
    paddingTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "gray",
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardImage: {
    borderRadius: 6,
    margin: "auto",
  },
  cardContent: {
    margin: 10,
  },
  cardText: {
    marginTop: 10,
  },
  cardName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
  },
});

export default Home;
