import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const screen = Dimensions.get('window')

const getRemaining = time => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60
  return { minutes: minutes, seconds: seconds }
}

class App extends React.Component {
  state = {
    time: 90
  }

  render() {

    const {minutes, seconds} = getRemaining(this.state.time)

    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {console.log("Hey! You pressed the button")}}
        >
          <Text style={styles.buttonText}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default App

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  button: {
    borderWidth: 10,
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue'
  },
  timerText: {
    fontSize: 90,
    color: '#fff'
  }
})
