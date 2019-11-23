import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  ScrollView,
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
            <Text>Hello, Robert Iantosca</Text>
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
                  resizeMode: "cover"
                }}
                source={require("../assets/img/Home/main-hompage-comfort-zone1.jpg")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: "cover"
                }}
                source={require("../assets/img/Home/main-hompage-wordlock1.jpg")}
              />
            </View>
          </Swiper>
          <Card
            style={{
              marginLeft: 5,
              marginRight: 5,
              alignItems: "center",
              paddingBottom: 12
            }}
          >
            <CardItem
              header
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#dee0e2",
                width: "100%"
              }}
            >
              <Text>Featured Products</Text>
            </CardItem>
            <RecommendedCardItem
              itemName="HEATER FAN"
              itemCreator="Comfort Zone"
              itemPrice="Item #: 125095"
              savings="UPC: 075877250483"
              imageUri={{
                uri: "http://cranbury.worldandmain.com/img/items/125095_1.jpg"
              }}
              rating={5}
            />
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#dee0e2",
                width: "85%"
              }}
            ></View>
            <RecommendedCardItem
              itemName="HEATER FAN PERSONAL 1500 WATTS"
              itemCreator="Comfort Zone"
              itemPrice="Item #: 125030"
              savings="UPC: 075877070708"
              imageUri={{
                uri: "http://cranbury.worldandmain.com/img/items/125110_1.jpg"
              }}
              rating={5}
            />
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#dee0e2",
                width: "85%"
              }}
            ></View>
            <RecommendedCardItem
              itemName="HEATER FAN TOWER OSC CERAMIC"
              itemCreator="Comfort Zone"
              itemPrice="Item #: 125116"
              savings="UPC: 075877512161"
              imageUri={{
                uri: "http://cranbury.worldandmain.com/img/items/125037_1.jpg"
              }}
              rating={3}
            />
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#dee0e2",
                width: "85%"
              }}
            ></View>
            <RecommendedCardItem
              itemName="HEATER OILFIL SLIM RADIATOR"
              itemCreator="Comfort Zone"
              itemPrice="Item #: 125002Item"
              savings="UPC: 075877700728"
              imageUri={{
                uri: "http://cranbury.worldandmain.com/img/items/125030_1.jpg"
              }}
              rating={3}
            />
          </Card>

          <Card
            style={{
              marginLeft: 5,
              marginRight: 5,
              alignItems: "center",
              paddingBottom: 12
            }}
          >
            <CardItem
              header
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#dee0e2",
                width: "100%"
              }}
            >
              <Text>Special Offers & Events</Text>
            </CardItem>

            <Image
              style={{
                width: "100%",
                resizeMode: "contain"
              }}
              source={{
                uri:
                  "http://cranbury.worldandmain.com/img/banner/CZ-right-promo-box-seasonal-1.jpg"
              }}
            />

            <Image
              style={{
                height: 225,
                width: "100%",
                resizeMode: "contain"
              }}
              source={{
                uri:
                  "http://cranbury.worldandmain.com/img/banner/CZ-right-promo-box-seasonal-2.jpg"
              }}
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
