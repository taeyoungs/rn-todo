import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import ToDos from './ToDos';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const fontLoad = async () => {
    try {
      await loadAsync({
        NanumGothic: require('../assets/fonts/NanumGothic-Regular.ttf'),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fontLoad();
  }, []);

  if (loading) {
    return <AppLoading />;
  }
  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Youngs To Do</Text>
        <ToDos />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(20, 20, 20, 1)',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#f1c40f',
    fontFamily: 'NanumGothic',
    marginTop: 70,
  },
});

export default Home;
