import styled from 'styled-components';
import insta from './insta.png';
import web from './web.png';

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10vh;
`;

export const MenuBox = styled.div`
    display: flex;
    width: ${props => props.displayWidth};
    height: ${props => props.displayHeight};
    background-color: ${props => props.backgroundFill};
    background-image: url(${props => props.menuImage});
    background-size: cover;
    background-position: center;
    align-items: center;
    /* transition: all 0.1s ease-in-out; */
    border: 2px solid #e9e7cf;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    overflow-y: auto;
`;

export const MenuName = styled.div`
    display: flex;
    background-color: rgba(0,0,0,0.7);
    color: #f2f2f2;
    font-size: 0.75rem;
    padding: 2px 0.4rem;
    border-top-right-radius: 5px;
`;

export const CafeRant = styled.div`
    padding: 20px 30px;
    font-size: 0.85rem;
`;

export const Footer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 20px;
    font-size: 0.75rem;
`;

export const FooterLeft = styled.div`
    position: relative;
    ::after{
        content: '';
        width: 30px;
        height: 30px;
        background-image: url(${web});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: absolute;
        z-index: 5;
        top: -30px;
        left: calc(50% - 15px);
    }
`;

export const FooterRight = styled.div`
    position: relative;
    ::after{
        content: '';
        width: 30px;
        height: 30px;
        background-image: url(${insta});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: absolute;
        z-index: 5;
        top: -30px;
        left: calc(50% - 15px);
    }
`;

export const FooterBottom = styled.div`
    font-size: 0.75rem;
    padding: 0 30px 20px;
    text-align: center;
    color: #000000;
`;

export const FooterCredit = styled.div`
    font-size: 0.75rem;
    padding: 0 30px 20px;
    text-align: center;
    color: #ffffff;
`;

export const MenuItemWrapper = styled.div`
    background-color: rgba(0,0,0,0.45);
    color: #ffffff;
    margin: 10px 0;
    width: 80vw;
    padding: 20px;
`;

export const MenuItemName = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`;

export const MenuItemDetail = styled.div`
    font-weight: 300;
    font-size: 1rem;
    margin-top: 10px;
`;