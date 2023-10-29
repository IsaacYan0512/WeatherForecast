import TemperatureRange from "../../../../../TemperatureRange";
import WeatherIcon from "../../../../../WeatherIcon";
import Name from "../../../../../Name";
import Date from "../../../../../Date";

const DayOfWeek = () => {
  return (
    <div>
      <Name />
      <Date />
      <WeatherIcon />
      <TemperatureRange />
    </div>
  );
};

export default DayOfWeek;
