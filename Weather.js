import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Ionicons from 'react-native-ionicons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain : {
        colors:['#00C6FB','#005BEA'],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny",
        subtitle: "Go get your ass burnt",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subtitle: "Actually, outside of the house",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "Clouds",
        subtitle: "I Know, fucking boring",
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow",
        subtitle: "Do you want to build a snowman",
        icon: 'ios-snow'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "Id like rainm but gay",
        icon: 'ios-rainy-outline'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "Id like rainm but gay",
        icon: 'ios-rainy-outline'
    },
}

function Weather({ temp, weatherName}){
    return(
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    upper:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "transparent",
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10,
    },
    lower:{
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
    },
    title:{
        fontSize: 38,
        backgroundColor:"transparent",
        color:"white",
        marginBottom: 10,
        fontWeight: '300',
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24,
    }
});
