<<<<<<< HEAD
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: rgba(30, 30, 30, 1);
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;

//Header
export const Header = styled.View`
  justify-content: flex-end;
  background-color: rgba(80, 80, 90, 1);
  width: 100%;
  height: 300px;
  position: relative;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 200px;
  padding: 10px;
  border: white 1.5px;
`;

export const BoxContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  bottom: -40px;

  background-color: rgb(41, 41, 41);
`;

export const Box = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 70px;
  background-color: rgb(62, 62, 62);
  margin: 4px 1px;
  border-radius: 4px;
`;

export const BoxText = styled.Text`
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.fontColor || "white"};
`;

// Bio/User Info
export const BioContainer = styled.View`
  margin-top: 10%;
  margin-bottom: 15px;
  padding: 30px 0;
  width: 90%;
`;

export const BioText = styled.Text`
  margin: 5px;
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.fontColor || "white"};
`;

export const AchievementContainer = styled.View`
  height: 200px;
  width: 95%;
`;

export const AchievementCard = styled.View`
  background-color: white;
  margin: 10px 0px;
  padding: 10px;
  width: 100%;
  height: 80px;
  border-radius: 20px;
`;

export const AchievementText = styled.Text``;
=======
import styled from 'styled-components/native';

export const Container = styled.View
`
    background-color: maroon;
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center; 
`

>>>>>>> a69237b146b9e4467e9d43288bcd1f5077ad3eb9
