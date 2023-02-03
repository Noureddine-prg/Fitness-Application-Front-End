import React, {useEffect, useState} from "react";
import { View, ScrollView, Text } from 'react-native';
import * as S from './styles';



const ScrollableCalendar = ({date}) => 
{
    const [week , setWeek] = useState([]);

    useEffect(() => {

    }, []);

    return(
        <S.CalendarContainer>
            <View>

            </View>
        </S.CalendarContainer>
    )
};

export default ScrollableCalendar