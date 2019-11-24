import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Icon,
  Picker,
  Form,
  H1,
  H2,
  H3
} from "native-base";
import Colors from "../constants/Colors";
import ResultsList from "../components/ResultsList";

const DescriptionItem = ({ title, value }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", marginVertical: 12 }}>
        <H3 style={{ fontWeight: "700" }}>{title}</H3>
        <H3 style={{ color: "blue", marginLeft: 6 }}>{value}</H3>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

const ButtonEl = ({}) => {
  return (
    <TouchableOpacity>
      <View style={styles.categoryButton}>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            fontSize: 20
          }}
        >
          Order Product
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const SelectorEl = () => {
  const [state, setState] = useState("key1");

  const onValueChange = value => {
    setState(value);
  };
  return (
    <>
      <Form>
        <Picker
          mode="dropdown"
          iosHeader="Select your SIM"
          iosIcon={<Icon name="arrow-down" />}
          style={{ width: 150 }}
          selectedValue={state}
          onValueChange={onValueChange}
        >
          <Picker.Item label="1 dozen" value="key0" />
          <Picker.Item label="2 dozen" value="key1" />
          <Picker.Item label="50 unt" value="key2" />
          <Picker.Item label="100 unt" value="key3" />
          <Picker.Item label="500 unt" value="key4" />
        </Picker>
      </Form>
    </>
  );
};

const MainProductScreen = () => {
  return (
    <Container>
      <Content>
        <View style={{ padding: 12 }}>
          <View>
            <H1>HEATER FAN PERSONAL 1500 WATTS</H1>
            <H2 style={{ color: "#f37924", fontWeight: "500" }}>
              Comfort Zone
            </H2>
          </View>
          <Image
            style={styles.image}
            source={{
              uri: "http://cranbury.worldandmain.com/img/items/125030_1.jpg"
            }}
          />
          <SelectorEl />
          <View style={styles.description}>
            <DescriptionItem title="Item #:" value="125030" />
            <DescriptionItem title="Model # / Alias:" value="CZ707" />
            <DescriptionItem title="Retail UPC #:" value="075877070708" />
          </View>
          <ButtonEl />
        </View>
        <ResultsList title="You May Also Like" />
      </Content>
    </Container>
  );
};

MainProductScreen.navigationOptions = navData => {
  return {
    headerTitle: "Product Details"
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 325
  },
  description: {
    width: "100%"
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#dee0e2",
    width: "85%"
  },
  categoryButton: {
    width: "100%",
    backgroundColor: Colors.accent,
    height: 50,
    borderRadius: 4,
    padding: 7,
    justifyContent: "center"
  }
});

export default MainProductScreen;
