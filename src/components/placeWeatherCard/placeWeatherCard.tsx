import { Place } from "../../types/types";

const placeWeather = (place: Place): JSX.Element => {
  return (
    <div>
      <h3>{place.name}</h3>
      <ul>
        <li>Temperature: {place.temperature}ºC</li>
        <li>Wind speed: {place.windSpeed}km/h</li>
      </ul>
    </div>
  );
};

export default placeWeather;
