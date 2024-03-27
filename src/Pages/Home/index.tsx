import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageHeader } from '../../components';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PageHeader label="Money Tracker" sublabel="Track Your Money"/>
      {/* Add other content for the Home screen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Add other styling properties as needed
  },
  sublabel: {
    fontSize: 20,
    color: '#888',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
});

export default Home;
