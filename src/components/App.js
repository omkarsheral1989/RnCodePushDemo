/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import codePush from "react-native-code-push";

import HockeyApp from 'react-native-hockeyapp';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

const isIos = Platform.OS === 'ios';

type Props = {};

class App extends Component<Props> {
  
  componentWillMount() {
    if (isIos) {
    
    } else {
      HockeyApp.configure("09825bd9ad334bce93a659aed0fc42fb", true);
    }
  }
  
  componentDidMount() {
    HockeyApp.start();
    HockeyApp.checkForUpdate();
  }
  
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!21
          </Text>
          <Image
              source={require('../images/main_screen_footer_logo.png')}
              style={{
                resizeMode: 'contain',
                width: '100%',
                height: 100
              }}
          />
          <Text style={styles.instructions}>
            To get started, edit App.js. New apk upload8
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
    );
  }
}

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
export default codePush(codePushOptions)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
