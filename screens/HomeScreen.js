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
} from '../components/styles'

import { View } from "react-native";

export default function HomeScreen() {
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Calorie Calculator</PageTitle>
                <PageLogo resizeMode='cover' source={require('./../assets/welcome-image.png')}/>
                
            
            </InnerContainer>
        </StyledContainer>
    )

    const HomeElementContainer = ({title, icon, description }) => {
        return (
            <View>
                
            </View>
        )
    }
    
}
