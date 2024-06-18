
import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const useSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    dispatch(signInStart());
    try {
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        toast.error(data.message)
        dispatch(signInFailure(data.message));
      } else {
        navigate('/home');
        dispatch(signInSuccess(data.user));
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return {
    handleSubmit,
  };
};

export default useSignUp;
