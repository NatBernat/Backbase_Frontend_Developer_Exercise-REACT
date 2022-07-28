import { Place } from "../../types/types";
import PlaceWeatherStyled from "./PlaceWeatherStyled";

const PlaceWeather = ({
  place: { name, temperature, windSpeed },
}: {
  place: Place;
}): JSX.Element => {
  return (
    <PlaceWeatherStyled>
      <h3>{name}</h3>
      <ul>
        <li>{temperature}°C</li>
        <li>{windSpeed} km/h</li>
      </ul>
    </PlaceWeatherStyled>
  );
};

export default PlaceWeather;
