import { TextInput } from "flowbite-react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile() {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className="flex flex-col min-h-screen bg-gray-800 ">
            <Header />
            <div className="max-w-lg mx-auto p-3 w-full flex-1 flex flex-col justify-center">
                <form className="flex flex-col gap-4 ">
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
                    />
                    <TextInput
                        type="email"
                        id="email"
                        placeholder="email"
                        defaultValue={currentUser.email}
                        className="my-1"
                    />
                    <TextInput type="password" id="password" placeholder="password" 
                        className="my-1"/>
                    <button
                      type="submit"
                      className="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
                    >
                      Update
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
