// link will allow us to link differenet pages or different sections in our own page
import Link from 'next/link';
import React from 'react';
// icons from react icon package
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
// styled components coming from header styles
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
{/*tag defines a division or a section in an HTML document */}
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom:"20px" }}>
            <DiCssdeck size="3rem" /> <Span>Spotamood</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
{/*The List Item element */}
        <li>
          <Link href="#mood">
            <NavLink>Mood</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#code">
            <NavLink>Code</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/tejabalu/Spot-A-Mood">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
      </Div3>
  </Container>
);

export default Header;


// headerstyles.js is to change and add icons to be used
/* default.js is wherer to change all the fonts and colors 
it is dynamic so when something is changed everything will be reflected */