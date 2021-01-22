import React from 'react'
import {Link} from 'react-router-dom'

const Page = () =>{
    return(
        <>
            <h1>Página não encontrada</h1>
            <Link to="/about">Voltar para a HOME</Link>
        </>
    )
}

export default Page