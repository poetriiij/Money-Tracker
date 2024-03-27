import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon/';
import { Gap } from '../..';
const PageHeader = ({label, sublabel, backButton, onBackPress, navigation, nav}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => backButton && navigation.navigate(nav)}>
        {backButton && <BackButton style={styles.backButton} />}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.sublabel}>{sublabel}</Text>
        <Gap height={24} />
       </View>
       </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  sublabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#888',
  },
  textContainer: {
    marginLeft: 10,
  },
  backButton: {
    marginRight: 26,
  },
});
