/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
//import firebase from 'firebase';
import {auth, firebase, OAuthProvider} from '@react-native-firebase/auth';
import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2'

//const provider = new firebase.auth.OAuthProvider('microsoft.com');
//import {firebase} from './config/firebase'
//import { OAuthProvider } from "firebase/auth";
//const provider = new OAuthProvider('microsoft.com');
//import auth from "@react-native-firebase/auth"

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Button
} from 'react-native';
import { TextField, makeStyles, Paper, Typography, CircularProgress, Divider } from '@material-ui/core';

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

var credentials = {
  client_id: 'e19c73b9-a026-4c4a-a223-3271a0573281',
  client_secret: 'qui8Q~Abar_M5DVV8.goOqvZlWSugcIlMgTUXc2J',
  //redirect_uri: 'https://localhost:3000',
  scope: 'User.ReadBasic.All Mail.Read offline_access' //access scope for login - see http://bit.ly/2gtQe9W for more info
};

const _onLoginSuccess = () => {
  this.azureInstance.getUserInfo().then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  })
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  this.azureInstance = new AzureInstance(credentials);
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
                      <Button
  onPress={handleMicrosoftLogin}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

        </View>
        <AzureLoginView
                azureInstance={this.azureInstance}
                loadingMessage="Requesting access token"
                onSuccess={_onLoginSuccess}
                //onCancel={this._onLoginCancel}
            />
      </ScrollView>
    </SafeAreaView>
  );
};

const handleMicrosoftLogin = () => {
  console.log(1)
  //auth().
  //auth().OAuthProvider('microsoft.com');
}

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
