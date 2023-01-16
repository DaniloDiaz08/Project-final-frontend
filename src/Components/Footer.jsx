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
                        <li className=''>Whatsapp</li>
                        <li>+57 319 269 43 71</li>
                        <li>Correo: taticp_@hotmail.com</li>
                    </ul>
                </div>

                <div className='  text-center'>
                    <h1 className='text-xl'>Siguenos en</h1>
                    <ul className='text-gray-600 text-sm'>
                        <li>Redes sociales</li>
                        <li><a href="https://m.facebook.com/profile.php?id=100065560446700&eav=AfYHJwIYwpCxU91NxqTVZ0PKDTSmjljc7x9b1SXuiurAdPVpj6DIIHMIpWz4NkP1mwI&paipv=0"><button>Facebook</button></a></li>
                        <li><a href="https://www.instagram.com/oqa_oficial/"><button>Instagram</button></a></li>
                    </ul>
                </div>
            </div>

        </div>


    )
}

export default Footer
