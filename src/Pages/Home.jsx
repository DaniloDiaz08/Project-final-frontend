import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Photo from '../assets/photo.webp'
import Photo2 from '../assets/photo.2.webp'
import Products from '../Components/Products'
import AboutUs from '../Components/AboutUs'




const Home = () => {
    return (

        <div className='container'>
            <Navbar />
            <Link className='/' />
            <div id='Home'>

                <div className=''>



                    <p className=' text-center pt-10 text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl lg:mt-20 xl:text-7xl hover:text-[#F25C05]'>BIENVENIDOS</p>
                    <p className='mt-4 mr-2 ml-2 text-white text-center text-xl'>Queremos darte más de lo que te gusta. Cuentanos que buscas y te enviaremos nuestras ofertas</p>

                    <div className='flex justify-around m-4'>
                        <div className=' '>
                            <img className=' sm:scale-50 rounded-2xl m-auto md:scale-90 lg:scale-100 lg:mt-8' src={Photo} alt="photo style Hombre" />
                            <a href="#Hombres"><button className='bg-[#F25C05] rounded-xl m-2 w-32 text-center md:ml-32 lg:ml-48'>Hombres</button></a>
                        </div>

                        <div className=''>
                            <img className=' sm:scale-50 rounded-2xl m-auto md:scale-90 lg:scale-100 lg:mt-8' src={Photo2} alt="photo style Mujer" />
                            <a href="#Mujeres"><button className='bg-[#F25C05] rounded-xl m-2 w-32 text-center md:ml-32 lg:ml-48'>Mujeres</button></a>
                        </div>

                    </div>

                    <p className=' text-center text-2xl text-[#F25C05] mt-4 hover:scale-90'>Tus Gustos Y Tu Estilo. NADA MÁS</p>

                </div>



            </div>

            <Products />
            <AboutUs />

        </div>


    )
}

export default Home
