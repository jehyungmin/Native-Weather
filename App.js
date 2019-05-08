import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from './Weather';

const API_KEY = "5a5977d4f70f1884a7f8a1bc67cfaa70";

export default class App extends Component {
  state ={
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      (error) => {
        console.log(error);
        this.setState({
          error: error
        });
      }
    );

      console.log('hello3');
  }
  
  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name:json.weather[0].main,
        isLoaded: true
      });
    });
  }
  render() {
    const { isLoaded, error, temperature, name} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.ceil(temperature-273.15)}/>
            ) : (
            <View style = {styles.loading}>
              <Text style={styles.loadingText}>Getting the weather</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // alignItems: "stretch",
    // flexWrap: "wrap"
  },
  loading:{
    flex: 1,
    backgroundColor:'#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 24,
    
  },
  errorText:{
    color: "red",
    backgroundColor:"transparent",
    marginBottom: 40,
  }
});
