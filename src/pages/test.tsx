import { toast } from 'react-toastify';

export default function Test() {
  const onClick = () =>
    toast('Toast is good', {
      hideProgressBar: true,
      autoClose: 2000,
      type: 'success',
    });

  return <button onClick={onClick}> Click Me</button>;
}
