import { Place } from "../../types/types";

const PlaceWeather = ({
  place: { name, temperature, windSpeed },
}: {
  place: Place;
}): JSX.Element => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        <li>Temperature: {temperature}ºC</li>
        <li>Wind speed: {windSpeed}km/h</li>
      </ul>
    </div>
  );
};

export default PlaceWeather;
