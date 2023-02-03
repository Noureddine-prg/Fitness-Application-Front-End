import React from 'react'
import {SectionList, View, Text, Button} from 'react-native';
import * as S from './styles';

const WorkoutCard = () => {
    return(
        <S.Card>

            <S.CardHeader>
                <S.WorkoutName>Monday Chest Workout</S.WorkoutName>
            </S.CardHeader>

            <S.Exercises>
                <S.EText>5x Bench Press</S.EText>
                <S.EText>3x Incline Press</S.EText>
                <S.EText>4x Tricep Pulldown</S.EText>
                <S.EText>5x Dips</S.EText>
            </S.Exercises>

            <S.BottomRow>
                <S.StartWorkoutButton>
                    <Button title="Start Workout" onPress={console.log("Started Workout")} color="white"/>
                </S.StartWorkoutButton>
            </S.BottomRow>

        </S.Card>
        
    );
}

export default WorkoutCard