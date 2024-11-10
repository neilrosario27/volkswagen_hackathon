import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const carModels = [
  'Volkswagen Jetta',
  'Toyota Corolla',
  'Honda Civic',
  'Ford Focus',
  'Chevrolet Cruze',
];

const maintenanceTypes = [
  'Oil Change',
  'Tire Rotation',
  'Brake Inspection',
  'Engine Tune-Up',
  'Air Filter Replacement',
];

const commonProblems = [
  'Engine Light On',
  'Check Engine Light',
  'Car Won\'t Start',
  'Strange Noise',
  'Car Shakes',
];

export default function MaintenanceRequestScreen() { // Removed navigation prop
  const [ownerName, setOwnerName] = useState('');
  const [carModel, setCarModel] = useState(carModels[0]);
  const [yearOfManufacture, setYearOfManufacture] = useState('');
  const [maintenanceType, setMaintenanceType] = useState(maintenanceTypes[0]);
  const [commonProblem, setCommonProblem] = useState(commonProblems[0]);
  const [problemDescription, setProblemDescription] = useState('');
  const [estimatedCost, setEstimatedCost] = useState('');

  const handleEstimate = () => {
    let estimatedCost = 0; 
    switch (maintenanceType) {
      case 'Oil Change':
        estimatedCost = 50;
        break;
      case 'Tire Rotation':
        estimatedCost = 20;
        break;
      case 'Brake Inspection':
        estimatedCost = 40;
        break;
      case 'Engine Tune-Up':
        estimatedCost = 100;
        break;
      case 'Air Filter Replacement':
        estimatedCost = 30;
        break;
      default:
        estimatedCost = 0;
    }

    setEstimatedCost(`Estimated Cost: $${estimatedCost}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Removed navigation related back button */}
        <Text style={styles.title}>Maintenance Request</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Owner's Name"
        value={ownerName}
        onChangeText={setOwnerName}
      />

      <Picker
        selectedValue={carModel}
        style={styles.picker}
        onValueChange={(itemValue) => setCarModel(itemValue)}
      >
        {carModels.map((model, index) => (
          <Picker.Item key={index} label={model} value={model} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Year of Manufacture"
        value={yearOfManufacture}
        onChangeText={setYearOfManufacture}
        keyboardType="numeric"
      />

      <Picker
        selectedValue={maintenanceType}
        style={styles.picker}
        onValueChange={(itemValue) => setMaintenanceType(itemValue)}
      >
        {maintenanceTypes.map((type, index) => (
          <Picker.Item key={index} label={type} value={type} />
        ))}
      </Picker>

      <Picker
        selectedValue={commonProblem}
        style={styles.picker}
        onValueChange={(itemValue) => setCommonProblem(itemValue)}
      >
        {commonProblems.map((problem, index) => (
          <Picker.Item key={index} label={problem} value={problem} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Problem Description"
        value={problemDescription}
        onChangeText={setProblemDescription}
      />

      <TouchableOpacity style={styles.button} onPress={handleEstimate}>
        <Text style={styles.buttonText}>Get Estimate</Text>
      </TouchableOpacity>

      {estimatedCost ? <Text style={styles.estimate}>{estimatedCost}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ffd33d',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  estimate: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'green',
  },
});
