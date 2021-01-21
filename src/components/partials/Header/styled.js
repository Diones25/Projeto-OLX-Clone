import styled from 'styled-components'

export const HeaderArea = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom; 1px solid #ccc;
    .container{
        max-width: 1000px;
        margin: auto;
        display: flex;
        height: 60px;
    }

    a{
        text-decoration: none;
    }

    .logo{
        flex: 1;
        display: felx;
        align-items: center;

        .logo-1,
        .logo-2,
        .logo-3{
            font-size: 27px;
            font-weight: bold;
        }
        .logo-1{color: #ff0000}
        .logo-2{color: #00ff00}
        .logo-3{color: #0000ff}
    }
`