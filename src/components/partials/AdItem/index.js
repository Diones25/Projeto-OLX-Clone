import React from 'react'
import {Item} from './styled'
import {Link} from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{
    let price = ''

    if(props.data.priceNegotiable){
        price = 'Preço Negociável'
    }
    else{
        price = `R$ ${props.data.price},00`
    }

    return(
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt=""/>
                </div> 
                <div className="itemName">{props.data.title}</div>
                <div className="itemPrice">{price}</div>
            </Link>
        </Item>
    )
}