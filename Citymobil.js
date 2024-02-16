// Citymobil.js
import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Citymobil = ({ loading, econPrice, comfortPrice, comfortPlusPrice }) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View style={styles.taxiItem}>
          <Text style={styles.title}>СитиМобил</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              {econPrice && <Text style={styles.label}>Эконом</Text>}
              {econPrice && <Text style={styles.label_2}>от {econPrice}</Text>}
            </View>
            <View style={styles.column}>
              {comfortPrice && <Text style={styles.label}>Комфорт</Text>}
              {comfortPrice && (
                <Text style={styles.label_2}>от {comfortPrice}</Text>
              )}
            </View>
            <View style={styles.column}>
              {comfortPlusPrice && <Text style={styles.label}>Комфорт+</Text>}
              {comfortPlusPrice && (
                <Text style={styles.label_2}>от {comfortPlusPrice}</Text>
              )}
            </View>
          </View>
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
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    justifyContent: "space-between",
    width: "30%",
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 5,
  },
  label: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
  label_2: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "normal",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  taxiItem: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
  },
});

export default Citymobil;
