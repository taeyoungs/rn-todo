import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../src/reducers/toDoReducer';

const window = Dimensions.get('window');

const ToDo = ({ ownProps, remove, comple }) => {
  const handleCompleted = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          ownProps.isCompleted ? styles.completedBtn : styles.unCompletedBtn
        }
        onPress={comple}
      />
      <Text style={ownProps.isCompleted ? styles.cToDoText : styles.toDoText}>
        {ownProps.text}
      </Text>
      <View style={styles.subBtnBox}>
        <TouchableOpacity style={styles.icon}>
          <Text>✏</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPressOut={remove}>
          <Text>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toDoText: {
    color: 'black',
    fontSize: 17,
    width: window.width / 2,
  },
  cToDoText: {
    color: '#bdc3c7',
    fontSize: 17,
    width: window.width / 2,
    textDecorationLine: 'line-through',
  },
  unCompletedBtn: {
    borderColor: '#0984e3',
    borderWidth: 2,
    width: 25,
    height: 25,
    marginHorizontal: 15,
    borderRadius: 30,
  },
  completedBtn: {
    borderColor: '#bdc3c7',
    borderWidth: 2,
    width: 25,
    height: 25,
    marginHorizontal: 15,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
  },
  subBtnBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    margin: 8,
  },
});

function mapStateToProps(state, ownProps) {
  return { state, ownProps };
}

function mapDispatchToProps(dispatch, ownProps) {
  const remove = () => dispatch(actionCreators.deleteToDo(ownProps.id));
  const comple = () => dispatch(actionCreators.completeToDo(ownProps.id));
  return { remove, comple };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
