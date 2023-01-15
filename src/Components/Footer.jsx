import React from 'react'


const Footer = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-3 gap-4  m-6 bg-white rounded-xl'>
                <div className='col-star-1 text-center'>
                    <h1 className='text-xl'>Ubicación</h1>
                    <ul className='text-gray-600 text-sm'>
                        <li>Colombia</li>
                        <li>Santander</li>
                        <li>Barrancabermeja</li>
                    </ul>
                </div>

                <div className='  text-center'>
                    <h1 className='text-xl'>Contacto</h1>
                    <ul className='text-gray-600 text-sm'>
                        <li>+57 304 211 32 35</li>
                        <li>+57 319 269 43 71</li>
                        <li className=''>Whatsapp</li>
                    </ul>
                </div>

                <div className='  text-center'>
                    <h1 className='text-xl'>Siguenos en</h1>
                    <ul className='text-gray-600 text-sm'>
                        <li>Redes sociales</li>
                        <li><a href=""><button>Facebook</button></a></li>
                        <li><a href="https://www.instagram.com/oqa_oficial/"><button>Instagram</button></a></li>
                    </ul>
                </div>
            </div>

        </div>


    )
}

export default Footer
