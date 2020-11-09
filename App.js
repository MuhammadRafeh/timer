import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const screen = Dimensions.get('window');

class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
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
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'blue'
  }
});
