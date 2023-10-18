
import Image from "next/image"
import Okay from '../../public/okay.png'
export default function Profile(){
    return (
        <div className={`flex w-full pt-16 max-lg:pt-5 justify-between items-start text-white max-md:px-2 h-auto` }>
            <div className="flex justify-around gap-10 items-center w-full h-full max-lg:flex-col max-lg:justify-center">
                <div className="flex flex-col gap-3 justify-center h-full basis-1/2 max-lg:order-2" >
                    <h1 className="text-5xl max-lg:text-3xl">Software Developer: Transforming Ideas into <span className="text-light"> Digital Reality</span></h1>
                    <h3 className="text-xl opacity-60 font-thin">Hi👋,I am <span className="text-white animate-pulse underline italic"> yash patel</span>, you can see my portfolio from bottom of the website. click on the button to contact me. You can contact me for the collaboration works on whatsapp. </h3>
                    <div className="flex gap-3 ">
                        <button className="bg-light font-bold px-5 py-2 rounded-full cursor-pointer">Contact Me</button>
                        <button className="bg-white px-5 py-2 rounded-full cursor-pointer text-black font-bold">Products</button>
                    </div>
                </div>
                <div className="flex justify-center items-center  max-lg:order-1 box-border shadow-lg shadow-light rounded-lg w-[300px]">
                    <Image src={Okay} alt="okay" className="rounded-lg bg-light w-[300px] object-cover shadow-light"/>
                </div>
            </div>
        </div>
    )
}