import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Placeholder profile icon
          }}
          style={styles.profilePicture}
        />
      </View>

      {/* Profile Header */}
      <Text style={styles.header}>John Doe</Text>

      {/* Customer Details */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Customer Information</Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Email: </Text>johndoe@example.com
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Phone No.: </Text>+1 555-123-4567
        </Text>
      </View>

      {/* Car Details */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Car Information</Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Car Name: </Text>Volkswagen Tiguan
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Registration No.: </Text>MH-12-AB-9876
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Engine: </Text>2.0L TSI 4-Cylinder
          Turbocharged
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Fuel Type: </Text>Petrol
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Mileage: </Text>15.5 km/l
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Transmission: </Text>7-Speed DSG
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Color: </Text>Deep Black Pearl
        </Text>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ffd33d",
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
  text: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: "#ffd33d",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  signOutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
