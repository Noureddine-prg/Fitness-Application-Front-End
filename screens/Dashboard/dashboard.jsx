import * as React from 'react';
import {Text , View, Image, Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as S from "./styles";
import ScrollableCalendar from '../../components/Scrollable Calendar/calendar';

let date = new Date().toLocaleString('en-us', {weekday: "long", month: "short", day: "numeric"});

//will update when user gets retrieved
let currentUser = "Philip";
let userImage = '../../assets/philip.jpeg';

const Dashboard = ({navigation}) => {


    return(
        <S.Container>    

            <S.SafeArea>
                <S.Header>
                    <S.TextContainer>
                        <S.HeaderText fontSize="21px" fontColor="#AFAFAF"> {date} </S.HeaderText>
                        <S.HeaderText style={{alignItems: 'flex-end', marginTop: 7}}fontSize="24px"> Welcome back, {currentUser} </S.HeaderText>
                    </S.TextContainer>

                    <S.ImageContainer>
                        <S.HeaderImage 
                            source={require(userImage)} 
                        />                    
                    </S.ImageContainer>
                        
                </S.Header>
            
                <S.CalendarContainer>
                    <ScrollableCalendar />
                </S.CalendarContainer>

                <S.ButtonContainer>
                    <S.CreateWorkoutButton title="Start Empty Workout" onPress={console.log('Start Empty Workout')} color="white" />
                </S.ButtonContainer>
            
                <View> 
                    <Text> Saved Workouts </Text> 
                </View>
            
            </S.SafeArea>

        </S.Container>
    );
} 

// .header
// .header_text
// .header_image


export default Dashboard;