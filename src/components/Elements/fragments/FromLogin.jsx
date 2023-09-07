import Button from '../Button';
import InputFrom from '../Input';
const FromLogin = () => {
  return (
    <form action="">
      <InputFrom label="Email" type="email" placeholder="example@mail" name="email" />
      <InputFrom label="Password" type="password" placeholder="**********" name="password" />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FromLogin;
