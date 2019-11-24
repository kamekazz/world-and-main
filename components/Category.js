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
  Body
} from "native-base";
import Colors from "../constants/Colors";

const Category = ({ setModalVisible }) => {
  const goBack = () => {
    setModalVisible(false);
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
          <Title>Category's</Title>
        </Body>
      </Header>
      <Content>
        <List>
          <ListItem>
            <Text style={styles.mainText}>Fans</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Non-Stand Fans</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Stand Fans</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          {/*  */}
          <ListItem itemDivider>
            <Text style={styles.mainText}>Appliance Hook-Up</Text>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Clothing Dryer Parts</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Clothing Washer Parts</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Dishwasher & Disposal</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Drainage</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>View More</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          {/*  */}
          <ListItem itemDivider>
            <Text style={styles.mainText}> Industrial Cleaning</Text>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Automotive Cleaning</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Janitor Items</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Js-Broom Heads</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          {/*  */}
          <ListItem itemDivider>
            <Text style={styles.mainText}> GENERAL HARDWARE</Text>
          </ListItem>

          <ListItem>
            <Left>
              <Text>Chain & Wire</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Chemicals</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Flooring</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          {/*  */}
          <ListItem itemDivider>
            <Text style={styles.mainText}>Hand Tools</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Bags and Boxes</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Cutting Tools</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Hammers</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          {/*  */}
          <ListItem itemDivider>
            <Text style={styles.mainText}>Heaters</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Ceramic Heater</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Commercial Heaters</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Oil-Filled Heaters</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          {/*  */}
        </List>
      </Content>
    </Container>
  );
};

export default Category;

const styles = StyleSheet.create({
  mainText: {
    color: Colors.accent,
    fontWeight: "700"
  }
});
