import { Card } from '@/components/common/Card';
import { monthNames } from '@/constants/monthNames';
import { DateStyled, MonthStyled, YearStyled } from './Today.style';

export const Today = () => {
  const { date, month, year } = getTodayData();

  return (
    <Card title="TODAY">
      <div>
        <DateStyled>{date}</DateStyled>
        <MonthStyled>{month}</MonthStyled>
        <YearStyled>{year}</YearStyled>
      </div>
    </Card>
  );
};

const getTodayData = () => {
  const today = new Date();
  const date = today.getDate();
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();

  return { date, month, year };
};
