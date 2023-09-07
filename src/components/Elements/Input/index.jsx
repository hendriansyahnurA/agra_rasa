import Label from './Label';
import Input from './Input';

const InputFrom = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-6 ml-1 mr-1">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputFrom;
