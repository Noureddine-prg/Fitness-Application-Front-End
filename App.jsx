import * as React from 'react';
import Navbar from './components/Navbar/navbar';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import styles from "./globalstyles.scss";


export default function App() {

  return (
    <SafeAreaView style={styles.container}>

        <NavigationContainer>

          <Navbar/>

        </NavigationContainer>

    </SafeAreaView>
  );
}

