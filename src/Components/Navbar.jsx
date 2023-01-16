import { React, useState } from 'react';
import { HiMenu, HiHome } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { Link } from 'react-router-dom';
import '../../src/styles/index.css';
import LogoOQA from '../assets/logo-OQA-De-removebg-preview.png';
import { MdOutlineShoppingCart } from "react-icons/md";




const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>

            <div className='flex justify-between fixed left-5 top-10 z-50 text-[#F25C05]'>
                <HiMenu className='text-4xl' onClick={() => setMenu(!menu)} />
            </div>
            <div>
                {menu && (
                    <div className='fixed mt-36 pb-40 px-8 py-4 flex flex-col gap-8 h-1/3 z-40 text-3xl rounded-xl border-4 border-[#F25c05] font-Handlee bg-black'>

                        <div className='flex flex-row items-baseline'>
                            <a to="#Home">
                                <HiHome className='text-4xl absolute left-8  text-[#F25C05]' />
                                <span className='p-8 text-white'>Inicio</span>
                            </a>
                        </div>

                        <div className='flex flex-row items-baseline'>
                            <a href='#Products' >
                                <GiNotebook className='text-4xl absolute left-8  text-[#F25C05]' />
                                <a className='p-8 text-white'>Catálogo</a>
                            </a>
                        </div>

                        <div className='flex flex-row items-baseline'>
                            <a href='#AboutUs' >
                                <IoPersonCircleOutline className='text-4xl absolute left-8  text-[#F25C05]' />
                                <span className='p-8 text-white'>Quienes Somos</span>
                            </a>
                        </div>


                    </div>
                )}
            </div>

            <section className=' w-full h-30 top-0 xl:mr-28'>
                <div className='flex justify-center text-lg diagonal-fractions '>
                    <picture className=''>
                        <img className='scale-50' src={LogoOQA} />
                    </picture>
                    <div className=''>
                        <MdOutlineShoppingCart className='fixed z-20 right-6 top-12 text-[#F25C05] text-3xl' />
                    </div>
                </div>
            </section>

        </>
    );
}

export default Navbar