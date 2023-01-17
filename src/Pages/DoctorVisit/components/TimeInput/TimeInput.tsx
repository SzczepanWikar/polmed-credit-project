import { Component } from 'react';
import './TimeInput.scss';
export type TimeInputProps = {
  time: Date;
  setDate: Function;
  setIsTimeSet: Function;
};

export class TimeInput extends Component<TimeInputProps> {
  today: Date = new Date();
  availibleTime: string[] = [];
  checkedItem;
  timeOptions = [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
  ];
  setTime(hour: string, target) {
    if (this.checkedItem) {
      this.checkedItem.classList.remove('time-input__picker--checked');
    }
    this.checkedItem = target;
    this.checkedItem.classList.add('time-input__picker--checked');
    const { time, setDate, setIsTimeSet } = this.props;
    const splittedHour = hour.split(':');
    time.setHours(+splittedHour[0]);
    time.setMinutes(+splittedHour[1]);
    setDate(time);
    setIsTimeSet(true);
  }
  render() {
    this.checkedItem?.classList?.remove('time-input__picker--checked');
    this.checkedItem = null;
    if (
      this.props.time.getTime() ===
      new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        this.today.getDate(),
        0,
        0,
        0,
        0
      ).getTime()
    ) {
      this.availibleTime = this.timeOptions.filter(
        (e) => e > `${this.today.getHours()}:${this.today.getMinutes()}`
      );
    } else {
      this.availibleTime = [...this.timeOptions];
    }

    if (!this.availibleTime.length) {
      return <div>Brak wolnych terminów w tym dniu.</div>;
    }

    return (
      <div className="time-input">
        {this.availibleTime.map((e) => (
          <button
            onClick={(event) => this.setTime(e, event.target)}
            className="time-input__picker"
            key={e}
          >
            {e}
          </button>
        ))}
      </div>
    );
  }
}
