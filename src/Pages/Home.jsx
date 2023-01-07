import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <>
            <Navbar />
            <div>
                <div>
                    <Link to="/">Hola mundo</Link>

                </div>
            </div>
        </>


    )
}

export default Home
