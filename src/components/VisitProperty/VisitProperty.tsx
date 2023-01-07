import './VisitProperty.scss';
export type InputProps = {
  name: string;
  value: any;
};

export const DoctorProperty: React.FC<InputProps> = ({ name, value }) => (
  <div className="visit-property">
    <label>{name}</label>
    <input readOnly={true} disabled={true} value={value}></input>
  </div>
);
