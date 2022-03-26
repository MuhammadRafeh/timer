import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform,
  Picker,
} from 'react-native';

// import Picker from '@react-native-community/picker'

const screen = Dimensions.get('window');

formatTime = (time) => `0${time}`.slice(-2); //Adds 0 when it's single for minutes and seconds both

const getRemaining = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return { minutes: formatTime(minutes), seconds: formatTime(seconds) };
};

const createArray = (length) => {
  const arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }

  return arr;
};

const AVAILABLE_MINUTES = createArray(10);
const AVAILABLE_SECONDS = createArray(60);

class App extends React.Component {
  state = {
    minutes: 2,
    seconds: 2,
    leftTime: 50,
    isRunning: false,
  };

  start = () => {
    var hms = `${this.state.minutes}:${this.state.seconds}`; // your input string
    var a = hms.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = +a[0] * 60 + +a[1];
    this.setState((prevState) => ({
      leftTime: seconds,
      isRunning: true,
    }));

    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        leftTime: prevState.leftTime - 1,
      }));
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.leftTime === 0) {
      this.setState({
        isRunning: false,
        leftTime: 5,
      });
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({ isRunning: false });
  };

  renderPicker = () => (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.minutes}
        onValueChange={(itemValue) => {
          this.setState({ minutes: parseInt(itemValue) });
        }}
        mode="dropdown">
        {AVAILABLE_MINUTES.map((value) => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>minutes</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.seconds}
        onValueChange={(itemValue) => {
          this.setState({ seconds: parseInt(itemValue) });
        }}
        mode="dropdown">
        {AVAILABLE_SECONDS.map((value) => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>seconds</Text>
    </View>
  );

  render() {
    const { minutes, seconds } = getRemaining(this.state.leftTime);

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.isRunning ? (
          <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
        ) : (
          this.renderPicker()
        )}
        {this.state.isRunning ? (
          <TouchableOpacity
            style={[styles.button, styles.stopButton]}
            onPress={this.stop}>
            <Text style={[styles.buttonText, styles.stopButtonText]}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.startButton]}
            onPress={this.start}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default App;

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  button: {
    borderWidth: 10,
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  startButton: {
    borderColor: 'blue',
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
  },
  stopButton: {
    borderColor: 'orange',
  },
  stopButtonText: {
    color: 'orange',
  },
  timerText: {
    fontSize: 90,
    color: '#fff',
  },
  picker: {
    width: 50,
    ...Platform.select({
      android: {
        color: '#fff',
        backgroundColor: '#07121B',
        marginLeft: 10,
      },
    }),
  },
  pickerItem: {
    color: '#fff',
    fontSize: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
