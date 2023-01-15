import * as React from 'react';
import {Stylesheet, Text , View} from 'react-native';
import styles from "./stylesheet.scss";
import { Dimensions } from 'react-native';

const Dashboard = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text> Dashboard </Text>           
        </View>
    );
} 

export default Dashboard;