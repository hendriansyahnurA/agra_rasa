import Button from '../Button';
import InputFrom from '../Input';
const FromSales = () => {
  return (
    <form action="">
      <InputFrom label="Fullname" type="name" placeholder="FullName" name="name" />
      <InputFrom label="Email" type="email" placeholder="example@mail" name="email" />
      <InputFrom label="Password" type="password" placeholder="**********" name="password" />
      <InputFrom label="Kode Sales" type="number" placeholder="05273" name="kodesales" />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FromSales;
