import Calendar from 'react-calendar';
import './VisitCalendar.scss';

export const VisitCalendar: React.FC<{
  setDate: Function;
}> = ({ setDate }) => {
  const occupiedTerms: Date[] = [
    // Occupied dates for demonstration purpose
    new Date(2023, 0, 20, 0, 0, 0),
    new Date(2023, 0, 23, 0, 0, 0),
    new Date(2023, 0, 25, 0, 0, 0),
    new Date(2023, 0, 26, 0, 0, 0),
    new Date(2023, 0, 30, 0, 0, 0),
    new Date(2023, 1, 2, 0, 0, 0),
  ];
  return (
    <Calendar
      defaultValue={new Date()}
      minDetail="month"
      tileDisabled={({ date }) => {
        const newDate = new Date();
        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        newDate.setMilliseconds(0);
        if (new Date().getHours() > 18) occupiedTerms.push(newDate);
        return (
          date.getDay() === 6 ||
          date.getDay() === 0 ||
          date < newDate ||
          occupiedTerms.some((e) => e.getTime() === date.getTime())
        );
      }}
      onChange={(event) => {
        setDate(event);
      }}
    />
  );
};
