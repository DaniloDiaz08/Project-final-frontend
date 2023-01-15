import { React, useState } from 'react';
import { HiMenu, HiHome } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { Link } from 'react-router-dom';
import '../../src/styles/index.css';
import LogoOQA from '../assets/logo-OQA-De-removebg-preview.png'
import { MdOutlineShoppingCart } from "react-icons/md";




const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (

        <>
            <Link />

            <div className='flex justify-between text-[#F25C05] h-10 md:h-16 lg:h-16 mt-10 ml-6 mr-6'>
                <HiMenu className='text-2xl sm:text-2xl  md:text-3xl lg:text-4xl xl:text-5xl' onClick={() => setMenu(!menu)} />

                <img className='scale-150' src={LogoOQA} alt="logo" />
                <MdOutlineShoppingCart className=' text-2xl sm:text-2xl  md:text-3xl lg:text-4xl xl:text-5xl text-[#F25C05]' />
            </div>


            <div>
                {menu && (
                    <div className=" rounded-3xl mt-2 fixed h-2/4 pb-40 px-8 py-2 border-2 border-[#F25c05] flex flex-col  gap-10 z-20 font-Handlee text-3xl bg-black">

                        <div className=''>
                            <a href='#Home'>
                                <HiHome className='text-4xl absolute ml-0.1 text-[#F25C05]' />
                                <a className='p-10 text-white'>Inicio</a>
                            </a>
                        </div>

                        <div className=''>
                            <a href="#Products">
                                <GiNotebook className='text-4xl absolute ml-0.1 text-[#F25C05]' />
                                <a className='p-10 text-white'>Catálogo</a>
                            </a>
                        </div>

                        <div className='flex flex-row items-baseline'>
                            <a href='#AboutUs'>
                                <IoPersonCircleOutline className='text-4xl absolute ml-0.1 text-[#F25C05]' />
                                <span className='p-10 text-white text-2xl'>Quienes Somos</span>
                            </a>
                        </div>

                    </div>
                )
                }
            </div>
        </>
    )
}

export default Navbar
