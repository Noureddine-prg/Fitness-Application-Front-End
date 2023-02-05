import * as React from 'react';
import {Stylesheet, Text , View, Image, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as S from "./styles";

const weightImage = '../../assets/WeightLogin.png';

const Login = ({navigation}) => {
    return(
        <S.WhiteBackground>
            <S.WeightImage
                source={require(weightImage)}
            />
            <S.ContentContainer>
                
                
                <S.InputFields>
                    
                    <S.TextFieldContainer>
                   
                        <S.InputHeader> Email </S.InputHeader>
                        <S.TextContainer>
                            <S.TextInput 
                                placeholder=''> 
                            </S.TextInput>                   
                        </S.TextContainer>
                    </S.TextFieldContainer>    
                    
                    <S.TextFieldContainer>
                        
                        <S.InputHeader> Password </S.InputHeader>

                        <S.TextContainer>
                            <S.TextInput 
                                placeholder='' secureTextEntry={true} >
                            </S.TextInput>
                        </S.TextContainer>

                        <S.ForgotPasswordContainer>
                            <S.Button title="Forgot Password" color="white"/>
                        </S.ForgotPasswordContainer>

                    </S.TextFieldContainer>


                </S.InputFields>


                <S.ButtonWrapper>
                    
                    <S.ButtonContainer>
                        <S.Button title="Login" color="black" onPress={() => navigation.navigate('Dashboard')}/>
                    </S.ButtonContainer>

                    <S.ButtonContainer>
                        <S.Button title="Sign Up" color="black"/>
                    </S.ButtonContainer>

                </S.ButtonWrapper>
            </S.ContentContainer>

        </S.WhiteBackground>


    );
} 

export default Login;

