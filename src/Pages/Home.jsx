import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Photo from '../assets/photo.webp'
import Products from '../Components/Products'
import AboutUs from '../Components/AboutUs'




const Home = () => {
    return (

        <div className='container'>
            <Navbar />
            <Link className='/'/>
            <div id='Home'>

                <div className=''>



                    <p className=' text-center pt-10 text-2xl text-white sm:text-3xl md:text-4xl lg:text-5xl lg:mt-20 xl:text-7xl hover:text-[#F25C05]'>BIENVENIDOS</p>
                    <img className=' scale-75 rounded-2xl m-auto md:scale-90 lg:scale-100 lg:mt-8' src={Photo} alt="photo style" />
                    <p className=' text-center text-2xl text-[#F25C05] mt-4 hover:scale-90'>Tus Gustos Y Tu Estilo. NADA MÁS</p>
                    <p className='mt-4 mr-2 ml-2 text-white text-center text-xl'>Queremos darte más de lo que te gusta. Cuentanos que buscas y te enviaremos nuestras ofertas</p>

                </div>

                

            </div>

             <Products/>
             <AboutUs/>

        </div>


    )
}

export default Home
