

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () =>{
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch('http://localhost:3000/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
                })
            const data = await res.json()
            if (res.ok){
                console.log(data)
                dispatch(signInSuccess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    } 
  return (
    <button
      className="flex justify-center bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
      onClick={handleGoogleClick}
    >
      <img
        src="https://docs.material-tailwind.com/icons/google.svg"
        alt="metamask"
        className="w-6 h-6"
      />
      <div className=" pl-5">Continue with Google</div>
    </button>
  );
}

export default OAuth;
