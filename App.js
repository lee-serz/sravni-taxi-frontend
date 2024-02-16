import React from "react";
import { View, StyleSheet } from "react-native";
import TaxiPage from "./TaxiPage";

const App = () => {
  return (
    <View style={styles.container}>
      <TaxiPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
