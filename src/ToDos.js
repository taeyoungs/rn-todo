import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import uuid from 'react-native-uuid';
import { actionCreators } from '../src/reducers/toDoReducer';
import ToDo from './ToDo';

const window = Dimensions.get('window');

const ToDos = ({ add, state }) => {
  const [text, setText] = useState('');
  //   console.log(state);

  const handleSubmit = (e) => {
    const id = uuid.v1();
    const obj = {
      [id]: {
        id,
        text,
        isCompleted: false,
      },
    };
    setText('');
    add(obj);
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.tInput}
        placeholder="Write something"
        value={text}
        onChangeText={(text) => setText(text)}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {state !== {} &&
        Object.values(state).map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
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
  const add = (obj) => dispatch(actionCreators.addToDo(obj));

  return { add };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
