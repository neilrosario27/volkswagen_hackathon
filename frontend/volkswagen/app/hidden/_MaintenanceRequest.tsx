import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Types
interface MaintenanceRequest {
  id: string;
  customerName: string;
  contactNumber: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  mileage: string;
  maintenanceType: string;
  urgencyLevel: string;
  additionalNotes: string;
  preferredDate: string;
}

// Constant Data
const VEHICLE_MAKES = [
  { label: 'Toyota', value: 'toyota' },
  { label: 'Honda', value: 'honda' },
  { label: 'Ford', value: 'ford' },
  { label: 'Chevrolet', value: 'chevrolet' },
  { label: 'Volkswagen', value: 'volkswagen' },
  { label: 'Other', value: 'other' },
];

const MAINTENANCE_TYPES = [
  { label: 'Regular Service', value: 'regular_service' },
  { label: 'Oil Change', value: 'oil_change' },
  { label: 'Brake Service', value: 'brake_service' },
  { label: 'Tire Rotation', value: 'tire_rotation' },
  { label: 'Engine Diagnostics', value: 'engine_diagnostics' },
  { label: 'Transmission Service', value: 'transmission_service' },
  { label: 'Other', value: 'other' },
];

const URGENCY_LEVELS = [
  { label: 'Low (Routine)', value: 'low' },
  { label: 'Medium (Within 2 Weeks)', value: 'medium' },
  { label: 'High (Urgent)', value: 'high' },
];

const MaintenanceRequestForm: React.FC = () => {
  // State Management
  const [request, setRequest] = useState<MaintenanceRequest>({
    id: '',
    customerName: '',
    contactNumber: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    mileage: '',
    maintenanceType: '',
    urgencyLevel: '',
    additionalNotes: '',
    preferredDate: '',
  });

  const [preferredDate, setPreferredDate] = useState<Date | undefined>(undefined);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  // Form Validation
  const validateForm = () => {
    const {
      customerName,
      contactNumber,
      email,
      vehicleMake,
      vehicleModel,
      vehicleYear,
      mileage,
      maintenanceType,
      urgencyLevel,
    } = request;

    if (!customerName.trim()) {
      Alert.alert('Validation Error', 'Please enter your name');
      return false;
    }

    if (!contactNumber.trim() || contactNumber.length < 10) {
      Alert.alert('Validation Error', 'Please enter a valid contact number');
      return false;
    }

    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return false;
    }

    if (!vehicleMake) {
      Alert.alert('Validation Error', 'Please select vehicle make');
      return false;
    }

    if (!vehicleModel.trim()) {
      Alert.alert('Validation Error', 'Please enter vehicle model');
      return false;
    }

    if (!vehicleYear.trim() || vehicleYear.length !== 4) {
      Alert.alert('Validation Error', 'Please enter a valid vehicle year');
      return false;
    }

    if (!mileage.trim()) {
      Alert.alert('Validation Error', 'Please enter current vehicle mileage');
      return false;
    }

    if (!maintenanceType) {
      Alert.alert('Validation Error', 'Please select maintenance type');
      return false;
    }

    if (!urgencyLevel) {
      Alert.alert('Validation Error', 'Please select urgency level');
      return false;
    }

    return true;
  };

  // Submit Request
  const submitRequest = () => {
    if (validateForm()) {
      // Generate unique ID
      const newRequest = {
        ...request,
        id: Math.random().toString(),
        preferredDate: preferredDate 
          ? preferredDate.toISOString().split('T')[0] 
          : new Date().toISOString().split('T')[0],
      };

      // Here you would typically send the request to a backend service
      console.log('Maintenance Request:', newRequest);
      
      Alert.alert(
        'Request Submitted', 
        'Your maintenance request has been received. We will contact you soon.'
      );

      // Reset form
      resetForm();
    }
  };

  // Reset Form
  const resetForm = () => {
    setRequest({
      id: '',
      customerName: '',
      contactNumber: '',
      email: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      mileage: '',
      maintenanceType: '',
      urgencyLevel: '',
      additionalNotes: '',
      preferredDate: '',
    });
    setPreferredDate(undefined);
  };

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Vehicle Maintenance Request</Text>

      {/* Personal Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={request.customerName}
          onChangeText={(text) => setRequest({...request, customerName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          keyboardType="phone-pad"
          value={request.contactNumber}
          onChangeText={(text) => setRequest({...request, contactNumber: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={request.email}
          onChangeText={(text) => setRequest({...request, email: text})}
        />
      </View>

      {/* Vehicle Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vehicle Details</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setRequest({...request, vehicleMake: value})}
            items={VEHICLE_MAKES}
            placeholder={{ label: 'Select Vehicle Make', value: null }}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Vehicle Model"
          value={request.vehicleModel}
          onChangeText={(text) => setRequest({...request, vehicleModel: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Vehicle Year"
          keyboardType="numeric"
          value={request.vehicleYear}
          onChangeText={(text) => setRequest({...request, vehicleYear: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Current Mileage"
          keyboardType="numeric"
          value={request.mileage}
          onChangeText={(text) => setRequest({...request, mileage : text})}
        />
      </View>

      {/* Maintenance Type Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Maintenance Type</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setRequest({...request, maintenanceType: value})}
            items={MAINTENANCE_TYPES}
            placeholder={{ label: 'Select Maintenance Type', value: null }}
          />
        </View>
      </View>

      {/* Urgency Level Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Urgency Level</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => setRequest({...request, urgencyLevel: value})}
            items={URGENCY_LEVELS}
            placeholder={{ label: 'Select Urgency Level', value: null }}
          />
        </View>
      </View>

      {/* Additional Notes Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Additional Notes</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Any additional information or requests"
          multiline
          numberOfLines={4}
          value={request.additionalNotes}
          onChangeText={(text) => setRequest({...request, additionalNotes: text})}
        />
      </View>

      {/* Preferred Date Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferred Date</Text>
        <TouchableOpacity 
          style={styles.datePicker} 
          onPress={() => setShowDatePicker(true)}
        >
          <Icon name="calendar-today" size={20} color="#666" />
          <Text style={styles.datePickerText}>
            {preferredDate ? preferredDate.toLocaleDateString() : 'Select Preferred Date'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={preferredDate || new Date()}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowDatePicker(false);
              setPreferredDate(date || preferredDate);
            }}
          />
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={submitRequest}
      >
        <Text style={styles.submitButtonText}>Submit Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    height: 100,
  },
  pickerContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  datePickerText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#ffd33d',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MaintenanceRequestForm;