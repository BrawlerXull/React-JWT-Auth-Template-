import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { Toaster } from "sonner";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      
    </BrowserRouter>
  );
}
