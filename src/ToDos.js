import React from 'react';
import { ScrollView, StyleSheet, Dimensions, Text } from 'react-native';

const window = Dimensions.get('window');

const ToDos = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>lalalalalalala</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: window.width - 50,
    marginTop: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default ToDos;
