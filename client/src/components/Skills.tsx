import {BsTwitter} from 'react-icons/bs'
import {AiFillMediumSquare , AiOutlineGithub,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {SiCodechef,SiLeetcode,SiCodeforces} from 'react-icons/si'
import { RxVercelLogo } from 'react-icons/rx'


export default function Skills(){
    return (
        <div className="mt-24 max-lg:mt-8">
            <div className="w-full bg-light max-lg:h-auto h-[120px] flex flex-col gap-5 items-center text-dark-green pb-2">
                <h1 className="text-2xl font-medium underline">Important Links</h1>
                <div className="grid gap-7 grid-cols-9 max-lg:grid-cols-4 max-md:grid-cols-3">
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-dark-green ">
                        <BsTwitter />
                        <span className='text-sm font-md'>Twitter</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-dark-green ">
                        <AiOutlineGithub />
                        <span className='text-sm font-md'>Github</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-dark-green ">
                        <AiFillMediumSquare />
                        <span className='text-sm font-md'>Medium</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-dark-green ">
                        <AiFillLinkedin />
                        <span className='text-sm font-md'>Linkedin</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-dark-green ">
                        <AiFillInstagram />
                        <span className='text-sm font-md'>Instagram</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-dark-green ">
                        <SiCodechef
                         />
                        <span className='text-sm font-md'>Codechef</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-dark-green ">
                        <SiCodeforces />
                        <span className='text-sm font-md'>Codeforces</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-dark-green ">
                        <SiLeetcode />
                        <span className='text-sm font-md'>Leetcode</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-dark-green ">
                        <RxVercelLogo />
                        <span className='text-sm font-md'>Vercel</span>

                    </div>
                </div>

            </div>

        </div>
    )
}