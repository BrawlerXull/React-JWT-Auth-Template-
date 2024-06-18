import Footer from "../components/Footer"
import Header from "../components/Header"


function Profile() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 ">
      <Header/>
      <div className=' text-3xl flex-1'>Profile</div>
      <Footer />
    </div>
  )
}

export default Profile