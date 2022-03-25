/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   Dimensions,
//   Platform,
//   Picker
// } from 'react-native';


// // import Picker from '@react-native-community/picker'

// const screen = Dimensions.get('window')

// formatTime = time => `0${time}`.slice(-2) //Adds 0 when it's single for minutes and seconds both

// const getRemaining = time => {
//   const minutes = Math.floor(time / 60)
//   const seconds = time - minutes * 60
//   return { minutes: formatTime(minutes), seconds: formatTime(seconds) }
// }

// const createArray = length => {
//   const arr = [];
//   let i = 0;
//   while (i < length) {
//     arr.push(i.toString());
//     i += 1;
//   }

//   return arr;
// };

// const AVAILABLE_MINUTES = createArray(10);
// const AVAILABLE_SECONDS = createArray(60);

// class App extends React.Component {
//   state = {
//     leftTime: 5,
//     isRunning: false
//   }

//   start = () => {
//       this.setState(prevState => ({
//         leftTime: prevState.leftTime - 1,
//         isRunning: true
//       }))

//       this.interval = setInterval(() => {
//         this.setState(prevState => ({
//           leftTime: prevState.leftTime - 1
//         }))
//       }, 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval)
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.leftTime === 0) {
//       this.setState({
//         isRunning: false,
//         leftTime: 5
//       })
//       clearInterval(this.interval)
//       this.interval = null
//     }
//   }

//   stop = () => {
//     clearInterval(this.interval)
//     this.interval = null
//     this.setState({isRunning: false, leftTime: 5})
//   }

//   renderPicker = () => (
//     <View style={styles.pickerContainer}>
//       <Picker
//         style={styles.picker}
//         itemStyle={styles.pickerItem}
//         selectedValue="2"
//         onValueChange={itemValue => {
//           // todo
//         }}
//         mode="dropdown"
//       >
//         {AVAILABLE_MINUTES.map(value => (
//           <Picker.Item key={value} label={value} value={value} />
//         ))}
//       </Picker>
//       <Text style={styles.pickerItem}>minutes</Text>
//       <Picker
//         style={styles.picker}
//         itemStyle={styles.pickerItem}
//         selectedValue="2"
//         onValueChange={itemValue => {
//           // todo
//         }}
//         mode="dropdown"
//       >
//         {AVAILABLE_SECONDS.map(value => (
//           <Picker.Item key={value} label={value} value={value} />
//         ))}
//       </Picker>
//       <Text style={styles.pickerItem}>seconds</Text>
//     </View>
//   )

//   render() {

//     const {minutes, seconds} = getRemaining(this.state.leftTime)

//     return(
//       <View style={styles.container}>
//         <StatusBar barStyle="light-content"/>
//         { this.state.isRunning ? 
//           (<Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>) :
//           (this.renderPicker()) 
//         }
//         { this.state.isRunning ? 
//           (<TouchableOpacity 
//             style={[styles.button, styles.stopButton]}
//             onPress={this.stop}
//           >
//             <Text style={[styles.buttonText, styles.stopButtonText]}>
//               Stop
//             </Text>
//           </TouchableOpacity>) :
//           (<TouchableOpacity
//             style={[styles.button, styles.startButton]}
//             onPress={this.start}
//           >
//             <Text style={styles.buttonText}>
//               Start
//             </Text>
//           </TouchableOpacity>)
//         }
//       </View>
//     )
//   }
// }

// export default App

// styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black'
//   },
//   button: {
//     borderWidth: 10,
//     width: screen.width / 2,
//     height: screen.width / 2,
//     borderRadius: screen.width / 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 30
//   },
//   startButton: {
//     borderColor: 'blue'
//   },
//   buttonText: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: 'blue'
//   },
//   stopButton: {
//     borderColor: 'orange'
//   },
//   stopButtonText: {
//     color: 'orange'
//   },
//   timerText: {
//     fontSize: 90,
//     color: '#fff'
//   },
//   picker: {
//     width: 50,
//     ...Platform.select({
//       android: {
//         color: '#fff',
//         backgroundColor: '#07121B',
//         marginLeft: 10,
//       },
//     }),
//   },
//   pickerItem: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   pickerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// })
