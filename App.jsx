import { StatusBar } from 'expo-status-bar';
import {Stylesheet, Text, View } from 'react-native';
import styles from "./globalstyles.scss";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fitness Application</Text>
      <StatusBar style="auto" />
    </View>
  );
}

