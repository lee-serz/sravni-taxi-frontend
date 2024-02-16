// Citymobil.js
import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Citymobil = ({ loading, taxiPrice }) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View style={styles.taxiItem}>
          <Text style={styles.title}>СитиМобил</Text>
          <Text>{taxiPrice}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#333",
    borderRadius: 10,
    paddingLeft: "20px",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  taxiItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Citymobil;
