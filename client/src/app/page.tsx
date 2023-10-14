"use client"
import Navbar from "@/components/Navbar";

export default function Home(){
  return(
    //outside screen // main screen
    <div className="w-[100vw] h-[100vh] bg-dark-green flex justify-center">
    {/* inner container */}
      <div className="w-[80%] max-lg:w-[100%] h-[100vh] flex flex-col justify-start">

        <Navbar/>
      </div>
    </div>
  )
}