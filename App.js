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

formatTime = time => `0${time}`.slice(-2) //Adds 0 when it's single for minutes and seconds both

const getRemaining = time => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60
  return { minutes: formatTime(minutes), seconds: formatTime(seconds) }
}

class App extends React.Component {
  state = {
    leftTime: 5,
    isRunning: false
  }

  start = () => {
      this.setState(prevState => ({
        leftTime: prevState.leftTime - 1,
        isRunning: true
      }))

      this.interval = setInterval(() => {
        this.setState(prevState => ({
          leftTime: prevState.leftTime - 1
        }))
      }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.leftTime === 0) {
      this.setState({
        isRunning: false,
        leftTime: 5
      })
      clearInterval(this.interval)
      this.interval = null
    }
  }

  pause = () => {

  }

  stop = () => {
    clearInterval(this.interval)
    this.interval = null
    this.setState({isRunning: false, leftTime: 5})
  }

  render() {

    const {minutes, seconds} = getRemaining(this.state.leftTime)

    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
        { this.state.isRunning ? 
          (<TouchableOpacity 
            style={[styles.button, styles.stopButton]}
            onPress={this.stop}
          >
            <Text style={[styles.buttonText, styles.stopButtonText]}>
              Stop
            </Text>
          </TouchableOpacity>) :
          (<TouchableOpacity
            style={[styles.button, styles.startButton]}
            onPress={this.start}
          >
            <Text style={styles.buttonText}>
              Start
            </Text>
          </TouchableOpacity>)
        }
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  startButton: {
    borderColor: 'blue'
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue'
  },
  stopButton: {
    borderColor: 'orange'
  },
  stopButtonText: {
    color: 'orange'
  },
  timerText: {
    fontSize: 90,
    color: '#fff'
  }
})
