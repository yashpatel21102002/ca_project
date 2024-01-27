"use client"
import Profile from "@/components/Profile";
import Links from "@/components/Links";
// import About from "@/components/About";
import About from '@/components/About'
import Form from "@/components/Form"
import Slider from "@/components/Slider";
import Accordian from "@/components/Accordian";

export default function Home(){
  return(
    //outside screen // main screen
    <div className="w-[100vw]  bg-white flex justify-center">
    {/* inner container */}
      <div className="w-[80%] max-lg:w-[100%] mb-5 flex flex-col justify-start max-lg:px-1">

        {/* <Profile/> */}
        <Slider/>
        <About/>
        <Links/>
          
        <div className="flex justify-center items-center w-full">
          <Accordian/>
        </div>

        <Form/>
        

      </div>
    </div>
  )
}