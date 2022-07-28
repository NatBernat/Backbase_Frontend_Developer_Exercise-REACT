import AppStyled from "./AppStyled";
import placeWeather from "./components/placeWeatherCard/placeWeatherCard";

const barcelonaData = { name: "Barcelona", temperature: 35, windSpeed: 12 };
const App = (): JSX.Element => {
  return (
    <AppStyled className="App">
      <h1>Weather app with REACT</h1>
      {placeWeather(barcelonaData)}
    </AppStyled>
  );
};

export default App;
