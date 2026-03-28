import React from "react";
import { StatusBar } from 'expo-status-bar';

// formik

import { styles } from '../components/styles'

import { View, Text, Image, ImageBackground } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.styledContainer}>
            <StatusBar style="dark" />
            <View style={styles.innerContainer}>
                <Text style={styles.pageTitle}>Calorie Calculator</Text>
                <Image
                    resizeMode='cover'
                    source={require('./../assets/welcome-image.png')}
                    style={styles.pageLogo}
                />
                <Card
                    title="Track your calories"
                    description="Set your goals and monitor your intake."
                    icon={require('../assets/card-1-icon.png')}
                />
                <Card
                    title="View Progress"
                    description="Analyze your daily results."
                    icon={require('../assets/card-2-icon.png')}
                />
                <Card
                    title="Manage Profile"
                    description="Update your body info."
                    icon={require('../assets/card-3-icon.png')}
                />
            </View>
        </View>
    )
}
const Card = ({ title, icon, description }) => {
    return (
        <ImageBackground
            source={require('../assets/white-background.jpg')}
            style={styles.background}
            imageStyle={styles.image}
        >
            <View style={styles.cardContainer}>
                <View style={styles.row}>
                    {icon && <Image source={icon} style={styles.leftIcon} />}
                    <View style={{ flex: 1 }}>
                        <Text style={styles.cardTitle}>{title}</Text>
                        <Text style={styles.cardDescription}>{description}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>

    )
}