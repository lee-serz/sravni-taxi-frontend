// TaxiPage.js
import React, { useState } from "react";
import axios from "axios";

import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Citymobil from "./Citymobil";

const TaxiPage = () => {
  const [origin, setOrigin] = useState("Башкирская 12");
  const [destination, setDestination] = useState("Ларина 45");
  const [econPrice, setEconPrice] = useState("");
  const [comfortPrice, setComfortPrice] = useState("");
  const [comfortPlusPrice, setComfortPlusPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [originFocused, setOriginFocused] = useState(false);
  const [destinationFocused, setDestinationFocused] = useState(false);

  const handleSearchСitymobil = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4200/citymobil",
        {
          from: origin,
          to: destination,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEconPrice(response.data.econPrice);
      setComfortPrice(response.data.comfortPrice);
      setComfortPlusPrice(response.data.comfortPlusPrice);
    } catch (error) {
      console.error("Error fetching taxi data:", error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={[
            styles.input,
            { borderColor: originFocused ? "#fff" : "#ccc" },
          ]}
          placeholder="Откуда"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={origin}
          onChangeText={setOrigin}
          onFocus={() => setOriginFocused(true)}
          onBlur={() => setOriginFocused(false)}
          selectTextOnFocus={false}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: destinationFocused ? "#fff" : "#ccc" },
          ]}
          placeholder="Куда"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={destination}
          onChangeText={setDestination}
          onFocus={() => setDestinationFocused(true)}
          onBlur={() => setDestinationFocused(false)}
          selectTextOnFocus={false}
        />
        <TouchableOpacity
          style={styles.btn_search}
          onPress={handleSearchСitymobil}
        >
          <Text style={styles.btn_text}>Найти такси</Text>
        </TouchableOpacity>
      </View>
      <Citymobil
        loading={loading}
        econPrice={econPrice}
        comfortPrice={comfortPrice}
        comfortPlusPrice={comfortPlusPrice}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingTop: "25px",
  },
  formContainer: {
    width: "100%",
    marginBottom: 20,
    padding: 25,
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: "10px",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#fff",
    fontWeight: "600",
  },
  btn_search: {
    backgroundColor: "#222",
    width: "50%",
    borderRadius: 16,
    alignItems: "center",
    padding: 15,
  },
  btn_text: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default TaxiPage;
