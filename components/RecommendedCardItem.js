import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { Card, CardItem, Right } from "native-base";
import StarRating from "react-native-star-rating";
class RecommendedCardItem extends Component {
  render() {
    return (
      <CardItem>
        <View>
          <Image
            style={{ height: 110, width: 90 }}
            source={this.props.imageUri}
          />
        </View>
        <Right
          style={{
            flex: 1,
            alignItems: "flex-start",
            height: 90,
            paddingHorizontal: 20
          }}
        >
          <Text>{this.props.itemName}</Text>
          <Text style={{ color: "grey", fontSize: 11 }}>
            {this.props.itemCreator}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#c4402f" }}>
            {this.props.itemPrice}
          </Text>
          <Text>{this.props.savings}</Text>

          <StarRating
            disabled={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={12}
            fullStarColor="orange"
            emptyStarColor="orange"
          />
        </Right>
      </CardItem>
    );
  }
}
export default RecommendedCardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
