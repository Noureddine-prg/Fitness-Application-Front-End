import styled from "styled-components/native";

export const WhiteBackground = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const WeightImage = styled.Image`
  position: absolute;

  top: 100px;
  right: 25%;
  height: 200px;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;

  top: 320px;
  height: 900px;

  background-color: rgba(30, 30, 30, 1);
  border-radius: 30px;
  border: black 2px;
`;

export const InputFields = styled.View`
  height: 30%;
  margin-top: 60px;
`;

export const TextFieldContainer = styled.View`
  display: flex;
  flex-direction: column;
  height: 100px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const TextContainer = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: rgba(255, 255, 255, 0.65);
  width: 90%;
`;

export const InputHeader = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 800;
  align-self: left;
  margin-left: 16px;
`;

export const TextInput = styled.TextInput`
  color: white;
  font-size: 20px;
  height: 40px;
  width: 90%;
`;

export const ForgotPasswordContainer = styled.View`
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  margin-right: 11px;
  margin-bottom: 5px;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 150px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 50px;
  width: 90%;
  border-radius: 25px;
  border: black;
  margin: 20px 0px;
`;

export const Button = styled.Button`
  font-weight: bold;
  width: 100%;
`;
