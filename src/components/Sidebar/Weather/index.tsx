import dayjs from 'dayjs';

import { Card } from '@/components/common/Card';
import { INITIAL_LOCATION } from '@/constants';

export const Weather = () => {
  fetchWeatherData();
  return <Card title="WEATHER"></Card>;
};

const setLeftPad = (value: number) => {
  if (value >= 10) return `${value}`;
  return `0${value}`;
};

const getBaseDateAndBaseTime = () => {
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

const fetchWeatherData = async () => {
  const url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst';
  const serviceKey = process.env.REACT_APP_API_KEY;
  const { base_date, base_time } = getBaseDateAndBaseTime();
  const query = `serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${INITIAL_LOCATION.x}&ny=${INITIAL_LOCATION.y}`;
  let weatherData;

  try {
    fetch(`${url}?${query}`);
  } catch {
    alert('잠시 후 다시 시도해주세요.');
  }

  return weatherData;
};
