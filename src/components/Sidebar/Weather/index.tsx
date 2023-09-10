import { useEffect, useState } from 'react';
import { Card } from '@/components/common/Card';
import { WeatherResponseBody, fetchWeatherForecast, getWeatherData } from './utils';
import { Img, ImgBase, Wrapper } from './Weather.style';
import { Text } from '@/components/common/Text';

interface WeatherData {
  weatherImage: string;
  temp: number;
}

/**
 * @todo 날씨, 온도 로딩에 스켈레톤 이미지 추가
 */
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
      <Wrapper>
        <ImgBase>
          <Img src={weatherData.weatherImage} alt="weather forecast" />
        </ImgBase>
        <Text $fontSize="subTitle" $fontWeight="semiBold">
          {weatherData.temp}℃
        </Text>
      </Wrapper>
    </Card>
  );
};
