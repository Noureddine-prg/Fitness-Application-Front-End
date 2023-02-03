import styled from "styled-components/native";

export const Container = styled.View`
  background-color: rgba(30, 30, 30, 1);
  flex: 3;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const SafeArea = styled.SafeAreaView`
  width: 100%;
  display: flex;
`;

export const Header = styled.View`
  margin: 15px 0px;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const HeaderText = styled.Text`
  display: flex;
  color: white;
  font-weight: bold;

  padding-left: ${(props) => props.paddingLeft || 0};
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
  width: 70px;
  height: 70px;
  border-radius: 150px;
  border: solid lightgrey 1.5px;
`;

export const ButtonContainer = styled.View`
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
