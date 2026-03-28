import styled from 'styled-components'
import { View, Text, Image, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight

//colors

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    black: "#000000",
    green: "#10B981",
    red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, black, green, red } = Colors;

export const styles = StyleSheet.create({
    styledContainer: {
        flex: 1,
        padding: 25,
        paddingTop: StatusBarHeight + 10,
        backgroundColor: primary,
    },

    innerContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },

    pageLogo: {
        width: 250,
        height: 250,
        resizeMode: "contain",
    },

    pageTitle: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        color: black,
        padding: 10,
    },

    background: {
        height: 70,
        width: "100%",
        justifyContent: "flex-end",
        marginBottom: 16,
    },
    image: {
        borderRadius: 20,
    },

    cardContainer: {
        backgroundColor: "white",
        padding: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "column",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 4,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    cardTitle: {
        color:"black",
        fontSize: 16,
        fontWeight: "700",
    },

    leftIcon: {
        width: 40,
        height: 40,
        marginRight: 12,
    },

    cardDescription: {
        fontSize: 13,
        color: "#666",
        marginTop: 2,
    },
});