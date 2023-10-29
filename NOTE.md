# STEPS

# Step 1: 

### 按照责任划分组件

- APP
    -WeatherCard
        - CurrentCity
        - Date
        - Name
        - Temperature
        - TemperatureRange
        - WeatherIcon
        - Meta
            - Humidity
            - Wind
            - AirQuality
            - Somatosensory

        - Forecast
            - DayOfWeek[]
                - Name
                - Date
                - WeatherIcon
                - TemperatureRange
        - SearchBar
            - Input
            - Button
        - OtherCities
            -City[]
                - WeatherIcon
                - Name
                - TemperatureRange