import { Spinner, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import {
    updateStart,
    updateSuccess,
    updateFailure,
  } from '../redux/user/userSlice';
  import { useDispatch } from 'react-redux';
import { toast } from "sonner";

export default function Profile() {
    const { currentUser } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({});
    const { loading } = useSelector((state) => state.user);


  const dispatch = useDispatch();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.keys(formData).length === 0) {
          toast.error('No changes made');
          return;
        }
        try {
          dispatch(updateStart());
          const res = await fetch(`http://localhost:3000/api/user/update/${currentUser._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          if (!res.ok) {
            dispatch(updateFailure(data.message));
            toast.error(data.message);
          } else {
            dispatch(updateSuccess(data));
            toast.success("User's profile updated successfully");
          }
        } catch (error) {
          dispatch(updateFailure(error.message));
          toast.error(error.message);
        }
      };
    
    return (
        <div className="flex flex-col min-h-screen bg-gray-800 ">
            <Header />
            <div className="max-w-lg mx-auto p-3 w-full flex-1 flex flex-col justify-center">
                <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
                    <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full my-6">
                        <img
                            src={currentUser.profilePicture}
                            alt="user"
                            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
                        />
                    </div>
                    <TextInput
                        type="text"
                        id="username"
                        placeholder="username"
                        defaultValue={currentUser.username}
                        className="my-1"
                        onChange={handleChange}
                    />
                    <TextInput
                        type="email"
                        id="email"
                        placeholder="email"
                        defaultValue={currentUser.email}
                        className="my-1"
                        onChange={handleChange}
                    />
                    <TextInput
                        type="password"
                        id="password"
                        placeholder="password"
                        className="my-1"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
                    >
                        {loading ? (
                                <div className="flex justify-center">
                                <Spinner />
                                <span className="pl-3">Loading...</span>
                                </div>
                            ) : (
                                "Update"
                            )}
                    </button>
                </form>
                <div className="text-red-500 flex justify-between mt-5">
                    <span className="cursor-pointer">Delete Account</span>
                    <span className="cursor-pointer">Sign Out</span>
                </div>
            </div>
            <Footer />
        </div>
    );
}
