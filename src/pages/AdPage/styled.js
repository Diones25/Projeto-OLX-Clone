import styled from 'styled-components'

export const Fake = styled.div `
    background-color: #ddd;
    height: ${props => props.height || 20}px;
`

export const PageArea = styled.div `
    display: flex;
    margin-top: 20px;

    .box{
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        margin-bottom: 20px;
    }
    .box--padding{
        padding: 10px;
    }

    .leftSide{
        flex: 1;
        margin-right: 20px;

        .box{
            display: flex;
        }

        .adImage{
            width: 320px;
            height: 320px;
            margin-right: 20px;

            .each-slide img{
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 320px;
            }
        }
        .adInfors{
            flex: 1;

            .adName{
                margin-bottom: 20px;

                h2{
                    margin: 0;
                    margin-top: 20px; 
                }
                small{
                    color: #999;
                }
            }
            .adDescription{

                small{
                    color: #999;
                }
            }
        }
    }

    .rightSide{
        width: 250px;

        .price span{
            color: #0000ff;
            dislay: block;
            font-size: 27px;
            font-weight: bold;
        }

        .contactSellerlink{
            background-color: #0000ff;
            color: #fff;
            height: 30px;
            border-radius: 5px;
            box-shadow: 0px 0px 4px #999;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            margin-bottom: 20px;
        }

        .createBy strong{
            display:block;
            margin-top: 3px;
        }

        .createBy small{
            display: block;
            color: #999;
            margin-top: 5px;
        }
    }
`

export const OthersArea = styled.div `
    h2{
        font-size: 20px;
    }

    .list{
        display: flex;
        flex-wrap: wrap;

        .aditem{
            width: 25%;
        }
    }
`

export const BreadChumb = styled.div `
    font-size: 13px;
    margin-top: 20px;

    a{
        display: inline-block;
        margin: 0px 5px;
        text-decoration: underline;
        color: #000;
    }
`