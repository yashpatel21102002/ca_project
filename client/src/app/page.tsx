"use client"
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Links from "@/components/Links";
import About from "@/components/About";
import Form from "@/components/Form"

export default function Home(){
  return(
    //outside screen // main screen
    <div className="w-[100vw] h-[400vh] bg-dark-green flex justify-center">
    {/* inner container */}
      <div className="w-[80%] max-lg:w-[100%] h-[100vh] flex flex-col justify-start max-lg:px-1">

        <Navbar/>
        <Profile/>
        <About/>
        <Links/>
        

        <Form/>
        

      </div>
    </div>
  )
}