import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { ProgressChart, LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Vehicle Dashboard</Text>

      {/* Circular Charts Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Health Overview</Text>
        <View style={styles.row}>
          {/* Engine Health */}
          <View style={styles.chartBox}>
            <Text style={styles.chartTitle}>Engine Health</Text>
            <ProgressChart
              data={{
                labels: [],
                data: [0.9], // 90% health
              }}
              width={100}
              height={100}
              strokeWidth={8}
              radius={30}
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`, // Green
              }}
              hideLegend={true}
            />
            <Text style={styles.chartValue}>90%</Text>
          </View>

          {/* Fuel Efficiency */}
          <View style={styles.chartBox}>
            <Text style={styles.chartTitle}>Fuel Efficiency</Text>
            <ProgressChart
              data={{
                labels: [],
                data: [0.7], // 70% efficiency
              }}
              width={100}
              height={100}
              strokeWidth={8}
              radius={30}
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                color: (opacity = 1) => `rgba(255, 193, 7, ${opacity})`, // Yellow
              }}
              hideLegend={true}
            />
            <Text style={styles.chartValue}>70%</Text>
          </View>

          {/* Battery Life */}
          <View style={styles.chartBox}>
            <Text style={styles.chartTitle}>Battery Life</Text>
            <ProgressChart
              data={{
                labels: [],
                data: [0.8], // 80% battery life
              }}
              width={100}
              height={100}
              strokeWidth={8}
              radius={30}
              chartConfig={{
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`, // Blue
              }}
              hideLegend={true}
            />
            <Text style={styles.chartValue}>80%</Text>
          </View>
        </View>
      </View>

      {/* Mileage Graph */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Mileage Trends</Text>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [15, 18, 20, 19, 17, 21, 22], // Mock mileage data
              },
            ],
          }}
          width={screenWidth - 40}
          height={250}
          chartConfig={{
            backgroundGradientFrom: "#f9f9f9",
            backgroundGradientTo: "#f9f9f9",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      {/* Additional Features */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Driving Metrics</Text>

        {/* Average Speed */}
        <View style={styles.metricsRow}>
          <Text style={styles.metricsTitle}>Average Speed</Text>
          <Text style={styles.metricsValue}>62 km/h</Text>
        </View>

        {/* Total Driving Time & Idle Time */}
        <View style={styles.metricsRow}>
          <Text style={styles.metricsTitle}>Driving Time</Text>
          <Text style={styles.metricsValue}>8 hrs</Text>
        </View>
        <View style={styles.metricsRow}>
          <Text style={styles.metricsTitle}>Idle Time</Text>
          <Text style={styles.metricsValue}>1.5 hrs</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Average Speed Trends</Text>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [40, 55, 60, 45, 50,45], // Mock speed data
              },
            ],
          }}
          width={screenWidth - 40}
          height={250}
          chartConfig={{
            backgroundGradientFrom: "#f9f9f9",
            backgroundGradientTo: "#f9f9f9",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
          
      {/* Fuel Consumption Tracker */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Fuel Consumption</Text>
        <View style={styles.metricsRow}>
          <Text style={styles.metricsTitle}>Fuel Used (This Week)</Text>
          <Text style={styles.metricsValue}>12 L</Text>
        </View>
        <View style={styles.metricsRow}>
          <Text style={styles.metricsTitle}>Fuel Efficiency</Text>
          <Text style={styles.metricsValue}>18.5 km/L</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chartBox: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 5,
  },
  chartTitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
    textAlign: "center",
  },
  chartValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
    textAlign: "center",
  },
  metricsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  metricsTitle: {
    fontSize: 16,
    color: "#555",
  },
  metricsValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
