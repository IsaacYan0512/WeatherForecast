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

### 相同名称的组件： 出现重名，可能是通用组件，可以抽离出来
- WeatherIcon
- TemperatureRange
- Name
- Date

### 全局 Assets
- fonts
- bg image