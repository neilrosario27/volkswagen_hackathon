import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// Define a type for the schedule items
type ScheduleItem = {
  id: string;
  task: string;
  date: string;
  completed: boolean;
};

export default function MaintenanceScheduler() {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([
    { id: "1", task: "Oil Change", date: "2024-11-20", completed: false },
    { id: "2", task: "Tire Rotation", date: "2024-12-10", completed: false },
    { id: "3", task: "Brake Inspection", date: "2025-01-05", completed: false },
  ]);

  const toggleCompletion = (id: string) => {
    setSchedule((prevSchedule) =>
      prevSchedule.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const renderItem = ({ item }: { item: ScheduleItem }) => (
    <View style={styles.scheduleItem}>
      <View style={styles.taskDetails}>
        <Ionicons
          name={item.completed ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={item.completed ? "#4CAF50" : "#FF9500"}
          onPress={() => toggleCompletion(item.id)}
          style={styles.icon}
        />
        <Text style={styles.taskText}>{item.task}</Text>
      </View>
      <Text style={styles.dateText}>Due: {item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Maintenance Schedule</Text>
      <FlatList
        data={schedule}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No upcoming tasks</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  scheduleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
    color: "#555",
  },
  dateText: {
    fontSize: 14,
    color: "#777",
  },
  emptyMessage: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginTop: 10,
  },
});
