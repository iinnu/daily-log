import { Card } from '@/components/common/Card';
import { MONTH_NAMES } from '@/constants';
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
  const month = MONTH_NAMES[today.getMonth()];
  const year = today.getFullYear();

  return { date, month, year };
};
