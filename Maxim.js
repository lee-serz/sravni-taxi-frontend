// Citymobil.js
import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Maxim = ({ loading, econPrice, comfortPrice, comfortPlusPrice }) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View style={styles.taxiItem}>
          <Text style={styles.title}>maxim</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              {econPrice && <Text style={styles.label}>Эконом</Text>}
              {econPrice && <Text style={styles.label_2}>{econPrice}</Text>}
            </View>
            <View style={styles.column}>
              {comfortPrice && <Text style={styles.label}>Комфорт</Text>}
              {comfortPrice && (
                <Text style={styles.label_2}>{comfortPrice}</Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 10,
    marginBottom: "20px",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  column: {
    justifyContent: "space-between",
    width: "30%",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
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
    fontSize: "16px",
  },
  taxiItem: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
  },
});

export default Maxim;
