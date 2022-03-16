/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import config from "react-native-config"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  key = (key) => {
    console.log(key)
  }

  componentDidMount() {
   this.key("test") 
  }
  render() {
    return(
      <View>
        <Text>{config.API_KEY}</Text>
      </View>
    )
  }
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
