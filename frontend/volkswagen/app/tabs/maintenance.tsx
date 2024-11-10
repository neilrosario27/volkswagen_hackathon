import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function MaintenanceScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.blackButton]}
        onPress={() => router.push("/hidden/_TrackMaintenanceRecords")}
      >
        <Text style={styles.buttonText}>Track Maintenance Records</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.blackButton]}
        onPress={() => router.push("/hidden/_MaintenanceRequest")}
      >
        <Text style={styles.buttonText}>Maintenance Request</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.yellowButton]}
        onPress={() => router.push("/hidden/_TrackRepairEstimates")}
      >
        <Text style={styles.buttonText}>Track Repair Estimates</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.yellowButton]}
        onPress={() => router.push("/hidden/_RepairEstimateRequest")}
      >
        <Text style={styles.buttonText}>Repair Estimate Request</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  blackButton: {
    backgroundColor: "#000",
  },
  yellowButton: {
    backgroundColor: "#ffd33d",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
