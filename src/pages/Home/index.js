import React from 'react'
import {Link} from 'react-router-dom'

const Page = () =>{
    return(
        <>
            <h1>Página inicial</h1>
            <Link to="/about">Sobre</Link>
        </>
    )
}

export default Page