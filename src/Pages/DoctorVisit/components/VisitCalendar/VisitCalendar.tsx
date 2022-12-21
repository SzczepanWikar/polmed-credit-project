import Calendar, { CalendarProps } from 'react-calendar';
import './VisitCalendar.scss';

export const VisitCalendar: React.FC<CalendarProps> = () => (
  <Calendar
    defaultValue={new Date()}
    minDetail="month"
    tileDisabled={({ date }) => {
      const newDate = new Date();
      newDate.setHours(0);
      newDate.setMinutes(0);
      newDate.setSeconds(0);
      newDate.setMilliseconds(0);
      return date.getDay() === 6 || date.getDay() === 0 || date < newDate;
    }}
  />
);
