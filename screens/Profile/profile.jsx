import * as React from 'react';
import {Text , View, Image} from 'react-native';
import * as S from "./styles";

import AchievementCard from '../../components/AchievementCard/AchievementCard';


const userWeight = 200;  
const userAge = 21;
const userBMI = 12.1;
let userImage = '../../assets/philip.jpeg';


const Profile = ({navigation}) => 
{

    return(
        <S.Container>

            <S.Header>

                <S.UserImage 
                source={require(userImage)} 
                />  

                <S.BoxContainer>
                
                    <S.Box style={{marginLeft: 4}}>
                        <S.BoxText>Weight</S.BoxText>
                        <S.BoxText>{userWeight} lbs</S.BoxText>
                    </S.Box>

                    <S.Box>
                        <S.BoxText>Age</S.BoxText>
                        <S.BoxText>{userAge}</S.BoxText>
                    </S.Box>

                    <S.Box style={{marginRight: 4}}>
                        <S.BoxText>BMI</S.BoxText>
                        <S.BoxText>{userBMI}</S.BoxText>
                    </S.Box>
                
                </S.BoxContainer>


            </S.Header>

            <S.BioContainer>

                <S.BioText>I will bench 225 by the end of the year and become a boxing master. </S.BioText>

            </S.BioContainer>

            <S.AchievementContainer>
                <AchievementCard color ="rgb(42,132,199)" achievement={"Longest workout session: "} amount={3} measurement={"hours"}/>
                <AchievementCard color ="rgb(108,37,230)" achievement={"Days worked out consecutively: "} amount={5} measurement={"times"}/>
                <AchievementCard color ="rgb(181,21,117)" achievement={"Days worked out consecutively: "} amount={5} measurement={"times"}/>
            </S.AchievementContainer>      


        </S.Container>
    );
}

export default Profile;

