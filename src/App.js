import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

const Page = (props) =>{
    return(
        <BrowserRouter>
            <Template>
                <Hearder/>
                    <Routes/>
                <Footer/>
            </Template>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) =>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)