import React from 'react'
import Styled from 'styled-components'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import Logo from './roverexpologo.png'
import { keyframes } from 'styled-components'

const Nav = Styled.div`
a {
    text-decoration: none;
}
background-color: #fff;
border-bottom: 1px solid #f0f2f7;
z-index: -1;
`;

const NavHeader = Styled.div`
width: 100%;
display: flex;
align-items: center;
margin: 0 auto;
height: 10vh;
`;

const NavLeft = Styled.div`
width: 33.33333333333333%;
text-align: left;
margin-left: 4%;
`;

const NavCenter = Styled.div`
width: 33.33%;
display: flex;
height: 100%;
justify-content: flex-start;
align-items: center;
`;

const NavRight = Styled.div`
width: 33.33%;
display: flex;
justify-content: flex-end;
margin-right: 4%;
align-items: 'center'
`;

const DropDownTab = Styled.a`
font-size: 16px;
border: none
outline: none;
padding: 14px 16px;
background-color: inherit;
font-family: inherit;
margin: 0;
`;

const DropDown = Styled.div`
float: left;
overflow: hidden;
&:hover .yeet {
    display: flex;
}
`;

const slideIn = keyframes`
from {
    width: 0%;
    height: 0%;
}
to {
    width: 100%;
    height: 50%
}
`;

const DropDownContent = Styled.div`
display: none;
animation-duration: 3s;
animation-name: ${slideIn};
position: absolute;
background-color: #fff;
width: 100%;
height: 50%;
z-index: 1;
margin-top: 0;
`;

const DropDownContentTab = Styled.h5`
float: none;
color: black;
padding: 12px 16px;
display: block;
text-align: center;
font-size: 1rem;
padding: 0;
`;

const DropDownContainer = Styled.div`
display: flex;
width: 60%;
justify-content: space-evenly;
margin-top: 2%;
`;

const DropDownItemContainer = Styled.div`
width: 20%;

`;

const WelcomeMessageContainer = Styled.div`
border: 1px solid green;
width: 35%;
`;

const WelcomeMessageText = Styled.h1`

`;

const ActiveRoversContainer = Styled.div`
text-align: center;
width: 100%;
`;

const ActiveRoversCuriosity = Styled.a`
text-decoration: none;
color: #E78200;
&:after {
    display: block;
    content: '';
    padding-bottom: 3%;
    border-bottom: 2px solid #E78200; 
    transform: scaleX(0);  
    transition: transform 500ms ease-in-out;
}
&:hover:after {
    transform: scaleX(0.3);
}
`;

const ActiveRoversPerseverance = Styled.a`
text-decoration: none;
color: #E78200;
&:after {
    display: block;
    content: '';
    padding-bottom: 3%;
    border-bottom: 2px solid #E78200; 
    transform: scaleX(0);  
    transition: transform 500ms ease-in-out;
}
&:hover:after {
    transform: scaleX(0.46);
}
`;




const Header = () => {
    return (
        <>
        <Nav>
            <NavHeader>
                <NavLeft><img src={Logo} alt='Mars Expo Logo'/></NavLeft>

                <NavCenter>
                    <DropDown>
                        <DropDownTab href='/' title='Rovers'>Rovers</DropDownTab>
                        <DropDownContent className='yeet'>
                            <DropDownContainer>
                                <DropDownItemContainer>
                                <DropDownContentTab>Active Rovers</DropDownContentTab>
                                <hr></hr>
                                <br></br>
                                <ActiveRoversContainer>
                                <ActiveRoversCuriosity href='/' title='ActiveCuriosity'>Curiosity</ActiveRoversCuriosity>
                                </ActiveRoversContainer>
                                <br></br>
                                <ActiveRoversContainer>
                                <ActiveRoversPerseverance href='/' title='ActiveCuriosity'>Perseverance</ActiveRoversPerseverance>
                                </ActiveRoversContainer>
                                </DropDownItemContainer>
                                <div>
                                <DropDownContentTab>Documentation</DropDownContentTab>
                                </div>
                                <div>
                                <DropDownContentTab>Testing 1</DropDownContentTab>
                                </div>
                            </DropDownContainer>
                        </DropDownContent>
                    </DropDown>
                    <div style={{padding: '3%'}}>
                        <a href='/' title='Weather'>Weather</a>
                    </div>
                    <div style={{padding: '3%'}}>
                        <a href='/' title='More'>More</a>
                    </div>
                </NavCenter>

                <NavRight>
                    <div style={{padding: '3%'}}>
                        <a style={{color: '#E78200'}} href='/' title='Contact Us'><MailOutlineOutlinedIcon fontSize='medium' /></a>
                    </div>
                    <div style={{padding: '3%'}}>
                        <a style={{color: '#E78200'}} href='/' title='Recent Updates'><UpdateOutlinedIcon fontSize='medium'></UpdateOutlinedIcon></a>
                    </div>
                </NavRight>
            </NavHeader>
            <WelcomeMessageContainer>
                <WelcomeMessageText>
                    Testing
                </WelcomeMessageText>
            </WelcomeMessageContainer>
        </Nav>
        </>
    )
}

export default Header
