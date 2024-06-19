import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  if(currentUser){
    return <Outlet />;
  }
  toast.warning("Please sign in first")
  return <Navigate to='/sign-in' />;
}