import styled from "styled-components/native";

export const Container = styled.View`
  background-color: rgba(30, 30, 30, 1);
  flex: 3;
  width: 100%;
  height: 100%;
<<<<<<< HEAD
=======
  align-items: center;
>>>>>>> a69237b146b9e4467e9d43288bcd1f5077ad3eb9
  padding: 20px;
`;

export const SafeArea = styled.SafeAreaView`
  width: 100%;
  display: flex;
`;

export const Header = styled.View`
<<<<<<< HEAD
  margin: 15px 0px;
=======
  margin: 30px 0px;
>>>>>>> a69237b146b9e4467e9d43288bcd1f5077ad3eb9
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const HeaderText = styled.Text`
  display: flex;
  color: white;
  font-weight: bold;
<<<<<<< HEAD

  padding-left: ${(props) => props.paddingLeft || 0};
=======
  margin-bottom: 0px;

>>>>>>> a69237b146b9e4467e9d43288bcd1f5077ad3eb9
  font-size: ${(props) => props.fontSize || 20};
  color: ${(props) => props.fontColor || "white"};
`;

export const TextContainer = styled.View`
  width: 70%;
`;

export const ImageContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 30%;
  height: 100%;
`;

export const HeaderImage = styled.Image`
<<<<<<< HEAD
  width: 70px;
  height: 70px;
=======
  width: 60%;
  height: 80%;
>>>>>>> a69237b146b9e4467e9d43288bcd1f5077ad3eb9
  border-radius: 150px;
  border: solid lightgrey 1.5px;
`;

export const ButtonContainer = styled.View`
<<<<<<< HEAD
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100%;
  margin: 80px 0px 30px 0px;
  border-radius: 13px;
`;

export const CalendarContainer = styled.View``;

export const WorkoutContainer = styled.ScrollView`
  min-height: 400px;
  margin-bottom: 50px;
`;

export const WorkoutHeaderContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const WorkoutHeaderText = styled.Text`
  font-size: 20px;
  color: white;
  justify-content: center;
  align-content: center;
`;
=======
  height: 50px;
  width: 100%;
  margin-top: 150px;
`;

export const CreateWorkoutButton = styled.Button`
  border-color: red;
  border-width: 5px;
  border-radius: 15px;
`;

export const CalendarContainer = styled.View``;
>>>>>>> a69237b146b9e4467e9d43288bcd1f5077ad3eb9
