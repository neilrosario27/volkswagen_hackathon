import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";

// Define the type for a maintenance request
interface MaintenanceRequest {
  id: string;
  vehicleName: string;
  vehicleModel: string;
  vehicleYear: string;
  maintenanceType: string;
  requestDate: string; // Format: YYYY-MM-DD
}

export default function MaintenanceRequestScreen() {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [vehicleName, setVehicleName] = useState<string>("");
  const [vehicleModel, setVehicleModel] = useState<string>("");
  const [vehicleYear, setVehicleYear] = useState<string>("");
  const [maintenanceType, setMaintenanceType] = useState<string>("");
  const [requestDate, setRequestDate] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const maintenanceTypes = [
    { label: "Oil Change", value: "oil_change" },
    { label: "Tire Rotation", value: "tire_rotation" },
    { label: "Brake Inspection", value: "brake_inspection" },
    { label: "Battery Check", value: "battery_check" },
    { label: "Fluid Check", value: "fluid_check" },
  ];

  const vehicleModels = [
    { label: "Volkswagen Golf", value: "golf" },
    { label: "Volkswagen Jetta", value: "jetta" },
    { label: "Volkswagen Passat", value: "passat" },
    { label: "Volkswagen Tiguan", value: "tiguan" },
    { label: "Volkswagen Atlas", value: "atlas" },
  ];

  const addRequest = () => {
    if (!vehicleName.trim() || !vehicleModel || !vehicleYear || !maintenanceType || !requestDate) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    setRequests((prevRequests) => [
      ...prevRequests,
      {
        id: Math.random().toString(),
        vehicleName,
        vehicleModel,
        vehicleYear,
        maintenanceType,
        requestDate: requestDate.toISOString().split("T")[0], // Format date as YYYY-MM-DD
      },
    ]);
    // Clear the input fields
    setVehicleName("");
    setVehicleModel("");
    setVehicleYear("");
    setMaintenanceType("");
    setRequestDate(undefined);
  };

  const renderRequestItem = ({ item }: { item: MaintenanceRequest }) => (
    <View style={styles.requestItem}>
      <Text style={styles.requestText}>Owner's Name: {item.vehicleName}</Text>
      <Text style={styles.requestText}>Model: {item.vehicleModel}</Text>
      <Text style={styles.requestText}>Year: {item.vehicleYear}</Text>
      <Text style={styles.requestText}>Maintenance Type: {item.maintenanceType}</Text>
      <Text style={styles.requestText}>Date: {item.requestDate}</Text>
    </View>
  );

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || requestDate;
    setShowDatePicker(false);
    setRequestDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maintenance Requests</Text>
      <TextInput
        style={styles.input}
        placeholder="Owner's Name"
        value={vehicleName}
        onChangeText={setVehicleName}
      />
      <RNPickerSelect
        onValueChange={(value) => setVehicleModel(value)}
        items={vehicleModels}
        placeholder={{ label: "Select Vehicle Model", value: null }}
        style={pickerSelectStyles}
      />
      <TextInput
        style={styles.input}
        placeholder="Vehicle Year (e.g., 2020)"
        value={vehicleYear}
        onChangeText={setVehicleYear}
        keyboardType="numeric"
      />
      <RNPickerSelect
        onValueChange={(value) => setMaintenanceType(value)}
        items={maintenanceTypes}
        placeholder={{ label: "Select Maintenance Type", value: null }}
        style={pickerSelectStyles}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
        <Text style={styles.datePickerText}>
          {requestDate ? requestDate.toISOString().split("T")[0] : "Select Request Date"}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={requestDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Button title="Add Request" onPress={addRequest} color="#ffd33d" />
      <FlatList
        data={requests}
        renderItem={renderRequestItem}
        keyExtractor={(item) => item.id}
        style={styles.requestList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    borderColor: "#ffd33d",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  datePicker: {
    width: "100%",
    borderColor: "#ffd33d",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  datePickerText: {
    color: "#333",
  },
  requestList: {
    width: "100%",
    marginTop: 16,
  },
  requestItem: {
    padding: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: 8,
  },
  requestText: {
    fontSize: 16,
    color: "#333",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "100%",
    borderColor: "#ffd33d",
    borderWidth: 1,
    borderRadius:  4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "#333",
  },
  inputAndroid: {
    width: "100%",
    borderColor: "#ffd33d",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "#333",
  },
  placeholder: {
    color: "#aaa",
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});
