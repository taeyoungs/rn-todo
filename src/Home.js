import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, AsyncStorage } from 'react-native';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import ToDos from './ToDos';
import { actionCreators } from './reducers/toDoReducer';

const Home = ({ setInitialState, state }) => {
  const [loading, setLoading] = useState(true);

  const getToDos = async () => {
    try {
      // await AsyncStorage.clear();
      const toDos = await AsyncStorage.getItem('toDos');
      // console.log('toDos : ', toDos);
      // console.log(JSON.parse(toDos));
      if (toDos) {
        setInitialState(JSON.parse(toDos));
      }
      //   setInitialState(toDos === null ? {} : toDos);
    } catch (err) {
      console.log(err);
    }
  };

  const fontLoad = async () => {
    try {
      await loadAsync({
        NanumGothic: require('../assets/fonts/NanumGothic-Regular.ttf'),
      });
      // await AsyncStorage.removeItem('toDos');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getToDos();
    // console.log(state);
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

function mapStateToProps(state, ownProps) {
  return { state, ownProps };
}

function mapDispatchToProps(dispatch, ownProps) {
  const setInitialState = (toDos) => dispatch(actionCreators.setInit(toDos));
  return { setInitialState };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0984e3',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'NanumGothic',
    marginTop: 70,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
