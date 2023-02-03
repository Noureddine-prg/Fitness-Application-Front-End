import * as React from 'react';
import {Text , View, Image} from 'react-native';
import * as S from "./styles";

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

                <S.BioText>I will be the strongest I can in 6 months of working out. Veritatis repudiandae, placeat doloremque nihil aut et laboriosam! Beatae, impedit.</S.BioText>

            </S.BioContainer>

            <S.AchievementContainer>
                
                <S.AchievementCard>
                    <S.AchievementText>Worked out for: X Hours </S.AchievementText>
                </S.AchievementCard>
                
                <S.AchievementCard>
                    <S.AchievementText>Workout Sessions: X times </S.AchievementText>
                </S.AchievementCard>

                <S.AchievementCard>
                    <S.AchievementText>Average Workout Time: X hours </S.AchievementText>
                </S.AchievementCard>
                
            </S.AchievementContainer>            

        </S.Container>
    );
}

export default Profile;

