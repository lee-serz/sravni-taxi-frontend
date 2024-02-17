// Citymobil.js
import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const Yandex = ({ loading, econPrice, comfortPrice, comfortPlusPrice }) => {
  const formattedEconPrice = econPrice
    ? parseInt(econPrice.replace(/[^\d.]+/g, "").trim(), 10) + 142
    : null;
  const formattedComfortPrice = comfortPrice
    ? parseInt(comfortPrice.replace(/[^\d.]+/g, "").trim(), 10) + 164
    : null;

  const formattedBuisnessPrice = comfortPrice
    ? parseInt(comfortPrice.replace(/[^\d.]+/g, "").trim(), 10) + 241
    : null;
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View style={styles.taxiItem}>
          <Text style={styles.title}>YandexGo</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              {formattedEconPrice && <Text style={styles.label}>Эконом</Text>}
              {formattedEconPrice && (
                <Text style={styles.label_2}>{formattedEconPrice} ₽</Text>
              )}
            </View>
            <View style={styles.column}>
              {formattedComfortPrice && (
                <Text style={styles.label}>Комфорт</Text>
              )}
              {formattedComfortPrice && (
                <Text style={styles.label_2}>{formattedComfortPrice} ₽</Text>
              )}
            </View>
            <View style={styles.column}>
              {formattedBuisnessPrice && (
                <Text style={styles.label}>Бизнес</Text>
              )}
              {formattedBuisnessPrice && (
                <Text style={styles.label_2}>{formattedBuisnessPrice} ₽</Text>
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

export default Yandex;
