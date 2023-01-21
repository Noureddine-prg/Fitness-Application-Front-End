import styled from "styled-components/native";

export const Container = styled.View`
  background-color: rgba(30, 30, 30, 1);
  flex: 3;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;
`;

export const SafeArea = styled.SafeAreaView`
  width: 100%;
  display: flex;
`;

export const Header = styled.View`
  margin: 30px 0px;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const HeaderText = styled.Text`
  display: flex;
  color: white;
  font-weight: bold;
  margin-bottom: 0px;

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
  width: 60%;
  height: 80%;
  border-radius: 150px;
  border: solid lightgrey 1.5px;
`;

export const ButtonContainer = styled.View`
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
