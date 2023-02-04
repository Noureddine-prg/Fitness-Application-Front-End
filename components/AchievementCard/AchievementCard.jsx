import {Text , View, Image} from 'react-native';
import * as S from "./styles";


const AchievementCard = ({color, achievement, amount, measurement}) => 
{
    return(                
        <S.AchievementCard>
            <S.ColorBar style={{backgroundColor: color}} />
            <S.AchievementText> {achievement} {amount} {measurement}</S.AchievementText>
        </S.AchievementCard>
    );
}


export default AchievementCard;