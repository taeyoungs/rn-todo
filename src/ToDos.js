import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';
import { actionCreators } from '../src/reducers/arrToDoReducer';
import ToDo from './ToDo';
import CompletedToDos from './CompletedToDos';

const window = Dimensions.get('window');

const ToDos = ({ add, state }) => {
  const [text, setText] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);
  // console.log(state.arrToDoReducer[0]);

  const handleShowC = () => {
    setShowCompleted(!showCompleted);
  };

  const handleSubmit = (e) => {
    const id = uuid.v1();
    const newToDo = {
      id,
      text,
      isCompleted: false,
    };
    setText('');
    add(newToDo);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.tInput}
        placeholder="Write something"
        value={text}
        onChangeText={(text) => setText(text)}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      <ScrollView style={styles.scrollV}>
        {state.arrToDoReducer &&
          state.arrToDoReducer.length > 0 &&
          state.arrToDoReducer
            .filter((toDo) => !toDo.isCompleted)
            .map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
        {showCompleted
          ? state.arrToDoReducer &&
            state.arrToDoReducer.length > 0 &&
            state.arrToDoReducer
              .filter((toDo) => toDo.isCompleted)
              .map((toDo) => <ToDo key={toDo.id} {...toDo} />)
          : null}
      </ScrollView>
      <CompletedToDos handleShowC={handleShowC} showCompleted={showCompleted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: window.width - 50,
    marginTop: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  scrollV: {
    backgroundColor: 'white',
    width: window.width - 50,
    height: '100%',
  },
  tInput: {
    height: 60,
    borderBottomColor: '#636e72',
    borderBottomWidth: 1.5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: 'black',
    fontSize: 15,
  },
});

function mapStateToProps(state, ownProps) {
  return { state, ownProps };
}

function mapDispatchToProps(dispatch, ownProps) {
  const add = (newToDo) => dispatch(actionCreators.addToDo(newToDo));

  return { add };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
