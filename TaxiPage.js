// TaxiPage.js
import React, { useState } from "react";
import axios from "axios";

import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Citymobil from "./Citymobil";
import Maxim from "./Maxim";
import Yandex from "./Yandex";

const TaxiPage = () => {
  const [origin, setOrigin] = useState("Башкирская улица, 12");
  const [destination, setDestination] = useState("Ларина улица, 45");
  const [citymobil, setCitymobil] = useState("");
  const [maxim, setMaxim] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [originFocused, setOriginFocused] = useState(false);
  const [destinationFocused, setDestinationFocused] = useState(false);

  const handleSearchСitymobil = async () => {
    setLoading1(true);
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
      setCitymobil(response.data);
    } catch (error) {
      console.error("Error fetching taxi data:", error);
    }
    setLoading1(false);
  };

  const handleSearchMaxim = async () => {
    setLoading2(true);
    try {
      const response = await axios.post(
        "http://localhost:4200/maxim",
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
      setMaxim(response.data);
    } catch (error) {
      console.error("Error fetching Maxim taxi data:", error);
    }
    setLoading2(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>
          <Text style={styles.yellow}>С</Text>равни
          <Text style={styles.red}>Т</Text>
          акси
        </Text>
      </View>
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
          onPress={() => {
            handleSearchСitymobil();
            handleSearchMaxim();
          }}
        >
          <Text style={styles.btn_text}>Найти такси</Text>
        </TouchableOpacity>
      </View>
      <Citymobil
        loading={loading1}
        econPrice={citymobil.econPrice}
        comfortPrice={citymobil.comfortPrice}
        comfortPlusPrice={citymobil.comfortPlusPrice}
      />
      <Maxim
        loading={loading2}
        econPrice={maxim.econPrice}
        comfortPrice={maxim.comfortPrice}
      />
      <Yandex
        loading={loading2}
        econPrice={maxim.econPrice}
        comfortPrice={maxim.comfortPrice}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Цена на Вашем смартфоне может быть иной 🔴, так как на это влияют
          различные факторы (уровень заряда🔋, погодные условия ☔️, пробки 🚘 и
          др.)
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingTop: "20px",
  },
  logo: {
    fontSize: "24px",
    color: "#fff",
    fontWeight: "Bold",
  },
  logoWrapper: {
    marginBottom: "15px",
    padding: "10px",
  },
  yellow: {
    color: "#7f9cfa",
    fontSize: "28px",
  },
  red: {
    color: "#7f9cfa",
    fontSize: "28px",
  },
  formContainer: {
    width: "100%",
    marginBottom: 20,
    padding: 25,
    alignItems: "center",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
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
    backgroundColor: "#d7dadb",

    width: "50%",
    borderRadius: 16,
    alignItems: "center",
    padding: 15,
  },
  btn_text: {
    color: "#000",
    fontWeight: "700",
  },
  footer: {
    marginTop: "15px",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  footerText: {
    fontSize: "12px",
    color: "#777",
    textAlign: "center",
  },
});

export default TaxiPage;
