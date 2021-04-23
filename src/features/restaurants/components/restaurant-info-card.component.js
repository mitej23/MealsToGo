import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
