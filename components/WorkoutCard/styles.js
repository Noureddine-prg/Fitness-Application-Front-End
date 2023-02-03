import styled from "styled-components/native";

export const Card = styled.View`
  background-color: white;
  margin: 10px 0px;
  padding: 12px;

  display: flex;
  flex-direction: column;

  height: 220px;
  border-radius: 20px;
  border: black solid 1px;
`;

export const CardHeader = styled.View`
  width: 100%;
  align-items: left;
`;

export const WorkoutName = styled.Text`
  font-size: 25px;
  border-bottom: 10px solid red;
  font-weight: bold;
`;

export const Exercises = styled.View`
  margin: 10px 0;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
`;

export const EText = styled.Text`
  font-size: 16px;
  padding-left: 3px;
  font-weight: bold;
`;

export const BottomRow = styled.View`
  bottom: 10px;
  width: 100%;
  align-items: flex-end;
`;

export const StartWorkoutButton = styled.View`
  background-color: black;
  width: 150px;
  margin-bottom: 10px;
  border-radius: 15px;
`;
