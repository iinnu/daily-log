import { useEffect, useState } from 'react';
import { Card } from '@/components/common/Card';
import { WeatherResponseBody, fetchWeatherForecast, getWeatherData } from './utils';

interface WeatherData {
  weatherImage: string;
  temp: number;
}

export const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({ weatherImage: '', temp: 0 });

  useEffect(() => {
    (async () => {
      const { response } = await fetchWeatherForecast();
      const body: WeatherResponseBody = response.body;
      const data: WeatherData = getWeatherData(body.items.item);
      setWeatherData(data);
    })();
  }, []);

  return (
    <Card title="WEATHER">
      <img src={weatherData.weatherImage} />
      <div>{weatherData.temp}</div>
    </Card>
  );
};
