import AppStyled from "./AppStyled";
import PlaceWeather from "./components/PlaceWeatherCard/PlaceWeather";

const placeData = {
  name: "Barcelona",
  temperature: 35,
  windSpeed: 12,
};

const App = (): JSX.Element => {
  return (
    <AppStyled className="App">
      <h1>Weather app with REACT</h1>
      <PlaceWeather place={placeData} />
    </AppStyled>
  );
};

export default App;
