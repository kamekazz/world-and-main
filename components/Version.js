import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Button,
  Title,
  Body,
  H1
} from "native-base";
import Colors from "../constants/Colors";

const Version = ({ setModalVisibleVersion }) => {
  const goBack = () => {
    setModalVisibleVersion(false);
  };
  return (
    <Container>
      <Header style={{ backgroundColor: Colors.primary }}>
        <Left>
          <Button transparent onPress={() => goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>demo version...</Title>
        </Body>
      </Header>
      <Content>
        <H1>please contact Taveras78@gmail.com for full version</H1>
      </Content>
    </Container>
  );
};

export default Version;

const styles = StyleSheet.create({
  mainText: {
    color: Colors.accent,
    fontWeight: "700"
  }
});
