import {React, useState } from 'react';
import { HiMenu, HiStar, HiHome } from "react-icons/hi";
import { AiOutlineWoman, AiOutlineMan } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GiTargetShot } from "react-icons/gi";


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
           
            <div className='fixed left-5 z-30 w-fit h-fit rounded-full text-black hover:text-amber-400'
                onClick={() => setMenu(!menu)}>
                <HiMenu className='text-4xl' />
            </div>

            <div className='{menu && (fixed h-fit pb-40 px-8 py-16 flex flex-col gap-4 z-20 text-3xl bg-black drop-shadow-2xl text-white'>

                <div className='flex flex-row items-baseline'>
                    <Link>
                        <HiHome className='text-4xl absolute left-0 ' />
                        <span className='p-8'>Inicio</span>
                    </Link>
                </div>

                <div className='flex flex-row items-baseline'>
                    <Link>
                        <AiOutlineWoman className='text-4xl absolute left-0 ' />
                        <span className='p-8'>Mujeres</span>
                    </Link>
                </div>

                <div className='flex flex-row items-baseline'>
                    <Link>
                        <AiOutlineMan className='text-4xl absolute left-0 ' />
                        <span className='p-8'>Hombres</span>
                    </Link>
                </div>

                <div className='flex flex-row items-baseline'>
                    <Link>
                        <HiStar className='text-4xl absolute left-0 ' />
                        <span className='p-8'>Destacados</span>
                    </Link>
                </div>

                <div className='flex flex-row items-baseline'>
                    <Link>
                        <IoPersonCircleOutline className='text-4xl absolute left-0 ' />
                        <span className='p-8'>Quienes Somos</span>
                    </Link>
                </div>

                <div className='flex flex-row items-baseline'>
                    <Link>
                        <IoEyeSharp className='text-4xl absolute left-0 ' />
                        <span className='p-8'>Visión</span>
                    </Link>
                </div>

                <div className='flex flex-row items-baseline'>
                    <Link>
                        <GiTargetShot className='text-4xl absolute left-0 ' />
                        <span className='p-8'>Misión</span>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Navbar
