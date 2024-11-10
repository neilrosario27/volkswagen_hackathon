import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const mockData = [
  { id: '1', date: 'Jun 17, 2020', vehicleId: '48GNDK20394', notes: 'Staff Maintenance' },
  { id: '2', date: 'May 20, 2020', vehicleId: '49GJIS1240', notes: 'Scheduled Check' },
  { id: '3', date: 'Jul 14, 2020', vehicleId: '2JF30DP304', notes: 'Work Order' },
  { id: '4', date: 'Jun 17, 2020', vehicleId: '49GJIS1240', notes: 'Check-up' },
];

export default function TrackMaintenanceLogScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => router.push({ pathname: "/Details", params: { item } })}
    >
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.vehicleId}</Text>
      <Text style={styles.cell}>{item.notes}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Maintenance Log</Text>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Service Date</Text>
            <Text style={styles.headerCell}>Vehicle ID</Text>
            <Text style={styles.headerCell}>Notes</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 8,
    marginBottom: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    color: "#333",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  cell: {
    flex: 1,
    color: "#333",
  },
});
