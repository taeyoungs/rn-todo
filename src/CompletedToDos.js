import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const CompletedToDos = ({ showCompleted, handleShowC }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.flexBox} onPress={handleShowC}>
        {showCompleted ? (
          <Text style={styles.hideC}>완료된 항목 가리기</Text>
        ) : (
          <Text style={styles.showC}>완료된 항목 표시</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#636e72',
    borderTopWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 45,
    width: '100%',
  },
  flexBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideC: {
    color: '#2ecc71',
    fontSize: 16,
  },
  showC: {
    color: '#e74c3c',
    fontSize: 16,
  },
});

export default CompletedToDos;
