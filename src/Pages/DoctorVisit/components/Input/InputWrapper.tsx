import './InputWrapper.scss';
export type InputProps = {
  name: string;
  value?: any;
  disabled?: boolean;
  readonly?: boolean;
  type?: 'text' | 'datetime-local';
};

export const InputWrapper: React.FC<InputProps> = ({
  name,
  value,
  disabled = false,
  readonly = false,
  type = 'text',
}) => (
  <div className="input-wrapper">
    <label>{name}</label>
    <input
      type={type}
      readOnly={readonly}
      disabled={disabled}
      value={value}
    ></input>
  </div>
);
