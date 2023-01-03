import './DoctorProperty.scss';
export type InputProps = {
  name: string;
  value?: any;
  disabled?: boolean;
  readonly?: boolean;
  type?: 'text' | 'time' | undefined;
};

export const DoctorProperty: React.FC<InputProps> = ({ name, value }) => (
  <div className="doctor-property">
    <label>{name}</label>
    <input readOnly={true} disabled={true} value={value}></input>
  </div>
);
