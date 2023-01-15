import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { AiFillInstagram } from 'react-icons/ai'
import Img from '../assets/WhatsApp Image 2022-12-22 at 1.55.04 PM.jpeg'
import Img1 from '../assets/WhatsApp Image 2022-12-22 at 1.57.18 PM.jpeg'
import Img2 from '../assets/WhatsApp Image 2022-12-22 at 1.57.48 PM.jpeg'
import Img3 from '../assets/img4.jpeg'
import Img4 from '../assets/img4..jpeg'
import Img5 from '../assets/img5.jpeg'
import Img6 from '../assets/Versace.jpeg'
import Img7 from '../assets/nike.jpeg'
import Img8 from '../assets/vans.jpeg'
import Img9 from '../assets/Balenciaga.jpeg'
import Img1h from '../assets/Yeezy700.jpeg'
import Img2h from '../assets/NIkedunk.jpeg'
import Img3h from '../assets/pumadesi.jpeg'
import Img4h from '../assets/NewBalance550.jpeg'
import Img5h from '../assets/ForumHom.jpeg'
import Img6h from '../assets/diecelfor.jpeg'
import Img7h from '../assets/Airone.jpeg'
import Img8h from '../assets/Mpower.jpeg'
import Img9h from '../assets/Balance302.jpeg'
import Img10h from '../assets/babbunny.jpeg'

const Products = () => {
    return (

        <div className='container'>
            <div id='Products' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 m-6'>

                <div className='col-span-1 md:col-span-2 '>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl p-12 text-white'>Productos</h1>
                </div>

                <div id='Woman' className='col-span-1 md:col-span-2 lg:col-span-4 lg:col-start-2 xl:col-span-6'>
                    <h2 className='text-3xl p-10 ml-10 md:text-4xl md:ml-64 lg:text-5xl lg:ml-36 xl:ml-56 text-white'>Mujeres</h2>
                </div>


                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img} alt="Product" />
                    <div className='flex justify-between h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>New Balance</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95 lg:h-56 w-full md:h-80' src={Img1} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Nike Zoom</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95 w-full lg:h-56 md:h-80' src={Img2} alt="Product" />
                    <div className='flex justify-around h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Convers All Start</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img3} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Adidas Super start</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl col-start-1'>
                    <img className=' rounded-3xl scale-95 lg:h-56 w-full md:h-80' src={Img4} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Adidas Forum</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img5} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Adidas EQ21 Run</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img6} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Versace</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img7} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Nike Blazer low</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl col-start-1 '>
                    <img className=' rounded-3xl scale-95' src={Img8} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Vans Old School</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img9} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Balenciaga</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className='col-span-1 md:col-span-2 lg:col-span-4 lg:col-start-1 xl:col-span-6 lg:p-6'>
                    <div className='flex flex-row justify-center '>
                        <h2 className='text-xl p-4  text-white'>Si buscas un Producto en especial contactanos a través de WhatSapp y te ayudamos con gusto! <br /><br /> INSTAGRAM
                        <a href='https://www.instagram.com/oqa_oficial/'><AiFillInstagram className='text-[#F25C05] scale-150 col-span-1 md:col-span-2 lg:col-span-4' /></a> </h2>
                    </div>
                </div>

                <div id='Man' className='col-span-1 md:col-span-2 lg:col-span-4 lg:col-start-2 xl:col-span-6'>
                    <h2 className='text-3xl p-10 ml-10 md:text-4xl md:ml-64 lg:text-5xl lg:ml-36 xl:ml-56 text-white'>Hombres</h2>
                </div>


                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img1h} alt="Product" />
                    <div className='flex justify-around h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Yeezy 700 Boost</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img2h} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Nike Dunk Low</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95 lg:h-56 w-full md:h-80' src={Img3h} alt="Product" />
                    <div className='flex justify-around h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Puma Designed</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img4h} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>New Balance 550</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl col-start-1'>
                    <img className=' rounded-3xl scale-95' src={Img5h} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Adidas forum</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img6h} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Diesel for</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img7h} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Air four One</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img8h} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Nike M power</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl col-start-1 '>
                    <img className=' rounded-3xl scale-95' src={Img9h} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>New Balance 302</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className=' bg-white rounded-3xl '>
                    <img className=' rounded-3xl scale-95' src={Img10h} alt="Product" />
                    <div className='flex justify-around  h-12 m-4'>
                        <p className='text-black ml-10 text-sm'>Adidas Bab-Bunny</p>
                        <button className='bg-[#F25C05] rounded-xl m-2 w-40 text-center'>Agregar<GiShoppingCart className='text-3xl ml-10 md:ml-20 lg:ml-8 pt-2'/></button>
                    </div>
                </div>

                <div className='col-span-1 md:col-span-2 lg:col-span-4 lg:col-start-1 xl:col-span-6 lg:p-6'>
                    <div className='flex flex-row justify-center '>
                        <h2 className='text-xl p-4  text-white'>Si buscas un Producto en especial contactanos a través de WhatSapp y te ayudamos con gusto! <br /><br /> INSTAGRAM
                        <a href='https://www.instagram.com/oqa_oficial/'><AiFillInstagram className='text-[#F25C05] scale-150 col-span-1 md:col-span-2 lg:col-span-4' /></a> </h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Products
