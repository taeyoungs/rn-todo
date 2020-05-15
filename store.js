import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from 'react-native';
import { createLogger } from 'redux-logger';
import rootReducer from './src/reducers';

// const getToDos = async () => {
//   let toDos = {};
//   try {
//     toDos = await AsyncStorage.getItem('toDos');
//   } catch (error) {
//     console.log(error);
//   }
//   return toDos === null ? {} : toDos;
// };

// const toDos = getToDos();
//async () => await AsyncStorage.getItem('toDos')

const store = createStore(rootReducer, applyMiddleware(createLogger()));

// const saveAsyncStorage = async () => {
//   try {
//     const state = store.getState();
//     if (state !== {} || state !== null) {
//       await AsyncStorage.setItem('toDos', JSON.stringify(state));
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
// console.log(store.getState());

// store.subscribe(store.default.getState());
// store.subscribe(() => saveAsyncStorage());

export default store;
