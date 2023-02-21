import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LoginIcon, LogoImg, Search, ShopIcon } from '../../assets/Img/img';
const Nav = styled.nav`
display: flex;
align-items: center;
padding: 26px 0px 18px 0px;
justify-content: space-between;
border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`
const Logo = styled.div``;
const List = styled.ul`
display: flex;
align-items: center;
gap: 50px;
`;
const Linnk = styled(Link)`
font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #3D3D3D;
transition: 1s;
padding-bottom: 25px;
border-bottom: 3px solid transparent;


&:hover{
    transition: 1s;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    border-bottom: 3px solid #46A358;

}
`
const Item = styled.li``;
const Right = styled.div`
display: flex;
align-items: center;
gap: 30px;
`
const LoginBtn = styled.div`
padding: 10px 17px;
display: flex;
align-items: center;
gap: 4px;
background-color: #46A358;
font-family: Cera Pro;
font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
border-radius: 6px;
color: #FFFFFF;
`
export default function Header() {
    return (
        <>
            <div className="container">
                <Nav>
                    <Logo>
                        <img src={LogoImg} alt="Logo" />
                    </Logo>
                    <List>
                        <Item><Linnk>Home</Linnk></Item>
                        <Item><Linnk>Shop</Linnk></Item>
                        <Item><Linnk>Plant Care</Linnk></Item>
                        <Item><Linnk>Blogs</Linnk></Item>
                    </List>
                    <Right>
                        <img src={Search} alt="searchIcon" />
                        <img src={ShopIcon} alt="shopIcon" />
                        <LoginBtn>
                            <img src={LoginIcon} alt="LoginBtn" />
                            Login
                        </LoginBtn>
                    </Right>
                </Nav>
            </div>
        </>
    );
}
