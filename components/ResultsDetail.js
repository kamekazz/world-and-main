import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: result.image_url }}
      />
      <Text numberOfLines={2} style={styles.name}>
        {result.name}
      </Text>
      <Text style={{ color: "blue" }}>{result.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    width: 110
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  }
});

export default ResultsDetail;
