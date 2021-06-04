import { MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Button from "../CoreComponent/Button";

const Details = ({ route }) => {
  const { img, name, service_charge, author, features, customers, ratings } = route.params;

  const ratingArr = [1, 2, 3, 4, 5];

  return (
    <ScrollView style={styles.container}>
      <View style={styles}>
        <Image
          style={styles.cardImage}
          source={{
            width: "100%",
            height: 300,
            uri: img,
          }}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles. price}>
          Service Charge: {service_charge} $
        </Text>
        <View style={styles.lists}>
          {
            features.map((feature, index) => (
              <Text style={styles.list} key={index}>{index+1}. {feature}</Text>
            ))
          }
        </View>
        <Text style={styles.about}>About</Text>
        <Text style={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ut maiores laudantium, consequatur molestias alias, reiciendis recusandae, dignissimos atque officia similique temporibus sit dicta eius aut voluptas placeat? Nulla deleniti temporibus ipsa accusantium accusamus harum architecto aliquid, pariatur officia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sapiente? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, pariatur!</Text>
        <Text style={styles.data}>customers: {customers}</Text>
        <View style={styles.ratings}>
          {
            ratingArr.map(rating => <MaterialIcons key={rating} name="star" size={24} color={rating<=ratings?'goldenrod':'black'} />)
          }
        </View>
        <Button text='Buy The Service' style={styles.button}  />
      </View>
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
  cardImage: {
    marginTop: 40,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
    color: 'blue'
  },
  price: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
  },
  author: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
  },
  lists: {
    marginTop: 20,
    marginLeft: 10,
  },
  list: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 5
  },
  about: {
    margin: 10,
    fontSize: 22,
    fontWeight: '500',
    marginTop:20,
  },
  para: {
    marginHorizontal: 10,
    fontSize: 16,
    textAlign: 'justify'
  },
  button: {
    marginTop: 20,
    marginBottom: 50,
  },
  data: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 8
  },
  ratings: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 5,
  }
});

export default Details;
