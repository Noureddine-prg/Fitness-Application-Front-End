import * as React from 'react';
import {Text , View} from 'react-native';
import styles from "./stylesheet.scss";


const Profile = ({navigation}) => 
{
    return(
        <View style={styles.container}>
            <Text> Profile </Text>
        </View>
    );
}

export default Profile;