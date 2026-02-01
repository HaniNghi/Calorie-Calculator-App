import React from "react";
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from "formik";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea
} from './../components/styles'


export default function Login() {
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode='cover' source={require('./../assets/welcome-image.png')}/>
                <PageTitle>Calorie Calculator</PageTitle>
                <Subtitle>Account Login</Subtitle>

                <Formik
                    initialValues={{email: '', password: ''}} 
                >

                </Formik>
            
            </InnerContainer>
        </StyledContainer>
    )
}
