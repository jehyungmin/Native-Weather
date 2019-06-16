import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Ionicons from 'react-native-ionicons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain : {
        colors:['#00C6FB','#005BEA'],
        title: "Raining",
        subtitle: "비와요 우산 챙겨요",
        icon: 'ios-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny",
        subtitle: "날씨가 좋아요",
        icon: 'ios-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subtitle: "천둥과 비가 함께와요",
        icon: 'ios-thunderstorm'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "Clouds",
        subtitle: "날씨가 흐려요",
        icon: 'ios-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow",
        subtitle: "눈이내려요 미끄럼에 조심해요",
        icon: 'ios-snow'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "약간의 비가 와요",
        icon: 'ios-rainy-outline'
    },
    Haze: {
        colors: ['#D7D2CC', '#304352'],
        title: "Haze",
        subtitle: "안개가 조금 있어요",
        icon: 'cloudy-night'
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
