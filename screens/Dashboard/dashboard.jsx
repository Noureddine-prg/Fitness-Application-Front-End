import React from 'react';
import {Stylesheet, Text , View} from 'react-native';
import styles from "./stylesheet.scss";

const Dashboard = () => {
    return(
        <view style={styles.container}>
            <Text> Dashboard </Text>
        </view>
    );
} 

export default Dashboard;