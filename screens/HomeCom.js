import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { Container, Content, Icon, Input, Card, CardItem } from "native-base";
import Colors from "../constants/Colors";
import Swiper from "react-native-swiper";
import RecommendedCardItem from "../components/RecommendedCardItem";
import { FontAwesome } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

class HomeCom extends Component {
  render() {
    return (
      <Container>
        <View style={styles.searchBarRow}>
          <TouchableOpacity>
            <View style={styles.categoryButton}>
              <Text style={{ fontSize: 12, color: "white" }}>Shop by</Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Category
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.searchBarItem}>
            <View style={styles.searchBar}>
              <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
              <Input placeholder="Search" />
            </View>
          </View>
        </View>

        <Content style={{ backgroundColor: "#d5d5d6" }}>
          <View style={styles.gridedCard}>
            <Text>Hello, Varun Nath</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: Colors.accent }}>Your Account </Text>
              <FontAwesome name="chevron-right" color={Colors.accent} />
            </View>
          </View>

          <Swiper autoplay={true} style={{ height: 100 }}>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "contain"
                }}
                source={require("../assets/swiper_2.jpg")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "contain"
                }}
                source={require("../assets/swiper_3.jpg")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "contain"
                }}
                source={require("../assets/swiper_2.jpg")}
              />
            </View>
          </Swiper>
          <Card style={{ marginLeft: 5, marginRight: 5 }}>
            <CardItem
              header
              style={{ borderBottomWidth: 1, borderBottomColor: "#dee0e2" }}
            >
              <Text>Your Recommendations</Text>
            </CardItem>
            <RecommendedCardItem
              itemName="You can heal your life"
              itemCreator="Louise Hay"
              itemPrice="$10"
              savings="2.5"
              imageUri={require("../assets/recommended_1.jpg")}
              rating={5}
            />
            <RecommendedCardItem
              itemName="Uncharted 4"
              itemCreator="Sony"
              itemPrice="$19.99"
              savings="17"
              imageUri={require("../assets/recommended_2.jpg")}
              rating={5}
            />
            <RecommendedCardItem
              itemName="Ea UFC 3"
              itemCreator="Ea Sports"
              itemPrice="$44"
              savings="6"
              imageUri={require("../assets/recommended_3.jpg")}
              rating={3}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}

HomeCom.navigationOptions = navData => {
  return {
    headerTitle: "Dashboard",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default HomeCom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  },
  searchBarRow: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 3,
    height: 53
  },
  categoryButton: {
    width: 100,
    backgroundColor: Colors.accent,
    height: 50,
    borderRadius: 4,
    padding: 7,
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 3
  },
  searchBarItem: {
    flex: 1,
    height: "100%",
    marginLeft: 5,
    justifyContent: "center"
  },
  searchBar: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 4,
    height: 50,
    flexDirection: "row",
    alignItems: "center"
  },
  gridedCard: {
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between"
  }
});
