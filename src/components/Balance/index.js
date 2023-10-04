import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <Text style={styles.moeda}>R$</Text>
        <Text style={styles.balance}>4.8971,80</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <Text style={styles.moeda}>R$</Text>
        <Text style={styles.balance}>106,40</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
  },
});
