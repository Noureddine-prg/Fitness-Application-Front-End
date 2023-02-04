import styled from "styled-components/native";

export const AchievementCard = styled.View`
  background-color: rgba(50, 50, 50, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;

  margin: 10px 0px;
  padding: 10px;
  width: 100%;
  height: 80px;
  border-radius: 15px;
  border: black solid;
`;

export const ColorBar = styled.View`
  position: relative;
  left: -10px;
  width: 16px;
  height: 77px;
  border-radius: 5px 0 3px 4px;
`;

export const AchievementText = styled.Text`
  color: white;
  font-size: 15px;
  padding-left: 10px;
`;
