import './InputWrapper.scss';
export type InputProps = {
  name: string;
  value?: any;
  disabled?: boolean;
  readonly?: boolean;
};

export const InputWrapper: React.FC<InputProps> = ({
  name,
  value,
  disabled = false,
  readonly = false,
}) => (
  <div className="input-wrapper">
    <label>{name}</label>
    <input readOnly={readonly} disabled={disabled} value={value}></input>
  </div>
);
