
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// Type definition for alerts
type Alert = {
  id: string;
  title: string;
  description: string;
  severity?: 'High' | 'Medium' | 'Low';
  icon?: string;
  resolvedDate?: string;
};

export default function Alerts() {
  // Mock data for alerts
  const recentAlerts: Alert[] = [
    {
      id: '1',
      title: 'Low Battery Warning',
      description: 'Battery is at 20%. Please recharge soon.',
      severity: 'High',
      icon: 'battery-dead',
    },
    {
      id: '2',
      title: 'Oil Change Due',
      description: 'Oil change is overdue. Schedule maintenance.',
      severity: 'Medium',
      icon: 'construct',
    },
    {
      id: '3',
      title: 'Tire Pressure Low',
      description: 'Front left tire pressure is below 30 PSI.',
      severity: 'Low',
      icon: 'speedometer',
    },
  ];

  const resolvedAlerts: Alert[] = [
    {
      id: '4',
      title: 'Brake Pads Replaced',
      description: 'Brake pads were replaced successfully.',
      resolvedDate: 'Nov 10, 2024',
    },
    {
      id: '5',
      title: 'Air Filter Changed',
      description: 'Air filter was changed during last maintenance.',
      resolvedDate: 'Nov 8, 2024',
    },
  ];

  // Explicitly type the item parameter
  const renderAlertItem = ({ item }: { item: Alert }) => (
    <View style={styles.alertCard}>
      <View style={styles.alertHeader}>
        {item.icon && (
          <Ionicons
            name={item.icon}
            size={24}
            color={severityColor(item.severity)}
            style={styles.alertIcon}
          />
        )}
        <Text style={[styles.alertTitle, severityStyle(item.severity)]}>{item.title}</Text>
      </View>
      <Text style={styles.alertDescription}>{item.description}</Text>
      {item.severity && <Text style={styles.alertSeverity}>Severity: {item.severity}</Text>}
      {item.resolvedDate && (
        <Text style={styles.alertResolvedDate}>Resolved: {item.resolvedDate}</Text>
      )}
    </View>
  );

  // Explicitly type the severity parameter
  const severityStyle = (severity?: 'High' | 'Medium' | 'Low') => {
    switch (severity) {
      case 'High':
        return { color: '#FF3B30' }; // Red for high severity
      case 'Medium':
        return { color: '#FF9500' }; // Orange for medium severity
      case 'Low':
        return { color: '#4CAF50' }; // Green for low severity
      default:
        return { color: '#555' }; // Default gray
    }
  };

  // Explicitly type the severity parameter
  const severityColor = (severity?: 'High' | 'Medium' | 'Low') => {
    switch (severity) {
      case 'High':
        return '#FF3B30'; // Red for high severity
      case 'Medium':
        return '#FF9500'; // Orange for medium severity
      case 'Low':
        return '#4CAF50'; // Green for low severity
      default:
        return '#555'; // Default gray
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Alerts</Text> */}

      {/* Recent Alerts Section */}
      <Text style={styles.sectionHeader}>Recent Alerts</Text>
      <FlatList
        data={recentAlerts}
        renderItem={renderAlertItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No recent alerts</Text>}
      />

      {/* Resolved Alerts Section */}
      <Text style={styles.sectionHeader}>Resolved Alerts</Text>
      <FlatList
        data={resolvedAlerts}
        renderItem={renderAlertItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No resolved alerts</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 20,
    marginBottom: 10,
  },
  alertCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  alertIcon: {
    marginRight: 10,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  alertSeverity: {
    fontSize: 12,
    color: '#555',
    fontStyle: 'italic',
  },
  alertResolvedDate: {
    fontSize: 12,
    color: '#777',
    fontStyle: 'italic',
    marginTop: 5,
  },
  emptyMessage: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
  },
});
