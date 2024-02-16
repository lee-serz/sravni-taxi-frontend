import React, { useState } from "react";
import axios from "axios";

import {
  View,
  TextInput,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Citymobil from "./Citymobil";

const TaxiPage = () => {
  const [origin, setOrigin] = useState("Башкирская 12");
  const [destination, setDestination] = useState("Ларина 45");
  const [taxiPrice, setTaxiPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [originFocused, setOriginFocused] = useState(false);
  const [destinationFocused, setDestinationFocused] = useState(false);

  const handleSearchSitymobil = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4200/citymobil",
        {
          from: origin, // Изменяем origin на from
          to: destination, // Изменяем destination на to
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTaxiPrice(response.data);
      console.log(taxiPrice);
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
          onPress={handleSearchSitymobil}
        >
          <Text style={styles.btn_text}>Найти такси</Text>
        </TouchableOpacity>
      </View>
      <Citymobil loading={loading} taxiPrice={taxiPrice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    marginBottom: 20,
    padding: 25,
    alignItems: "center",
    backgroundColor: "#333",
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
  list: {
    width: "100%",
  },
  taxiItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default TaxiPage;
