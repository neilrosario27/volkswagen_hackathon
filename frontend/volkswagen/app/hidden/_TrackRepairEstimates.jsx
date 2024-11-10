import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MaintenanceRequestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maintenance Request</Text>
      {/* Add the dynamic data display logic here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
