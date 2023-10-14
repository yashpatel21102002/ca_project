import {AiFillGithub,AiOutlineMedium} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Navbar(){
    return (
        <div className="mt-2 h-[50px] w-full max-lg:w-[100%] bg-bottle-green flex justify-between text-white items-center px-2">
            <div className="">
                <span className='text-lg font-bold max-lg:text-sm max-lg:font-semibold'>YASH PATEL</span>
            </div>
            <div className='lg:hidden'>
                <span className='cursor-pointer'>
                    <GiHamburgerMenu/>
                </span>
            </div>
            <div className="max-lg:hidden">
                <ul className="flex justify-between gap-3 text-md tracking-wide"> 
                    <li className='cursor-pointer hover:text-dark-green'>Home</li>
                    <li className='cursor-pointer  hover:text-dark-green'>About</li>
                    <li className='cursor-pointer  hover:text-dark-green'>Skills</li>
                    <li className='cursor-pointer  hover:text-dark-green'>Contact</li>
                    <li className='cursor-pointer  hover:text-dark-green'>Blog</li>
                  
                </ul>

            </div>
            <div className="max-lg:hidden">
                <ul className="flex justify-between items-center gap-1">
                    <li className='text-white text-2xl  hover:text-dark-green cursor-pointer'><AiFillGithub /></li>
                    <li className='text-white text-2xl  hover:text-dark-green cursor-pointer'><FaXTwitter /></li>
                    <li className='text-white text-2xl  hover:text-dark-green cursor-pointer'>< AiOutlineMedium/></li>
                    
                </ul>
            </div>
        </div>
    )
}