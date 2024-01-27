
import Image from "next/image"
import Okay from '../../public/pngwing.com.png'
export default function Profile(){
    return (
        <div className={`flex w-full pt-16 max-lg:pt-5 justify-between items-start text-[black] max-md:px-2 h-auto` }>
            <div className="flex justify-around gap-10 items-center w-full h-full max-lg:flex-col max-lg:justify-center">
                <div className="flex flex-col gap-3 justify-center h-full basis-1/3 max-lg:order-2" >
                    <h1 className="text-3xl max-lg:text-2xl font-bold"><span className="text-light">Tax Advisory Services:</span>Your Partner in Tax Efficiency</h1>
                    <h3 className="text-xl opacity-80 max-lg:text-base text-justify font-bold text-[black]">
Tax Advisory Services are expert financial guidance provided to individuals and businesses to help them navigate the complexities of the tax system, optimize their tax liabilities.</h3>
                    <div className="flex gap-3">
                        <button className="bg-light text-white font-bold px-5 py-2 rounded-full cursor-pointer">Call Us</button>
                        <button className="border border-light px-5 py-2 rounded-full cursor-pointer text-black font-bold">Purchase</button>
                    </div>
                </div>
                <div className="flex  justify-center items-center  max-lg:order-1 box-border rounded-lg w-[600px] h-[300px] max-lg:w-full max-lg:h-[200px]">
                    <Image src={Okay} alt="" className="rounded-lg bg-white w-[600px] max-lg:w-full h-[300px] max-lg:h-[200px] object-cover"/>
                </div>
            </div>
        </div>
    )
}