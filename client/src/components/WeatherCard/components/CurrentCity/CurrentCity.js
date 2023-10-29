import Meta from "./components/Meta"
import Temperature from "./components/Temperature"
import TemperatureRange from "../../../TemperatureRange"
import Date from "../../../Date"
import Name from "../../../Name"
import WeatherIcon from "../../../WeatherIcon"



const CurrentCity = () => (
    <div>
        <Date/>
        <Name/>
        <Temperature/>
        <TemperatureRange/>
        <WeatherIcon/>
        <Meta/>
    </div>
)

export default CurrentCity