import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.onholdinc.com%2Fmohblog%2Fwp-content%2Fuploads%2F2018%2F03%2Frestaurant.jpg&imgrefurl=https%3A%2F%2Fwww.onholdinc.com%2Fmohblog%2Fhow-background-music-can-impact-your-restaurant-sales%2F&tbnid=y0sI80mtSV7CSM&vet=12ahUKEwjQuKG16ZHwAhXyC7cAHZFYDuoQMygFegUIARDdAQ..i&docid=m-nBwYSy4EM_2M&w=1377&h=607&q=restaurant%20image&safe=active&ved=2ahUKEwjQuKG16ZHwAhXyC7cAHZFYDuoQMygFegUIARDdAQ",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={StyleSheet.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
