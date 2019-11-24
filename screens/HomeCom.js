import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
  StatusBar,
  Modal,
  Image
} from "react-native";
import { Container, Content, Icon, Input, Card, CardItem } from "native-base";
import Colors from "../constants/Colors";
import Swiper from "react-native-swiper";
import RecommendedCardItem from "../components/RecommendedCardItem";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import Category from "../components/Category";

class HomeCom extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  render() {
    return (
      <Container>
        <View style={styles.searchBarRow}>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
          >
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

          <Swiper
            showsButtons={true}
            autoplay={true}
            style={{ height: 150 }}
            autoplayTimeout={4}
          >
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
              <Text>My Orders Sautes</Text>
            </CardItem>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 12,
                height: 90
              }}
            >
              <View
                style={{
                  width: "35%"
                }}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: "contain"
                  }}
                  source={{
                    uri:
                      "https://pp.netclipart.com/pp/s/8-85665_shipping-box-svg-clip-arts-600-x-597.png"
                  }}
                />
                <View
                  style={{
                    backgroundColor: Colors.primary,
                    borderRadius: 50,
                    width: 38,
                    position: "absolute",
                    top: "23%",
                    left: "45%",
                    transform: [{ scaleX: 1.05 }, { rotateY: "25deg" }],
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.8
                  }}
                >
                  <MaterialCommunityIcons
                    size={38}
                    name="earth"
                    color={Colors.accent}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "65%"
                }}
              >
                <View>
                  <Text style={{ color: "#f37924", fontSize: 16 }}>
                    Delivering Day:
                  </Text>
                  <Text style={{ color: Colors.accent, fontSize: 16 }}>
                    Saturday, November 23, 2019
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text>BOS: </Text>
                  <Text>45253847</Text>
                </View>
              </View>
            </View>
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
              navigate={this.props.navigation.navigate}
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
              navigate={this.props.navigation.navigate}
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
              navigate={this.props.navigation.navigate}
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
              navigate={this.props.navigation.navigate}
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
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(false);
          }}
        >
          <Category setModalVisible={this.setModalVisible} />
        </Modal>
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
