import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TaxiPage from "./TaxiPage";

const App = () => {
  return (
    <LinearGradient
      colors={["#242d39", "#10253c", "#0d0c0c"]}
      start={{ x: 1, y: 0 }} // начало градиента в верхнем левом углу
      end={{ x: 1, y: 1 }} // конец градиента в нижнем правом углу
      style={styles.container}
    >
      <TaxiPage />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "10px",
    flex: 1,
  },
});

export default App;
