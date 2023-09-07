import dayjs from 'dayjs';
import { INITIAL_LOCATION, WEATHER_IMAGES } from '@/constants';

type WeatherCategory = 'T1H' | 'RN1' | 'SKY' | 'UUU' | 'VVV' | 'REH' | 'PTY' | 'LGT' | 'VEC';

export interface WeatherItem {
  baseDate: string;
  baseTime: string;
  category: WeatherCategory;
  fcstDate: string;
  fcstTime: string;
  fcstValue: number;
  nx: number;
  ny: number;
}

export interface WeatherResponseBody {
  dataType: 'XML' | 'JSON';
  items: { item: WeatherItem[] };
  pageNo: number;
  numOfRows: number;
  totalCount: number;
}

export const setLeftPad = (value: number) => {
  if (value >= 10) return `${value}`;
  return `0${value}`;
};

export const getBaseDateAndBaseTime = () => {
  const now = dayjs();
  const formatter = 'YYYYMMDD';
  let base_date = '';
  let base_time = '';

  if (now.minute() < 45) {
    if (now.hour() === 0) {
      base_date = now.subtract(1, 'day').format(formatter);
      base_time = '2330';
    } else {
      base_date = now.format(formatter);
      base_time = `${setLeftPad(now.hour() - 1)}30`;
    }
  } else {
    base_date = now.format(formatter);
    base_time = `${setLeftPad(now.hour())}30`;
  }

  return { base_date, base_time };
};

export const getWeatherData = (weatherItems: WeatherItem[]) => {
  const index = 6;
  const rainy = weatherItems[index].fcstValue;
  const skyStatus = weatherItems[index * 3].fcstValue;
  const temp = weatherItems[index * 4].fcstValue;
  const weatherData = { weatherImage: WEATHER_IMAGES.rainy, temp };

  if (rainy === 0) {
    if (skyStatus === 1) weatherData.weatherImage = WEATHER_IMAGES.sun;
    else if (skyStatus === 3) weatherData.weatherImage = WEATHER_IMAGES.cloudy;
    else weatherData.weatherImage = WEATHER_IMAGES.cloud;
  }

  return weatherData;
};

export const fetchWeatherForecast = async () => {
  const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst';
  const serviceKey = process.env.REACT_APP_API_KEY;
  const { base_date, base_time } = getBaseDateAndBaseTime();
  const query = `serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${INITIAL_LOCATION.x}&ny=${INITIAL_LOCATION.y}`;
  const response = await fetch(`${url}?${query}`);

  return response.json();
};
