import * as React from 'react';
import {Text , View, Image, Button, TouchableOpacity, ScrollView, Vibration} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import * as S from "./styles.js";
import ScrollableCalendar from '../../components/ScrollableCalendar/calendar';
import WorkoutCard from '../../components/WorkoutCard/workoutCard.jsx';


let date = new Date().toLocaleString('en-us', {weekday: "long", month: "short", day: "numeric"});


let currentUser = "Philip";
let userImage = '../../assets/philip.jpeg';


const Dashboard = ({navigation}) => {
    

    return(
        <S.Container>    
            <S.SafeArea>

                <ScrollView>

                    <S.Header>
                    
                        <S.TextContainer>
                            <S.HeaderText fontSize="21px" fontColor="#AFAFAF" paddingLeft="1px"> {date} </S.HeaderText>
                            <S.HeaderText style={{alignItems: 'flex-end', marginTop: 7}}fontSize="24px"> Welcome back, {currentUser} </S.HeaderText>
                        </S.TextContainer>

                        <S.ImageContainer activeOpacity={1} onPress={() => navigation.navigate('Profile')}>
                            <S.HeaderImage 
                                source={require(userImage)} 
                            />                    
                        </S.ImageContainer>
                            
                    </S.Header>
                
                    <S.CalendarContainer>
                        <ScrollableCalendar showsHorizontalScrollIndicator={false} />
                    </S.CalendarContainer>

                    <S.ButtonContainer>
                        <Button title="Start Empty Workout" onPress={console.log('hello')} color="white" />
                    </S.ButtonContainer>
                
                    <S.WorkoutContainer> 
                            <WorkoutCard/>
                            <WorkoutCard/>
                            <WorkoutCard/>   
                    </S.WorkoutContainer>
            
                </ScrollView>
                
            </S.SafeArea>

        </S.Container>
    );
} 


export default Dashboard; 