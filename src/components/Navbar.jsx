import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    `

const Language = styled.span`
    font-size:14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border:0.5px solid lightgrey;
    cursor: pointer;
    display:flex;
    align-items: center;
    margin-left:25px;
    padding: 5px;

`
const Input = styled.input`
    border:none;
`

const Center = styled.div`
    flex: 1;
    text-align:center;    
`

const Logo = styled.h1`
font-weight:bold;
`
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left:25px;
`

/* A functional component that is used to display the navbar. */
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN | TR</Language>
                    <SearchContainer>
                        <SearchIcon style={{color:"gray", fontSize:"16"}}/>
                        <Input/>
                    </SearchContainer>
                </Left>
                <Center>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }} >
                <Logo>SASMAZ</Logo>
                </Link>
                </Center>
                <Right>
                    <Link to="/register" style={{ textDecoration: 'none', color: 'black' }} >
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'black' }} >
                    <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartIcon/>     
                    </Badge>
                </MenuItem>
                </Link>
                </Right>
            </Wrapper>
        </Container>
  )
}

export default Navbar